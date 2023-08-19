<script>
  // @ts-nocheck
  import { ethelLunchMenu, ethelBreakfastMenu } from "$lib/menu";
  import { ethelInfo } from "$lib/info";
  import MenuSection from "../../components/MenuSection.svelte";
  import Header from "../../components/Header.svelte";
  import SizeButton from "../../components/SizeButton.svelte";
  import SEO from "../../components/SEO.svelte";
  import Info from "../../components/Info.svelte";
  const lunchSections = Object.keys(ethelLunchMenu);
  const breakfastSections = Object.keys(ethelBreakfastMenu);
</script>

<SEO url="https://eaganscafe.com/ethel" title="Ethel Eagans Cafe" />

<Header phone="(360) 978-5410" tel="+13609785410" />

<main class="container">
  <Info info={ethelInfo} />
  <SizeButton />

  <section id="lunch_menu" class="pt-8 grid gap-8 justify-center">
    {#each lunchSections as section}
      <MenuSection menu={ethelLunchMenu[section]} />
    {/each}
  </section>

  <section id="breakfast_menu" class="pt-8 grid gap-8 justify-center">
    {#each breakfastSections as section}
      <MenuSection menu={ethelBreakfastMenu[section]} />
    {/each}
  </section>

</main>
