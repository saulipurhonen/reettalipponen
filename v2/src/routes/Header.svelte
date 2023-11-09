<script>
	const navItems = [
		{ label: 'Etusivu', href: '/' },
		{ label: 'Teokset', href: '/works' },
		{ label: 'CV', href: '/cv' },
		{ label: 'Yhteystiedot', href: '/contact' }
	];
</script>

<header
	class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent"
>
	<div class="max-w-8xl mx-auto">
		<div class="py-4 border-b border-slate-300/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
			<nav class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
				<ul class="flex space-x-8 justify-end">
					{#each navItems as item}
						<li class="hover:text-sky-500 dark:hover:text-sky-400">
							<a href={item.href} class="hover:text-sky-500 dark:hover:text-sky-400">
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
</style>
