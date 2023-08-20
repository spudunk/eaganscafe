<script>
  // @ts-nocheck
  import { teninoMenu } from "$lib/menu";
  import { teninoInfo } from "$lib/info";
  import MenuSection from "$lib/components/MenuSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import SizeButton from "$lib/components/SizeButton.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
  const sections = Object.keys(teninoMenu);
</script>

<SEO title="Loretta Eagans Cafe" url="https://eaganscafe.com/ethel" />

<Header phone="(360) 264-8791" tel="+13602648791"/>

<main class="container">
  <Info info={teninoInfo} />

  <SizeButton />

  <section id="menu" class="grid gap-8 justify-center">
    {#each sections as section}
      <MenuSection menu={teninoMenu[section]} />
    {/each}
  </section>
</main>
