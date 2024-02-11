<script lang="ts">
  // import { info } from "$lib/info";
  import MenuSection from "$lib/components/MenuSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import SizeButton from "$lib/components/SizeButton.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
  import type { Data } from "$lib/types";
  export let data: Data;
</script>

<SEO
  title={data.teninoInfo.heading}
  url={data.teninoInfo.url}
  description="Eagans T9O Drive-In is located in Tenino, WA. Come try us out for lunch or call in an order for pick-up."
/>

<Header phone="(360) 264-8791" tel="+13602648791" />

<main class="container">
  <Info info={data.teninoInfo} />

  <SizeButton />

  <!-- Banner -->
  {#if data.teninoInfo.banner}
    <div class="flex justify-center print:hidden">
      <p class="my-8 max-w-[70ex] text-center">
        {data.teninoInfo.banner}
      </p>
    </div>
  {/if}

  <!-- Menu -->
  <section id="menu" class="grid gap-8 justify-center">
    {#each data.teninoMenu.sections as section}
      <MenuSection menu={section} />
    {/each}
  </section>
</main>
