<script lang="ts">
  import { tab } from "$lib/stores";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  export let id: string;

  let selectedTab: string;

  tab.subscribe((value) => {
    selectedTab = value;
  });
</script>

<button
  on:click={() => {
    tab.set(id);
    $page.url.searchParams.set("tab", id);
    history.replaceState(history.state, '', $page.url);
  }}
  class={`py-1 px-2 rounded-t font-bold ${
    selectedTab == id ? "border-t border-r border-l" : "text-neutral-500"
  }`}
>
  <slot />
</button>
