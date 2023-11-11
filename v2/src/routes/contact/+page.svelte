<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	export let data;
</script>

<svelte:head>
	<title>Yhteystiedot</title>
	<meta name="description" content="Yhteystiedot" />
</svelte:head>

<PageHeader title="Yhteystiedot" />

<PageContent>
	{@html data.pageContent}
</PageContent>
