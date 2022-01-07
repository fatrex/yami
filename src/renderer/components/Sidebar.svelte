<script>
  import { folders } from '../stores';

  import AccountPicker from './Account/AccountPicker.svelte'
  import Logo from '../images/logo.png'
</script>

<div
  class="flex flex-col w-64 h-screen px-4 pt-2 pb-8 bg-gray-800 border-r"
>
  <div class="flex flex-row items-center justify-center">
    <img class="h-14" alt="yami" src={Logo} />
    <h2 class="pl-3 text-3xl font-semibold text-gray-800 dark:text-white text-center">yami</h2>
  </div>


  <div class="flex flex-col justify-between flex-1 mt-6">
    <nav class="grid grid-flow-row gap-2">
      {#if $folders.length > 0}
      {#each $folders as folder}
      <button
        type="button"
        class="flex items-center px-2 py-1 text-gray-700 bg-gray-200 rounded cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>

        <span class="mx-1 text-sm text-left">
          <p>{folder.name}</p>
        </span>
      </button>
      {/each}
      {/if}
    </nav>

    <div class="flex items-center mb-9">
      <AccountPicker />
    </div>
  </div>
</div>
