<script lang="ts">
  import { data as originalData } from "$lib/data";
  import Header from "$lib/components/Header.svelte";
  import LocationDetailsForm from "./LocationDetailsForm.svelte";

  import type { Data, Menu, MenuItem, MenuSection } from "$lib/types";

  export let data: Data | undefined;
  const resetString = JSON.stringify(originalData);

  $: updatedString = () => {
    if (data?.updated) {
      return new Date(data.updated);
    }
    return undefined;
  };

  let saving = false;
  let message: string = "";
  let menuSelect: Menu | undefined;
  if (data) {
    menuSelect = data.ethelLunchMenu;
  }

  // Post current data object to server
  const saveData = async () => {
    saving = true;
    if (data) {
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
        message = j.message;
      } catch (err) {
        saving = false;
        message = "error: " + err;
        console.error(err);
      }
      setTimeout(() => {
        message = "";
      }, 2000);
    }
    data = data;
    return;
  };

  // load original data
  const resetData = () => {
    if (
      confirm(
        `Are you sure you want to reset data${
          originalData.updated
            ? ` back to ${new Date(originalData.updated).toLocaleDateString()}`
            : ""
        }?`
      )
    ) {
      data = JSON.parse(resetString) as Data;
      menuSelect = data.ethelLunchMenu;
      message = "Reset!";
      setTimeout(() => {
        message = "";
      }, 1000);
    }
    return;
  };

  const deleteSize = (item: MenuItem, i: number) => {
    item.sizes?.splice(i, 1);
    if (item.sizes?.length === 0) {
      item.sizes = undefined;
    } else {
      item.sizes = item.sizes;
    }
    menuSelect = menuSelect;
  };

  const addSize = (item: MenuItem) => {
    if (!item.sizes) {
      item.sizes = [];
    }
    item.sizes = [...item.sizes, { size: "New Size", price: 0 }];
    menuSelect = menuSelect;
  };

  const addItem = (section: MenuSection) => {
    section.items = [
      ...section.items,
      {
        name: "",
        description: "",
        price: undefined,
        sizes: undefined,
      },
    ];
    menuSelect = menuSelect;
  };
</script>

<Header reload={true} />

