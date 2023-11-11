<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	export let data;
</script>

<PageHeader title="reettalipponen.art" />

<PageContent>
	{@html data.pageContent}
</PageContent>
