<script lang="ts">
  import { tab } from "$lib/stores";

  export let id: string;

  let selectedTab: string;

  tab.subscribe((value) => {
    selectedTab = value;
  });
</script>

<button
  on:click={() => {
    tab.set(id);
  }}
  class={`py-1 px-2 rounded-t font-bold ${
    selectedTab == id ? "border-t border-r border-l" : "text-neutral-500"
  }`}
>
  <slot />
</button>
