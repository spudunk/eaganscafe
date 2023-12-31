<script lang="ts">
  import originalData from "$lib/data";
  import Header from "$lib/components/Header.svelte";
  import LocationDetailsForm from "./LocationDetailsForm.svelte";

  import type { Data, Menu, MenuItem, MenuSection } from "$lib/data";
  export let data: Data;

  const resetString = JSON.stringify(originalData);

  let saving = false;
  let saved: string = "";

  let menuSelect: Menu = data.ethelLunchMenu;
  let sectionSelect: MenuSection = menuSelect?.sections[0];
  let itemSelect: MenuItem = sectionSelect?.items[0];

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
    menuSelect = data.ethelLunchMenu;
    sectionSelect = menuSelect.sections[0];
    itemSelect = sectionSelect.items[0];
    return;
  };

  const deleteSize = (i: number) => {
    itemSelect.sizes?.splice(i, 1);
    if (itemSelect.sizes?.length === 0) {
      itemSelect.sizes = undefined;
    } else {
      itemSelect.sizes = itemSelect.sizes;
    }
  };

  const addSize = () => {
    if (!itemSelect.sizes) {
      itemSelect.sizes = [];
    }
    itemSelect.sizes = [...itemSelect.sizes, { size: "New Size", price: 0 }];
  };

  const deleteItem = () => {
    const i = sectionSelect.items.findIndex((item) => {
      return item === itemSelect;
    });
    console.log("index: " + i);
    sectionSelect.items.splice(i, 1);
    sectionSelect.items = sectionSelect.items;
    itemSelect = sectionSelect.items[0];
  };

  const addItem = () => {
    sectionSelect.items = [
      ...sectionSelect.items,
      {
        name: "New Item",
        description: "",
        price: undefined,
        sizes: undefined,
      },
    ];
    sectionSelect = sectionSelect;
    itemSelect = sectionSelect.items[sectionSelect.items.length - 1];
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
  <a
    class="py-1 px-2 border border-neutral-500 rounded"
    href="/admin/data.json"
    target="_blank">DOWNLOAD</a
  >

  {#if saving}
    <span>saving...</span>
  {/if}
  {#if saved}
    <span>{saved}</span>
  {/if}
</div>

<div class="container flex flex-col gap-2">
  <!-- Description Editor -->
  {#if data.description !== undefined}
    <div class="flex flex-col gap-2">
      <label class="font-bold text-lg" for="description">Company Description</label>
      <textarea
        class="w-full dark:bg-neutral-800 bg-neutral-200 p-1 min-h-fit h-24"
        name="description"
        id="description"
        bind:value={data.description}
      />
    </div>
  {/if}

  <!-- Ethel Info -->
  {#if data.ethelInfo?.details}
    <LocationDetailsForm locationInfo={data.ethelInfo} />
  {:else}
    <div><p>No data from database</p></div>
  {/if}

  <!-- T9O Info -->
  {#if data.teninoInfo?.details}
    <LocationDetailsForm locationInfo={data.teninoInfo} />
  {:else}
    <div><p>No data from database</p></div>
  {/if}

  <!-- Menu Selector -->
  <p class="font-bold text-lg pt-6">Menu</p>
  <label class="" for="menuSelect">Select Menu:</label>
  <select
    class="dark:bg-slate-800 bg-slate-200 p-1"
    name="menuSelect"
    id="menuSelect"
    bind:value={menuSelect}
    on:change={(e) => {
      sectionSelect = menuSelect.sections[0];
      itemSelect = sectionSelect.items[0];
    }}
  >
    <option value={data.ethelLunchMenu}>Ethel Lunch</option>
    <option value={data.ethelBreakfastMenu}>Ethel Breakfast</option>
    <option value={data.teninoMenu}>Tenino</option>
  </select>

  {#if menuSelect}
    <label class="">
      <p>Title:</p>
      <input
        type="text"
        class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-fit"
        name="title"
        bind:value={menuSelect.title}
      />
    </label>
  {/if}

  <p class="font-bold text-lg pt-6">Section</p>
  <!-- Section Selector -->
  <label for="sectionSelect" class="">Select Menu Section:</label>
  <select
    id="sectionSelect"
    name="sectionSelect"
    class="dark:bg-slate-800 bg-slate-200 p-1"
    bind:value={sectionSelect}
    on:change={() => {
      itemSelect = sectionSelect.items[0];
    }}
  >
    {#if menuSelect}
      {#each menuSelect.sections as section (section.id)}
        <option value={section}> {section.heading}</option>
      {/each}
    {/if}
  </select>

  {#if sectionSelect}
    <label class="">
      <p>Heading:</p>
      <input
        type="text"
        class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-fit"
        name="heading"
        bind:value={sectionSelect.heading}
      />
    </label>

    <label class="">
      <p>Description:</p>
      <textarea
        class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-24 md:h-16 lg:h-12"
        name="description"
        bind:value={sectionSelect.description}
      />
    </label>
  {/if}

  <p class="font-bold text-lg mt-6">Item</p>
  <!-- Item Selector -->
  <label for="itemSelect" class="">Select Menu Item:</label>
  <select
    id="itemSelect"
    name="itemSelect"
    class="dark:bg-slate-800 bg-slate-200 p-1"
    bind:value={itemSelect}
  >
    {#if sectionSelect}
      {#each sectionSelect.items as item (item.name)}
        <option value={item}>{item.name}</option>
      {/each}
    {/if}
  </select>

  <!-- Item Editor -->
  <div class="grid grid-cols-1 gap-2 w-full mb-6">
    {#if itemSelect}
      <label class="">
        <p>Name:</p>
        <input
          type="text"
          class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-fit"
          name="name"
          bind:value={itemSelect.name}
        />
      </label>
      <label class="">
        <p>Description:</p>
        <textarea
          class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-24 md:h-16 lg:h-12"
          name="description"
          bind:value={itemSelect.description}
        />
      </label>
      <label>
        <p>Price:</p>
        <input
          class="dark:bg-neutral-800 bg-neutral-200 p-1"
          type="number"
          step=".01"
          name="price"
          bind:value={itemSelect.price}
        />
      </label>
      {#if itemSelect.sizes}
        <p>Sizes:</p>
        {#each itemSelect.sizes as size, i}
          <div
            class="flex flex-col gap-2 p-1 border border-solid border-neutral-500"
          >
            <div class="flex flex-wrap items-center">
              <input
                class="dark:bg-neutral-800 bg-neutral-200 p-1 mr-2"
                type="text"
                bind:value={size.size}
              />
              <span>
                <input
                  class="dark:bg-neutral-800 bg-neutral-200 p-1 mr-2"
                  type="number"
                  step=".01"
                  bind:value={size.price}
                />
              </span>
              <button
                class="p-2 inline-block justify-self-end"
                on:click={() => {
                  deleteSize(i);
                }}>X</button
              >
            </div>
          </div>
        {/each}
      {/if}
      <div>
        <button
          on:click={addSize}
          class="py-1 px-2 border border-neutral-500 rounded">Add Size</button
        >
        <button
          on:click={deleteItem}
          class="py-1 px-2 border border-neutral-500 rounded"
          >Delete Item</button
        >
        <button
          on:click={addItem}
          class="py-1 px-2 border border-neutral-500 rounded"
        >
          New Item
        </button>
      </div>
    {/if}
  </div>
</div>
