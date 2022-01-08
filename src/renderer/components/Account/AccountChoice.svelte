<script>
import { modalStore } from '../../stores/modal';

  import { folders, messages, currentAccount, accounts } from '../../stores'

  import Modal from '../Modal.svelte'
  import AccountNew from './AccountNew.svelte';

  async function pick (account, closeModal) {
    const responses = await Promise.all([window.folders.load(account), window.messages.load(account)]);
    if (responses.length > 0) {
      folders.set(responses[0])
      messages.set(responses[1])
      currentAccount.set(account)
      closeModal()
    }
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

  <div slot="header" class="bg-gray-800 text-white p-5 flex flex-row items-center" let:store={{close}}>
    <h3 class="flex grow">
      Choose account
    </h3>
    <div class="flex grow-0">
      <button on:click={close}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>

  <div slot="content" class="p-5 flex flex-col" let:store={{close}}>
    {#each $accounts as account}
      <button class="rounded border-2 border-gray-800 my-2" on:click={pick(account, close)}>{account.user}</button>
    {/each}
  </div>

  <div slot="footer" class="flex flex-row justify-end space-x-4 p-2">
    <AccountNew />
  </div>
</Modal>
