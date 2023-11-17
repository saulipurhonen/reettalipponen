<script>
  import { page } from '$app/stores';

  $: currentPath = $page?.url?.pathname;

  const navItems = [
    { label: 'Etusivu', href: '/' },
    { label: 'Keramiikka', href: '/works/ceramic' },
    { label: 'Installaatio', href: '/works/installation' },
    { label: 'Veistos', href: '/works/sculpture' },
    { label: 'Asiakastyö', href: '/works/customer' },
    { label: 'CV', href: '/cv' },
    { label: 'Yhteystiedot', href: '/contact' },
  ];
</script>

<header
  class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent"
>
  <div class="max-w-8xl mx-auto">
    <div class="py-4 border-b border-slate-300/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
      <nav class="text-sm leading-6 text-slate-700 dark:text-slate-200">
        <ul class="flex space-x-8 justify-end">
          {#each navItems as item}
            <li>
              <a
                href={item.href}
                aria-current={item.href === currentPath ? 'page' : undefined}
                class="hover:text-emerald-500"
                class:active={item.href === currentPath}
              >
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
  .active {
    color: theme('colors.emerald.600');
    font-weight: bold;
  }
</style>
