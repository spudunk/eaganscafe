<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
  import { ethelInfo, teninoInfo, description } from "$lib/info";
  import { preloadData } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    preloadData("/ethel");
    preloadData("/tenino");
  });
</script>

<SEO />

<Header phone="" />

<main class="container text-center flex flex-col items-center gap-4">
  <h1 class="text-3xl">Eagans Cafes</h1>
  <p class="max-w-[70ex]">
    {description}
  </p>
  <Info info={ethelInfo} class="" />
  <Info info={teninoInfo} class="" />
</main>
