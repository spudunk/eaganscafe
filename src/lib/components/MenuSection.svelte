<script>
  // @ts-nocheck
  import MenuBox from "./MenuBox.svelte";
  export let menu;
</script>

<div class="break-inside-avoid lg:mt-6 print:mt-6">
  <h2 class="text-2xl font-bold dark:font-medium">{menu.heading}</h2>
  {#if menu.description}
    {#each menu.description as p}
      <p class="mt-2">{p}</p>
    {/each}
  {/if}
  <MenuBox items={menu.items} />
</div>
