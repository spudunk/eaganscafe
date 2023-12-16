<script lang="ts">
  import type { LocationInfo } from "$lib/data";

  export let locationInfo: LocationInfo;
</script>

<div class="flex flex-col gap-2 my-6">
  <p class="font-bold text-lg">Details: {locationInfo.heading}</p>
  {#each locationInfo.details as detail, index}
    <div class="flex gap-2">
      <input class="w-full dark:bg-neutral-800 bg-neutral-300 p-1" type="text" bind:value={detail} />
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
    class="py-1 px-4 border border-neutral-500 rounded w-fit"
    on:click={() => {
      locationInfo.details.push("");
      locationInfo = locationInfo;
    }}>Add Line</button
  >
</div>
