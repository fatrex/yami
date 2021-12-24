<script>
  import Modal from '../Modal.svelte'

  import { currentAccount, accounts } from '../../stores'
  import { modalStore } from '../../stores/modal';

  function pick (account, closeModal) {
    console.log(account)
    closeModal()
  }
</script>

<Modal>
  <div slot="trigger" let:open>
    <button class="bg-white p-2 rounded flex flex-row mx-auto items-center" on:click={open}>
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>
      <p class="flex pl-3">{$currentAccount.user}</p>
    </button>
  </div>

  <div slot="header" class="bg-gray-800 text-white p-5">
    Choose account
  </div>

  <div slot="content" class="p-5 flex flex-col" let:store={{close}}>
    {#each $accounts as account}
      <button class="rounded border-2 border-gray-800" on:click={pick(account, close)}>{account.user}</button>
    {/each}
  </div>

  <div slot="footer" class="flex flex-row justify-end space-x-4 p-2" let:store={{close}}>
    <button on:click={close} class="border-2 border-gray-800 rounded p-2 w-1/3">Cancel</button>
  </div>
</Modal>
