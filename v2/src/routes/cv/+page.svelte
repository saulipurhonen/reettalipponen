<script>
	export let data;
</script>

<svelte:head>
	<title>CV</title>
	<meta name="description" content="CV" />
</svelte:head>

<header>
	<h1 class="text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-slate-50 text-left">
		CV
	</h1>
</header>

<div class="container mt-12">
	{#each data.sections as section}
		<div class="pb-12">
			<h2 class="text-2xl font-bold py-3 text-slate-50">{section.heading}</h2>
			{#each section.entries as entry}
				<div class="grid grid-flow-row-dense grid-cols-6 gap-1 py-3 sm:py-1">
					{#if entry.date}
						<div class="text-slate-20">{entry.date}</div>
					{/if}
					<div class="col-span-6 sm:col-span-5 text-slate-50">{entry.content}</div>
				</div>
			{/each}
		</div>
	{/each}
</div>
