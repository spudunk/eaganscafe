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
</script>

<section id="info" class={`flex gap-1 flex-col items-center pt-4 ${$$props.class}`}>
  <a href={info.route}>
    <h1 class="text-2xl font-bold">{info.heading}</h1>
  </a>
  <a class="link" target="_blank" href={info.navLink}>
    {info.address}
  </a>
  <a href={info.telLink} class="link">{info.tel}</a>
  {#each info.details as line}
    <span>{line}</span>
  {/each}
</section>
