<script lang="ts">
  import { teninoMenu } from "$lib/menu";
  import { teninoInfo } from "$lib/info";
  import MenuSection from "$lib/components/MenuSection.svelte";
  import Header from "$lib/components/Header.svelte";
  import SizeButton from "$lib/components/SizeButton.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Info from "$lib/components/Info.svelte";
</script>

<SEO title={teninoInfo.heading} url="https://eagansdiner.com/tenino" description="Eagans T9O Drive-In is located in Tenino, WA. Come try us out for lunch or call in an order for pick-up." />

<Header phone="(360) 264-8791" tel="+13602648791" />

<main class="container">
  <Info info={teninoInfo} />

  <SizeButton />

  <section id="menu" class="grid gap-8 justify-center">
    <p class="mt-8 max-w-[70ex] text-center">T9O menu coming soon. For prices please see our Facebook. <br /> To place an order please call. </p>

    <!-- {#each Object.values(teninoMenu) as section}
      <MenuSection menu={section} />
    {/each} -->
  </section>
</main>
