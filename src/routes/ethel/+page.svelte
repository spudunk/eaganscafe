<script lang="ts">
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { tab } from "$lib/stores";
  import { ethelLunchMenu, ethelBreakfastMenu } from "$lib/menu";
  import { ethelInfo } from "$lib/info";
  import MenuSection from "$lib/components/MenuSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import SizeButton from "$lib/components/SizeButton.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
  import TabButton from "$lib/components/TabButton.svelte";

  let selectedTab: string;
  tab.subscribe((value) => {
    selectedTab = value;
  });

  if (browser) {
    page.subscribe((value) => {
      if (value.url.searchParams.has("tab")) {
        tab.set(value.url.searchParams.get("tab") || "");
      }
    });
  }
</script>

<SEO
  title={ethelInfo.heading}
  url={ethelInfo.url}
  description="Ethel Eagans has now opened in the old Kelly's Kountry Kafe location in Ethel, WA. Come try us out for Breakfast and Lunch or call in your order for pick-up."
/>

<Header phone="(360) 978-5410" tel="+13609785410" />

<main class="container">
  <Info info={ethelInfo} />
  <SizeButton />

  <!-- Tabs -->
  <div class="flex gap-2 text-xl mt-8 px-2 border-b print:hidden">
    <TabButton id="lunch">Lunch</TabButton>
    <TabButton id="breakfast">Breakfast</TabButton>
  </div>

  <!-- Lunch -->
  <section
    id="lunch"
    class={`pt-8 grid gap-8 justify-center ${
      !(selectedTab == "lunch") ? "hidden" : ""
    } print:block print:break-after-page`}
  >
    {#each Object.values(ethelLunchMenu) as section}
      <MenuSection menu={section} />
    {/each}
  </section>

  <!-- Breakfast -->
  <section
    id="breakfast"
    class={`pt-8 grid gap-8 justify-center ${
      !(selectedTab == "breakfast") ? "hidden" : ""
    } print:block`}
  >
    {#each Object.values(ethelBreakfastMenu) as section}
      <MenuSection menu={section} />
    {/each}
  </section>
</main>
