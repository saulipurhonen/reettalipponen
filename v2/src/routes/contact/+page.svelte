<script>
	import Meta from '$lib/components/Meta.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	export let data;
</script>

<Meta title="Yhteystiedot" description="Yhteystiedot TODO" />

<PageHeader title="Yhteystiedot" />

<PageContent>
	{@html data.pageContent}
</PageContent>
