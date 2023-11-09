<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header
	class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent"
>
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div> -->
	<div class="max-w-8xl mx-auto">
		<div
			class="py-4 border-b border-slate-300/10 lg:px-8 lg:border-0 mx-4 lg:mx-0"
		>
			<nav class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
				<ul class="flex space-x-8 justify-end">
					<li class="hover:text-sky-500 dark:hover:text-sky-400"><a href="/" class="hover:text-sky-500 dark:hover:text-sky-400">Etusivu</a></li>
				</ul>
			</nav>
		</div>
	</div>

	<!-- <div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div> -->
</header>

<style>
</style>
