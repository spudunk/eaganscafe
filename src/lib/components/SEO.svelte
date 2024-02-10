<script lang="ts">
  import {data} from "$lib/data";
  export let description = data.description; // prop but use lib/info as default
  export let title = data.title;
  export let url = data.url;
  export let img = "";
</script>

<svelte:head>
  <!-- HTML Meta Tags -->
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content={url} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {#if img}
    <meta property="og:image" content={img} />
  {/if}

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="eaganscafe.com" />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  {#if img}
    <meta name="twitter:image" content={img} />
  {/if}

  <link rel="“canonical”" href={url} />
</svelte:head>
