<script>
  // @ts-nocheck
  import Header from "../components/Header.svelte";
  import SEO from "../components/SEO.svelte";
  import Info from "../components/Info.svelte";
  import { ethelInfo, teninoInfo } from "$lib/info";
</script>

<SEO />

<Header phone="" />

<main class="container mt-16">
  <Info info={ethelInfo} />
  <Info info={teninoInfo} />
</main>
