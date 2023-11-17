<script>
  import Meta from '$lib/components/Meta.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PageContent from '$lib/components/PageContent.svelte';
  export let data;
</script>

<Meta title="reettalipponen.art" description="reettalipponen.art TODO" />

<PageHeader title="reettalipponen.art" />

<PageContent>
  {@html data.pageContent}
</PageContent>
