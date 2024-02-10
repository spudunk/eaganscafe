<script lang="ts">
  import type { LocationInfo } from "$lib/types";
  export let locationInfo: LocationInfo;
</script>

<div class="p-2 pb-14 border border-neutral-500 rounded relative">
  <h2 class="font-bold text-lg">{locationInfo.heading}</h2>
  <div class="flex flex-col gap-2 mt-4">
    <label for="banner">Page Banner:</label>
    <textarea
      class="w-full dark:bg-neutral-800 bg-neutral-200 p-1 h-20"
      name="banner"
      id="banner"
      bind:value={locationInfo.banner}
    />
  </div>
  <div class="flex flex-col gap-2 mt-6 my-2">
    <p>Location Details:</p>
    {#each locationInfo.details as detail, index}
      <div class="flex gap-2">
        <input
          class="w-full dark:bg-neutral-800 bg-neutral-300 p-1"
          type="text"
          bind:value={detail}
        />
        <button
          class="p-1"
          on:click={() => {
            locationInfo.details.splice(index, 1);
            locationInfo = locationInfo;
          }}
        >
          X
        </button>
      </div>
    {/each}
  </div>
  <div class="absolute bottom-2 left-2 right-2">
    <button
      class="py-1 px-4 border border-neutral-500 rounded w-fit"
      on:click={() => {
        locationInfo.details.push("");
        locationInfo = locationInfo;
      }}>Add Line</button
    >
  </div>
</div>
