<script>
  import originalData from "$lib/data";
  import Header from "$lib/components/Header.svelte";
  import LocationDetailsForm from "./LocationDetailsForm.svelte";

  export let data;

  const resetString = JSON.stringify(originalData);

  $: data = data;
  let saving = false;
  let saved = false;

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
    const j = await res.json();
    console.log("post response: \n", j.message);
    saving = false;
    saved = true;
    setTimeout(() => {
      saved = false;
    }, 2000);
    data = data;
    return;
  };

  // load original data
  const resetData = () => {
    data = JSON.parse(resetString);
    refresh();
    return;
  };
</script>

<Header />

<div class="container flex gap-2 mb-6 items-center">
  <button
    class="py-1 px-2 border border-neutral-500 rounded"
    on:click={saveData}>SAVE</button
  >
  <button
    class="py-1 px-2 border border-neutral-500 rounded"
    on:click={resetData}>RESET</button
  >
  {#if saving}
    <span>saving...</span>
  {/if}
  {#if saved}
    <span>saved!</span>
  {/if}
</div>

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
