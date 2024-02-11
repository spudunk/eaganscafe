<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
  // import { info } from "$lib/info";
  import { preloadData } from "$app/navigation";
  import { onMount } from "svelte";
  import type { Data } from "$lib/types";

  export let data: Data;
  // console.log("+page.svelte data: ", data);

  onMount(() => {
    preloadData("/ethel");
    preloadData("/tenino");
  });
</script>

<SEO />

<Header />

<main class="container text-center flex flex-col items-center gap-4">
  <h1 class="text-3xl">Eagans Diners</h1>

  <p class="max-w-[70ex]">
    {#if data.description}
      {data.description}
    {:else}
      <p>No Data Loaded</p>
    {/if}
  </p>

  <Info info={data.ethelInfo} class="" />
  <Info info={data.teninoInfo} class="" />
</main>
