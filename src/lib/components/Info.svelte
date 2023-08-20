<script lang="ts">
  import { page } from "$app/stores";
  export let info = {
    route: "",
    heading: "",
    address: "",
    navLink: "",
    telLink: "",
    tel: "",
    details: [""],
  };
</script>

<section
  id="info"
  class={`flex gap-1 flex-col items-center pt-4 text-center ${$$props.class}`}
>
  {#if $page.url.pathname == "/"}
    <!-- home page Heading -->
    <a href={info.route} class="px-2 py-1">
      <h1
        class={`text-2xl font-bold text-blue-800 dark:text-blue-300 underline`}
      >
        {info.heading}
      </h1>
    </a>
  {:else}
    <!-- location page Heading -->
    <h2 class={`px-2 py-1 text-2xl font-bold`}>{info.heading}</h2>
  {/if}
  <a
    class="text-blue-900 dark:text-blue-200 underline px-2 py-1"
    target="_blank"
    href={info.navLink}
  >
    {info.address}
  </a>
  <a href={info.telLink} class="text-blue-900 dark:text-blue-200 underline"
    >{info.tel}</a
  >
  {#each info.details as line}
    <span>{line}</span>
  {/each}
</section>
