<script>
  export let subject
  export let from
  export let date

  function humanDate(date) {
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()
    const year = new Date(date).getFullYear()
    return `${day}/${month}/${year}`
  }
</script>

<div class="text-sm grid grid-flow-col grid-cols-12 items-center h-10 hover:bg-gray-200 cursor-pointer">
  <div class="justify-self-start col-span-1 pl-2">
    <p>{humanDate(date)}</p>
  </div>
  <div class="col-span-9">
    <p class="font-semibold">{subject}</p>
  </div>
  <div class="flex flex-col justify-self-end col-span-2 text-right pr-2">
    <p class="text-sm">{from[0].address}</p>
  </div>
</div>
