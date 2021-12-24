<script>
  import { onMount } from 'svelte'
  import { folders, messages, accounts as storeAccounts, currentAccount } from '../stores';
  

  import Sidebar from '../components/Sidebar.svelte'

  onMount(async () => {
    const accounts = await window.accounts.load();
    if (accounts.length > 0) {
      storeAccounts.set(accounts)
      currentAccount.set(accounts[0])
      const responses = await Promise.all([window.folders.load($currentAccount), window.messages.load($currentAccount)]);
      if (responses.length > 0) {
        folders.set(responses[0])
        messages.set(responses[1])
      }
    }
  })
</script>

<div class="min-h-screen flex">
  <Sidebar />

  <main class="flex-1 min-w-0 overflow-auto ...">
		<slot></slot>
  </main>
</div>

<div class="fixed pin z-50 overflow-auto bg-smoke-light flex">
</div>

<!-- Add DEV ribbon -->
<div class="absolute transform rotate-45 bg-gray-400 text-center text-white font-semibold py-1 right-[-34px] top-[32px] w-[170px]">
  Preview
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>