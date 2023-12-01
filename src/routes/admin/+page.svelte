<script>
  import originalData from "$lib/data";
  import Header from "$lib/components/Header.svelte";
  import LocationDetailsForm from "./LocationDetailsForm.svelte";

  export let data;

  const resetString = JSON.stringify(originalData);

  $: data = data;
  $: saving = false;

  const refresh = () => {
    data = data;
  };

  // Post current data object to server
  const saveData = async () => {
    saving = true;
    const res = await fetch("/admin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log("data post response: \n", await res.json());
    saving = false;
    data = data;
    return
  };

  // load original data
  const resetData = () => {
    data = JSON.parse(resetString);
    refresh();
    console.log("reset data with originalData");
    return
  };
</script>

<Header />


<div class="container flex gap-2 mb-6">
  <button
    class="py-1 px-2 border border-neutral-500 rounded"
    on:click={saveData}>SAVE</button
  >
  <button
    class="py-1 px-2 border border-neutral-500 rounded"
    on:click={resetData}>RESET</button
  >
</div>
{#if saving}
  <p>saving...</p>  
{/if}

<div class="container flex flex-col gap-6">
  <!-- Description Editor -->
  {#if data.description}
    <div class="flex flex-col gap-2">
      <label for="description">Description</label>
      <textarea
        class="w-full bg-slate-800 p-1 min-h-fit h-24"
        name="description"
        id="description"
        bind:value={data.description}
      />
    </div>
  {/if}

  <!-- Ethel Info -->
  {#if data.ethelInfo?.details}
    <LocationDetailsForm locationInfo={data.ethelInfo} on:refresh={refresh} />
  {:else}
    <div><p>No data from database</p></div>
  {/if}

  <!-- T9O Info -->
  {#if data.teninoInfo?.details}
    <LocationDetailsForm locationInfo={data.teninoInfo} on:refresh={refresh} />
  {:else}
    <div><p>No data from database</p></div>
  {/if}
</div>
