<script>
  import originalData from "$lib/data.js";
  import Header from "$lib/components/Header.svelte";

  export let data;

  $: data = data;

  const saveData = async () => {
    const res = await fetch("/admin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log("data post response: \n", await res.json());
    data = data;
  };

  const initData = async () => {
    data = originalData;
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
    on:click={initData}>RESET</button
  >
</div>

<div class="container flex flex-col gap-6">
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

  {#if data.ethelInfo?.details}
    <div class="flex flex-col gap-2">
      <p>Ethel Details</p>
      {#each data.ethelInfo.details as detail, index}
        <div class="flex gap-2">
          <input
            class="w-full bg-slate-800 p-1"
            type="text"
            name="ethelDetails"
            id="ethelDetails"
            bind:value={detail}
          />
          <button
            on:click={() => {
              data.ethelInfo.details.splice(index, 1);
              data = data;
            }}>Remove</button
          >
        </div>
      {/each}
      <button
        on:click={() => {
          data.ethelInfo.details.push("");
          data = data;
        }}>Add Line</button
      >
    </div>
  {/if}

  {#if data.teninoInfo?.details}
    <div class="flex flex-col gap-2">
      <p>T9O Details</p>
      {#each data.teninoInfo.details as detail, index}
        <div class="flex gap-2">
          <input
            class="w-full bg-slate-800 p-1"
            type="text"
            name="ethelDetails"
            id="ethelDetails"
            bind:value={detail}
          />
          <button
            on:click={() => {
              data.teninoInfo.details.splice(index, 1);
              data = data;
            }}>Remove</button
          >
        </div>
      {/each}
      <button
        on:click={() => {
          data.teninoInfo.details.push("");
          data = data;
        }}>Add Line</button
      >
    </div>
  {/if}
</div>
