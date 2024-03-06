<script>
  import Meta from '$lib/components/Meta.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PageContent from '$lib/components/PageContent.svelte';
  import { isMobile } from '$lib/stores';
  export let data;
</script>

<Meta title="reettalipponen.art" description="reettalipponen.art TODO" />

{#if !isMobile}
  <PageHeader title="reettalipponen.art" />
{/if}

<PageContent>
  {@html data.pageContent}
</PageContent>
