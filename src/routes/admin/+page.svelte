<script lang="ts">
  import originalData from "$lib/data";
  import Header from "$lib/components/Header.svelte";
  import LocationDetailsForm from "./LocationDetailsForm.svelte";

  export let data: typeof originalData;
  let menuSelect: string;
  let subMenuSelect: string;

  const resetString = JSON.stringify(originalData);

  $: data = data;
  $: menu = () => {
    switch (menuSelect) {
      case "ethelBreakfastMenu":
        return data.ethelBreakfastMenu
      case "ethelLunchMenu":
        return data.ethelLunchMenu
      case "teninoMenu": 
        return data.teninoMenu
      default:
        break;
    }
  }
  let saving = false;
  let saved: string = "";

  const refresh = () => {
    data = data;
  };

  // Post current data object to server
  const saveData = async () => {
    saving = true;
    try {
      const res = await fetch("/admin", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      const j: { message: string } = await res.json();
      // console.log("post response: \n", j.message);
      saving = false;
      saved = j.message;
    } catch (err) {
      saving = false;
      saved = "error: " + err;
      console.error(err);
    }
    setTimeout(() => {
      saved = "";
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
    disabled={saving}
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
    <span>{saved}</span>
  {/if}
</div>

<div class="container flex flex-col gap-6">
  <!-- Description Editor -->
  {#if data.description !== undefined}
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

  <select
    class="bg-slate-800 m-1"
    name="menuSelect"
    id="menuSelect"
    bind:value={menuSelect}
  >
    <option value="ethelBreakfastMenu">Ethel Breakfast</option>
    <option value="ethelLunchMenu">Ethel Lunch</option>
    <option value="teninoMenu">Tenino</option>
  </select>

  <p>
    {menuSelect}
  </p>
  <select class="bg-slate-800 p-1" name="" id="" bind:value={subMenuSelect}>
    {#if menuSelect === "ethelBreakfastMenu"}
      {#each data.ethelBreakfastMenu as section}
        <option value={section.id}> {section.heading}</option>
      {/each}
    {:else if menuSelect === "ethelLunchMenu"}
      {#each data.ethelLunchMenu as section}
        <option value={section.id}>{section.heading}</option>
      {/each}
    {:else if menuSelect === "teninoMenu"}
      {#each data.teninoMenu as section}
        <option value={section.id}>{section.heading}</option>
      {/each}
    {/if}
  </select>
  <p>{subMenuSelect}</p>

  {#if subMenuSelect}
    
    
  {/if}
</div>
