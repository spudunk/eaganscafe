<script>
// @ts-nocheck
  export let phone;
</script>

<header
  class="fixed top-0 left-0 w-full bg-slate-200 dark:bg-slate-900 opacity-90 py-2 print:hidden"
>
  <div class="container flex justify-between items-center">
    <div class="logo">Eagans Cafe</div>
    <div>
      <a
        href="tel:+13609785410"
        class="font-semibold outline outline-slate-400 rounded px-2 py-1 sm:hidden"
        >Call Now</a
      >
      <a href="tel:+13609785410" class="hidden sm:block">{phone}</a>
    </div>
  </div>
</header>
