<script>
  import Meta from '$lib/components/Meta.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PageContent from '$lib/components/PageContent.svelte';
  export let data;
</script>

<Meta title="CV" description="CV TODO" />

<PageHeader title="CV" />

<PageContent>
  {#each data.sections as section}
    <div class="pb-12 reveal">
      <h2 class="text-2xl font-bold py-3">{section.title}</h2>
      {#each section.entries as entry}
        <div class="grid grid-flow-row-dense grid-cols-6 gap-1 py-3 sm:py-1">
          {#if entry.date}
            <div class="text-emerald-600">{entry.date}</div>
          {/if}
          <div class="col-span-6 sm:col-span-5">{entry.content}</div>
        </div>
      {/each}
    </div>
  {/each}
</PageContent>
