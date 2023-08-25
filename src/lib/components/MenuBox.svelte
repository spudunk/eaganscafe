<script>
  // @ts-nocheck
  export let items;
</script>

<div
  class=" mt-4 grid sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-2 gap-4 lg:gap-6 justify-stretch"
>
  {#each items as item}
    <div
      class="max-w-md border border-neutral-200 dark:border-neutral-800 rounded"
    >
      <div class="p-2">
        <div class="flex justify-between">
          <h3 class="font-bold dark:font-semibold">{item.name}</h3>
          {#if item.price}
            <span class="mr-8"> ${item.price.toFixed(2)} </span>
          {/if}
        </div>
        {#if item.description}
          <p class="mt-2">{item.description}</p>
        {/if}
        {#if item.sizes}
          <table class="mt-1 w-full">
            {#each item.sizes as size}
              <tr>
                <td>{size.size}</td>
                {#if size.price}
                  <td class="text-right pr-8">${size.price.toFixed(2)}</td>
                {/if}
              </tr>
            {/each}
          </table>
        {/if}
      </div>
    </div>
  {/each}
</div>
