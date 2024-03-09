<script lang="ts">
  import Meta from '$lib/components/Meta.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PageContent from '$lib/components/PageContent.svelte';
  import { isMobileState } from '$lib/stores';
  export let data;

  let isMobile: boolean;

  isMobileState.subscribe((value) => {
    isMobile = value;
  });
</script>

<Meta title="reettalipponen.art" description="reettalipponen.art TODO" />

{#if !isMobile}
  <PageHeader title="reettalipponen.art" />
{/if}

<PageContent>
  {@html data.pageContent}
</PageContent>
