<script lang="ts">
  export let phone = "";
  export let tel = "";
</script>

<header
  class="fixed top-0 left-0 w-full bg-neutral-200 dark:bg-neutral-800 opacity-90 py-2 print:hidden"
>
  <div class="container flex justify-between items-center">
    <a class="logo" href="/">Eagans Diner</a>

    {#if tel}
      <div>
        <a
          href="tel:{tel}"
          class="font-semibold border border-neutral-400 rounded px-2 py-1 my-1 sm:hidden"
          >Call Now</a
        >
        <a href="tel:{tel}" class="hidden sm:inline py-1 my-1">{phone}</a>
      </div>
    {/if}
  </div>
</header>
