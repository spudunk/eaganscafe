<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { LocationInfo } from "$lib/data";

  const dispatch = createEventDispatcher();

  export let locationInfo: LocationInfo;
</script>

<div class="flex flex-col gap-2">
  <p>Ethel Details</p>
  {#each locationInfo.details as detail, index}
    <div class="flex gap-2">
      <input
        class="w-full bg-slate-800 p-1"
        type="text"
        name="ethelDetails"
        id="ethelDetails"
        bind:value={detail}
      />
      <button
        class="p-1"
        on:click={() => {
          locationInfo.details.splice(index, 1);
          dispatch("refresh");
        }}>X</button
      >
    </div>
  {/each}

  <button
    class="py-1 px-4 border border-neutral-500 rounded w-fit self-center"
    on:click={() => {
      locationInfo.details.push("");
      dispatch("refresh");
    }}>Add Line</button
  >
</div>
