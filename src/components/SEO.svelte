<script>
  export let description =
    "Family owned cafe serving burgers, fries, shakes, and more. Come try us out for lunch!";
  export let title = "Eagans Cafe";
  export let url = "https://eaganscafe.com";
  /**
   * @type {String}
   */
  export let img;
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
  <!-- <link rel=“canonical” href=“https://eaganscafe.com” /> -->
</svelte:head>
