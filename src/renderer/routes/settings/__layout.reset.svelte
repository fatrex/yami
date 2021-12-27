<script>
  import { page } from '$app/stores'
</script>

<div class="flex border-b-2 border-gray-200">
  <a
    href="/settings/accounts"
    class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 border-gray-800 whitespace-nowrap focus:outline-none"
    class:bg-gray-800="{$page.path === '/settings/accounts'}"
    class:text-white="{$page.path === '/settings/accounts'}"
    class:border-gray-800="{$page.path === '/settings/accounts'}"
    >
    Accounts
  </a>
  <a
    href="/settings/data"
    class="h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 border-gray-800 whitespace-nowrap focus:outline-none"
    class:bg-gray-800="{$page.path === '/settings/data'}"
    class:text-white="{$page.path === '/settings/data'}"
    class:border-gray-800="{$page.path === '/settings/data'}"
  >
    Data
  </a>
</div>

<div class="container mx-auto p-2">
  <slot />
</div>
