<script lang="ts">
  export const prerender = true;
  import { teninoMenu } from "$lib/menu";
  import { teninoInfo } from "$lib/info";
  import MenuSection from "$lib/components/MenuSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import SizeButton from "$lib/components/SizeButton.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
</script>

<SEO title="Loretta Eagans Cafe" url="https://eaganscafe.com/ethel" />

<Header phone="(360) 264-8791" tel="+13602648791" />

<main class="container">
  <Info info={teninoInfo} />

  <SizeButton />

  <section id="menu" class="grid gap-8 justify-center">
    {#each Object.entries(teninoMenu) as [_, section]}
      <MenuSection menu={section} />
    {/each}
  </section>
</main>
