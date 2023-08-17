<script>
  // @ts-nocheck
  import Header from "../components/Header.svelte";
  import SEO from "../components/SEO.svelte";
  import Info from "../components/Info.svelte";
  import { ethelInfo, teninoInfo } from "$lib/info";
  import { preloadData } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(()=>{
    preloadData("/ethel");
    preloadData("/tenino");
  })

</script>

<SEO />

<Header phone="" />

<main class="container ">
  <Info info={ethelInfo} />
  <Info info={teninoInfo}  class="mt-12 mb-12"/>
</main>
