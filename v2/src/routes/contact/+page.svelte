<script>
	export let data;
</script>

<svelte:head>
	<title>Yhteystiedot</title>
	<meta name="description" content="Yhteystiedot" />
</svelte:head>

<div class="text-column">
	<h1>Yhteystiedot</h1>

	<p>
		{@html data.pageContent}
	</p>
</div>
