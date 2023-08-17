<script>
  export let info = {
    route: "",
    heading: "",
    address: "",
    navLink: "",
    telLink: "",
    tel: "",
    details: [],
  };
  export let home = false;
</script>

<section id="info" class={`flex gap-1 flex-col items-center pt-4 ${$$props.class}`}>
  <a href={info.route}>
    <h1 class={`text-2xl font-bold ${home ? "text-blue-800 dark:text-blue-300 underline":""}`}>{info.heading}</h1>
  </a>
  <a class="text-blue-900 dark:text-blue-200 underline" target="_blank" href={info.navLink}>
    {info.address}
  </a>
  <a href={info.telLink} class="text-blue-900 dark:text-blue-200 underline">{info.tel}</a>
  {#each info.details as line}
    <span>{line}</span>
  {/each}
</section>
