<script lang="ts">
  import type { LocationInfo } from "$lib/data";

  export let locationInfo: LocationInfo;
</script>

<div class="flex flex-col gap-2">
  <p>Details: {locationInfo.heading}</p>
  {#each locationInfo.details as detail, index}
    <div class="flex gap-2">
      <input class="w-full dark:bg-slate-800 bg-slate-300 p-1" type="text" bind:value={detail} />
      <button
        class="p-1"
        on:click={() => {
          locationInfo.details.splice(index, 1);
          locationInfo = locationInfo;
        }}>X</button
      >
    </div>
  {/each}

  <button
    class="py-1 px-4 border border-neutral-500 rounded w-fit self-center"
    on:click={() => {
      locationInfo.details.push("");
      locationInfo = locationInfo;
    }}>Add Line</button
  >
</div>
