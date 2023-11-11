<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	export let data;
</script>

<svelte:head>
	<title>Yhteystiedot</title>
	<meta name="description" content="Yhteystiedot" />
</svelte:head>

<PageHeader title="Yhteystiedot" />

<div class="text-column">
	<p>
		{@html data.pageContent}
	</p>
</div>
