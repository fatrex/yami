<script>
  import Modal from '../Modal.svelte'

  import { currentAccount } from '../../stores'

  async function save (closeModal) {
    await window.accounts.save($currentAccount)
    closeModal()
  }
</script>

<Modal>
  <div slot="trigger" let:open>
    <button class="bg-white p-2 rounded flex flex-row mx-auto items-center" on:click={open}>
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
        </svg>
      </div>
      <p class="flex pl-3">Add account</p>
    </button>
  </div>

  <div slot="header" class="bg-gray-800 text-white p-5">
    Add new account
  </div>

  <div slot="content" class="p-5">
    <form class="flex flex-col">
      <label for="host">Host</label>
      <input class="rounded border-gray-200 border-2" id="host" type="text" bind:value={$currentAccount.host}>

      <label for="port">Port</label>
      <input class="rounded border-gray-200 border-2" id="port" type="number" bind:value={$currentAccount.port}>

      <label for="user">Username/email</label>
      <input class="rounded border-gray-200 border-2" id="user" type="text" bind:value={$currentAccount.user}>

      <label for="password">Password</label>
      <input class="rounded border-gray-200 border-2" id="password" type="password" bind:value={$currentAccount.password}>
    </form>
  </div>

  <div slot="footer" class="flex flex-row justify-end space-x-4 p-2" let:store={{close}}>
    <button on:click={close} class="border-2 border-gray-800 rounded p-2 w-1/3">Cancel</button>
    <button class="bg-gray-800 rounded p-2 text-white w-1/3" on:click={save(close)}>Save</button>
  </div>
</Modal>
