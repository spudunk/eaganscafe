<script>
  import { onMount } from "svelte";

  let toggleFontSize = () => {};
  let larger = false;

  onMount(() => {
    const root = document.documentElement;
    toggleFontSize = () => {
      if (larger) {
        larger = false;
        root.style.fontSize = "";
      } else {
        larger = true;
        root.style.fontSize = "1.25rem";
      }
    };
  });
</script>

<div class="w-full flex justify-center print:hidden">
  <button
    on:click={toggleFontSize}
    class="border border-neutral-400 py-1 px-2 mt-4 rounded  md:hidden"
    >MAKE {larger ? "SMALLER" : "LARGER"}</button
  >
</div>

