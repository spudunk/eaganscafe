<script>
  // @ts-nocheck
  import { ethelMenu } from "$lib/menu";
  import MenuSection from "../components/MenuSection.svelte";
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";
  const sections = Object.keys(ethelMenu);

  let toggleFontSize;
  let larger = false;
  onMount(() => {
    const root = document.documentElement;
    toggleFontSize = () => {
      if (larger) {
        larger = false;
        root.style.fontSize = null;
      } else {
        larger = true;
        root.style.fontSize = "1.25rem";
      }
    };
  });
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>Ethel Eagans Cafe</title>
  <meta
    name="description"
    content="Family owned cafe serving burgers, fries, shakes, and more. Come try us out for lunch!"
  />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://eaganscafe.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Ethel Eagans Cafe" />
  <meta
    property="og:description"
    content="Family owned cafe serving burgers, fries, shakes, and more. Come try us out for lunch!"
  />
  <!-- <meta property="og:image" content="" /> -->

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="eaganscafe.com" />
  <meta property="twitter:url" content="https://eaganscafe.com" />
  <meta name="twitter:title" content="Ethel Eagans Cafe" />
  <meta
    name="twitter:description"
    content="Family owned cafe serving burgers, fries, shakes, and more. Come try us out for lunch!"
  />
  <!-- <meta name="twitter:image" content="" /> -->
  <!-- <link rel=“canonical” href=“https://eaganscafe.com” /> -->
</svelte:head>

<Header phone="(360) 978-5410" />

<main class="container mt-16">
  <section id="info" class="flex gap-1 flex-col items-center mt-4">
    <h1 class="text-2xl font-bold">Ethel Eagans Cafe</h1>
    <a
      class="link"
      href="https://www.google.com/maps/place/1411+US-12,+Chehalis,+WA+98532"
    >
      1411 US-12, Ethel, WA
    </a>
    <a href="tel:+13609785410" class="link">(360) 978-5410</a>
    <span>Mon-Wed 10am - 8pm</span>
    <span>Thur-Sun 7am - 8pm</span>
    <button on:click={toggleFontSize} class="outline outline-slate-400 py-1 px-2 mt-4 rounded md:hidden">MAKE {larger ? "SMALLER" : "LARGER"}</button>
  </section>

  <section id="menu" class="mt-8 grid gap-8 justify-center">
    {#each sections as section}
      <MenuSection menu={ethelMenu[section]} />
    {/each}
  </section>
</main>


