<script>
	export let data;
</script>

<header>
	<h1 class="base:text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-slate-50 break-word">
		reettalipponen<wbr>.art
	</h1>
</header>

<section class="container py-20">
	<div class="max-w-xl backdrop-blur-sm">
		{#each data.pageContent as section}
			<p class="py-2 text-slate-50">{section.value}</p>
		{/each}
	</div>
</section>

<style>
	h1 {
		display: block;
		padding-top: 50px;
		text-transform: uppercase;
	}

	h1,
	p {
		text-align: left;
	}
</style>
