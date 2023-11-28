<script lang="ts">
  import { teninoMenu } from "$lib/menu";
  // import { info } from "$lib/info";
  import MenuSection from "$lib/components/MenuSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import SizeButton from "$lib/components/SizeButton.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
  export let data;
  const info = data;
  const teninoInfo = info.tenino;
</script>

<SEO
  title={teninoInfo.heading}
  url={teninoInfo.url}
  description="Eagans T9O Drive-In is located in Tenino, WA. Come try us out for lunch or call in an order for pick-up."
/>

<Header phone="(360) 264-8791" tel="+13602648791" />

<main class="container">
  <Info info={teninoInfo} />

  <SizeButton />

  <section id="menu" class="grid gap-8 justify-center">
    <div class="flex justify-center">
      <p class="mt-8 max-w-[70ex] text-center">
        Updated T9O menu coming soon. For prices or to place an order please
        call.
      </p>
    </div>

    {#each Object.values(teninoMenu) as section}
      <MenuSection menu={section} />
    {/each}
  </section>
</main>
