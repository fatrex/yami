<!-- Thans to https://dev.to/vibhanshu909/how-to-create-a-full-featured-modal-component-in-svelte-and-trap-focus-within-474i -->

<script context="module">
  // for passing focus on to the next Modal in the queue.
  // A module context level object is shared among all its component instances. [Read More Here](https://svelte.dev/tutorial/sharing-code)
  const modalList = []
</script>

<script>
	import { modalStore } from '../stores/modal'

  const store = modalStore(false)
  const { isOpen, open, close } = store
  function keydown(e) {
    e.stopPropagation()
    if (e.key === 'Escape') {
      close()
    }
  }
  function transitionend(e) {
    const node = e.target
    node.focus()
  }
  function modalAction(node) {
    const returnFn = []
    // for accessibility
    if (document.body.style.overflow !== 'hidden') {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      returnFn.push(() => {
        document.body.style.overflow = original
      })
    }
    node.addEventListener('keydown', keydown)
    node.addEventListener('transitionend', transitionend)
    node.focus()
    modalList.push(node)
    returnFn.push(() => {
      node.removeEventListener('keydown', keydown)
      node.removeEventListener('transitionend', transitionend)
      modalList.pop()
      // Optional chaining to guard against empty array.
      modalList[modalList.length - 1]?.focus()
    })
    return {
      destroy: () => returnFn.forEach((fn) => fn()),
    }
  }
</script>

<slot name="trigger" {open}>
  <!-- fallback trigger to open the modal -->
  <button on:click={open}>Open</button>
</slot>
{#if $isOpen}
  <div class="modal fixed top-0 left-0 w-full h-screen flex justify-center items-center opacity-100" use:modalAction tabindex="0">
    <div class="backdrop opacity-70 bg-slate-500 absolute w-full h-full" on:click={close} />

    <div class="content-wrapper z-10 rounded bg-white overflow-hidden w-96">
      <slot name="header" {store} />

      <div class="content">
        <slot name="content" {store} />
      </div>

      <slot name="footer" {store}>
        <!-- fallback -->
        <div>
          <button on:click={close}>Close</button>
        </div>
      </slot>
    </div>

  </div>
{/if}