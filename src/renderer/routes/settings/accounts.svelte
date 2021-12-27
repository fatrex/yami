<script>
  import { accounts } from '../../stores'

  import AccountChoice from '../../components/Account/AccountChoice.svelte';
  import AccountNew from '../../components/Account/AccountNew.svelte';
</script>

<!-- Dropdown toggle button -->
{#if $accounts.length > 0}
  <AccountChoice />
{:else}
  <AccountNew />
{/if}