<div class="container flex gap-2 mb-6 items-center">
  <button
    class="py-1 px-2 border border-neutral-500 rounded"
    disabled={saving}
    on:click={saveData}
  >
    SAVE
  </button>
  <button
    class="py-1 px-2 border border-neutral-500 rounded"
    on:click={resetData}
    disabled={message.length > 0}
  >
    RESET
  </button>
  <a
    class="py-1 px-2 border border-neutral-500 rounded"
    href="/admin/data.json"
    target="_blank"
  >
    DOWNLOAD
  </a>
  <button
    class="py-1 px-2 border border-neutral-500 rounded"
    on:click={() => {
      navigator.clipboard.writeText(JSON.stringify(data));
      message = "copied!!!";
      setTimeout(() => {
        message = "";
      }, 1000);
    }}
  >
    COPY
  </button>

  {#if saving}
    <span>saving...</span>
  {/if}
  {#if message}
    <span>{message}</span>
  {/if}
</div>

<div class="container flex flex-col gap-2">
  {#if updatedString}
    <p>Edited: {updatedString()}</p>
  {/if}
  <!-- Description Editor -->
  {#if data?.description !== undefined}
    <div class="flex flex-col gap-2">
      <label class="font-bold" for="description"> General Description </label>
      <textarea
        class="w-full dark:bg-neutral-800 bg-neutral-200 p-1 min-h-fit h-24"
        name="description"
        id="description"
        bind:value={data.description}
      />
    </div>
  {/if}

  <div class="grid gap-4 md:grid-cols-2">
    <!-- Ethel Info -->
    {#if data?.ethelInfo}
      <LocationDetailsForm locationInfo={data.ethelInfo} />
    {/if}

    <!-- T9O Info -->
    {#if data?.teninoInfo}
      <LocationDetailsForm locationInfo={data.teninoInfo} />
    {/if}
  </div>

  {#if data}
    <!-- Menu Selector -->
    <h2 class="font-bold text-2xl pt-12">Menu Editor</h2>
    <p>Select a Menu to edit:</p>
    <div class="flex gap-2">
      <button
        on:click={() => (menuSelect = data?.ethelLunchMenu)}
        class={`${
          menuSelect === data.ethelLunchMenu
            ? "dark:bg-neutral-700 bg-neutral-300"
            : ""
        } px-2 py-1 border border-neutral-500 rounded`}
      >
        Ethel Lunch
      </button>
      <button
        on:click={() => (menuSelect = data?.ethelBreakfastMenu)}
        class={`${
          menuSelect === data.ethelBreakfastMenu
            ? "dark:bg-neutral-700 bg-neutral-300"
            : ""
        } px-2 py-1 border border-neutral-500 rounded`}
      >
        Ethel Breakfast
      </button>
      <button
        on:click={() => (menuSelect = data?.teninoMenu)}
        class={`${
          menuSelect === data.teninoMenu
            ? "dark:bg-neutral-700 bg-neutral-300"
            : ""
        } px-2 py-1 border border-neutral-500 rounded`}
      >
        Tenino
      </button>
    </div>
  {/if}

  {#if menuSelect}
    <label class="mt-2">
      <div class="">Menu Title:</div>
      <input
        type="text"
        class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-fit"
        name="title"
        bind:value={menuSelect.title}
      />
    </label>
  {/if}

  {#if menuSelect}
    {#each menuSelect.sections as section (section.id)}
      <!-- Menu Editor -->
      <div class="mt-12 scroll-mt-12" id={section.id}>
        <h2 class="text-xl font-bold">Section - {section.heading}</h2>
        <label>
          Heading:
          <input
            type="text"
            class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-fit"
            name="heading"
            bind:value={section.heading}
          />
        </label>

        <label class="my-4">
          <p>Description:</p>
          <textarea
            class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-24 md:h-16 lg:h-12"
            name="description"
            bind:value={section.description}
          />
        </label>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each section.items as item, index (item)}
            <!-- Item Editor -->
            <div
              class="w-full p-2 border border-neutral-300 dark:border-neutral-700 rounded relative h-fit"
            >
              <div class="pb-12 flex flex-col gap-2">
                <label class="">
                  <input
                    type="text"
                    class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-fit text-xl"
                    name="name"
                    placeholder="New Item"
                    bind:value={item.name}
                  />
                </label>
                <label class="flex items-center gap-2">
                  <p>$</p>
                  <input
                    class="dark:bg-neutral-800 bg-neutral-200 p-1"
                    type="number"
                    step=".01"
                    name="price"
                    bind:value={item.price}
                  />
                </label>
                <label class="">
                  <textarea
                    class="col-span-2 dark:bg-neutral-800 bg-neutral-200 p-1 w-full h-24"
                    name="description"
                    bind:value={item.description}
                  />
                </label>
                {#if item.sizes}
                  <p>Sizes:</p>
                  <div class="flex flex-col gap-1 p-1">
                    {#each item.sizes as size, i}
                      <div class="flex flex-wrap items-center">
                        <input
                          class="dark:bg-neutral-800 bg-neutral-200 p-1 mr-2"
                          type="text"
                          bind:value={size.size}
                        />

                        <label>
                          $
                          <input
                            class="dark:bg-neutral-800 bg-neutral-200 p-1 mr-2 w-20"
                            type="number"
                            step=".01"
                            bind:value={size.price}
                          />
                        </label>

                        <button
                          class="p-2 inline-block justify-self-end"
                          on:click={() => {
                            deleteSize(item, i);
                          }}>X</button
                        >
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>

              <div class="absolute bottom-2 left-2">
                <button
                  class="py-1 px-2 border border-neutral-500 rounded"
                  on:click={() => {
                    const i = section.items.splice(index, 1)[0];
                    section.items.splice(index - 1, 0, i);
                    menuSelect = menuSelect;
                  }}
                  disabled={index == 0}
                >
                  &uparrow;
                </button>
                <button
                  class="py-1 px-2 border border-neutral-500 rounded"
                  on:click={() => {
                    const i = section.items.splice(index, 1)[0];
                    section.items.splice(index + 1, 0, i);
                    menuSelect = menuSelect;
                  }}
                  disabled={index == section.items.length - 1}
                >
                  &downarrow;
                </button>
                <button
                  class="py-1 px-6 border border-neutral-500 rounded"
                  on:click={() => {
                    addSize(item);
                  }}
                >
                  Add Size
                </button>
                <button
                  class="py-1 px-2 border border-neutral-500 rounded text-red-800 dark:text-red-200"
                  on:click={() => {
                    const choice = confirm(
                      `Are you sure you want to delete: ${item.name}`
                    );
                    if (choice) {
                      section.items.splice(index, 1);
                      menuSelect = menuSelect;
                    }
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          {/each}
          <div
            class="w-full py-1 px-2 border border-neutral-300 dark:border-neutral-700 rounded h-fit"
          >
            <button
              on:click={() => {
                addItem(section);
              }}
              class="py-1 px-2 mb-16 my-2 border border-neutral-500 rounded"
            >
              New Item
            </button>
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
