<script lang="ts">
  export const prerender = true;
  import { page } from "$app/stores";
  import { ethelLunchMenu, ethelBreakfastMenu } from "$lib/menu";
  import { ethelInfo } from "$lib/info";
  import { tab } from "$lib/stores";
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

  page.subscribe((value) => {
    if (value.url.searchParams.has("tab")) {
      tab.set(value.url.searchParams.get("tab") || "");
    }
  });
</script>

<SEO url="https://eaganscafe.com/ethel" title="Ethel Eagans Cafe" />

<Header phone="(360) 978-5410" tel="+13609785410" />

<main class="container">
  <Info info={ethelInfo} />
  <SizeButton />

  <!-- Tabs -->
  <div class="flex gap-2 text-xl mt-8 px-2 border-b print:hidden">
    <TabButton id="lunch">Lunch</TabButton>
    <TabButton id="breakfast">Breakfast</TabButton>
  </div>

  <!-- {#if selectedTab == "lunch"} -->
  <!-- Lunch -->
  <section
    id="lunch"
    class={`pt-8 grid gap-8 justify-center ${
      !(selectedTab == "lunch") ? "hidden" : ""
    } print:block print:break-after-page`}
  >
    {#each Object.entries(ethelLunchMenu) as [_, section]}
      <MenuSection menu={section} />
    {/each}
  </section>
  <!-- {:else if selectedTab == "breakfast"} -->
  <!-- Breakfast -->
  <section
    id="breakfast"
    class={`pt-8 grid gap-8 justify-center ${
      !(selectedTab == "breakfast") ? "hidden" : ""
    } print:block`}
  >
    {#each Object.entries(ethelBreakfastMenu) as [_, section]}
      <MenuSection menu={section} />
    {/each}
  </section>
  <!-- {/if} -->
</main>
