<script>
  import { accounts } from '../../stores'

  import AccountChoice from './AccountChoice.svelte';
  import AccountNew from './AccountNew.svelte';
</script>

<!-- Dropdown toggle button -->
{#if $accounts.length > 0}
  <AccountChoice />
{:else}
  <AccountNew />
{/if}