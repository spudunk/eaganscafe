<script lang="ts">
  import { page } from "$app/stores";
  import IconMapMarker from "~icons/mdi/map-marker";
  import IconPhone from "~icons/mdi/phone";
  import IconFacebook from "~icons/ant-design/facebook-filled";
  import IconRestaurantMenu from "~icons/mdi/restaurant-menu";
  import type { LocationInfo } from "$lib/types";

  export let info: LocationInfo;
</script>

{#if info}
  <section
    id="info"
    class={`flex gap-1 flex-col items-center pt-4 text-center ${$$props.class}`}
  >
    {#if $page.url.pathname == "/"}
      <!-- home page Heading -->
      <a href={info.route} class="px-2 py-1">
        <h2
          class="flex gap-4 items-center text-2xl font-bold text-blue-800 dark:text-blue-300 underline"
        >
          <IconRestaurantMenu />
          {info.heading}
        </h2>
      </a>
    {:else}
      <!-- location page Heading -->
      <h1 class="px-2 py-1 text-3xl font-bold font-display">{info.heading}</h1>
    {/if}

    <a
      class="text-blue-900 dark:text-blue-200 px-4 py-2 flex items-center gap-2"
      target="_blank"
      href={info.navLink}
    >
      <IconMapMarker class="text-xl" />
      {info.address}
    </a>

    <a
      href={info.telLink}
      class="text-blue-900 dark:text-blue-200 px-4 py-2 flex items-center gap-2"
    >
      <IconPhone class="text-xl" />
      {info.tel}
    </a>

    {#if info.facebookLink}
      <a
        class="text-blue-900 dark:text-blue-200 px-4 py-2 flex items-center gap-3"
        href={info.facebookLink}
        target="_blank"
      >
        <IconFacebook class="text-xl" />
        {info.facebookName}
      </a>
    {/if}

    {#each info.details as line}
      <span>{line}</span>
    {/each}
  </section>
{/if}
