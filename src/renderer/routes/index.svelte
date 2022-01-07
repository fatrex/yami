<script>
  import SingleMessage from '../components/SingleMessage.svelte'

  import { messages, currentMessage } from '../stores'
</script>

<div>
  <!-- <button type="button" class="rounded-lg bg-gray-400 p-3" on:click={loadMessages}>Load Messages</button> -->
  <div class="grid grid-cols-1 divide-y overflow-y-scroll max-h-96">
    {#if $messages.length > 0}
    {#each $messages as message }
    <SingleMessage {...message.envelope} seq={message.seq} />
    {/each}
    {/if}
  </div>
  <hr class="border-2">
  <div class="py-10">
    {#if $currentMessage}
      <iframe class="w-full h-screen" title={$currentMessage.source.subject} srcdoc={$currentMessage.source.html}></iframe>
    {/if}
  </div>
</div>