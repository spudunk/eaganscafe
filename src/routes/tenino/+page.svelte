<script>
  // @ts-nocheck
  import { teninoMenu } from "$lib/menu";
  import { teninoInfo } from "$lib/info";
  import MenuSection from "../../components/MenuSection.svelte";
  import Header from "../../components/Header.svelte";
  import SizeButton from "../../components/SizeButton.svelte";
  import SEO from "../../components/SEO.svelte";
  import Info from "../../components/Info.svelte";
  const sections = Object.keys(teninoMenu);
</script>

<SEO title="Loretta Eagans Cafe" url="https://eaganscafe.com/ethel" />

<Header phone="(360) 264-8791" tel="+13602648791"/>

<main class="container mt-16">
  <Info info={teninoInfo} />

  <SizeButton />

  <section id="menu" class="mt-8 grid gap-8 justify-center">
    {#each sections as section}
      <MenuSection menu={teninoMenu[section]} />
    {/each}
  </section>
</main>
