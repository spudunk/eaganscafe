<script>
  // @ts-nocheck
  import { ethelMenu } from "$lib/menu";
  import { ethelInfo } from "$lib/info";
  import MenuSection from "../../components/MenuSection.svelte";
  import Header from "../../components/Header.svelte";
  import SizeButton from "../../components/SizeButton.svelte";
  import SEO from "../../components/SEO.svelte";
  import Info from "../../components/Info.svelte";
  const sections = Object.keys(ethelMenu);
</script>

<SEO url="https://eaganscafe.com/ethel" title="Ethel Eagans Cafe" />

<Header phone="(360) 978-5410" tel="+13609785410" />

<main class="container">
  <Info info={ethelInfo} />
  <SizeButton />

  <section id="menu" class="pt-8 grid gap-8 justify-center">
    {#each sections as section}
      <MenuSection menu={ethelMenu[section]} />
    {/each}
  </section>
</main>
