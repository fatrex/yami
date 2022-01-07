<script>
  import { currentAccount, currentMessage } from '../stores';

  export let seq
  export let subject
  export let from
  export let date

  function humanDate(date) {
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()
    const year = new Date(date).getFullYear()
    return `${day}/${month}/${year}`
  }

  async function openContent() {
    const message = await window.messages.open({ account: $currentAccount, seq})
    currentMessage.set(message)
  }
</script>

<div 
  class="text-sm grid grid-flow-col grid-cols-12 items-center hover:bg-gray-200 cursor-pointer" 
  on:click={openContent}
  class:bg-gray-200="{$currentMessage && $currentMessage.seq === seq}"
>
  <div class="col-span-10 pl-2 py-1 flex flex-col">
    <p class="text-sm font-thin">{humanDate(date)}</p>
    <p class="font-medium">{subject}</p>
  </div>
  <div class="flex flex-col justify-self-end col-span-2 text-right pr-2">
    <p class="text-sm font-light">{from[0].address}</p>
  </div>
</div>
