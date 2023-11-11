<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	export let data;
</script>

<PageHeader title="reettalipponen.art" />

<section class="container py-20">
	<div class="max-w-xl backdrop-blur-sm">
			<p class="py-2">{@html data.pageContent}</p>
	</div>
</section>
