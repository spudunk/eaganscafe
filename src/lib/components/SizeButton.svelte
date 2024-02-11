<script lang="ts">
  import { onMount } from "svelte";

  let fontSize = (a: number) => {};
  let size = 1;
  const bounds = {
    upper: 1.8,
    lower: 0.6,
  };

  onMount(() => {
    const root = document.documentElement;
    root.style.fontSize = "";
    fontSize = (a) => {
      let newSize = size + a;
      if (newSize > bounds.lower && newSize < bounds.upper) {
        size = newSize;
        root.style.fontSize = size + "rem";
      }
    };
  });
</script>

<div class="w-full flex gap-2 mt-4 justify-center print:hidden md:hidden items-center ">
  <button
    on:click={() => fontSize(-0.2)}
    class="border border-neutral-400 px-2 rounded"
    disabled={size <= bounds.lower}
  >
    &minus;
  </button>
  SIZE
  <button
    on:click={() => fontSize(0.2)}
    class="border border-neutral-400 px-2 rounded"
    disabled={size >= bounds.upper}
  >
    &plus;
  </button>
</div>
