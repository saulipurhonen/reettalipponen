<script lang="ts">
  import { page } from '$app/stores';
  import { NAVIGATION_ITEMS } from '$lib/constants/navigation';
  import { beforeNavigate } from '$app/navigation';
  import { gsap } from 'gsap';
  import { menuOpen } from '$lib/stores';

  $: currentPath = $page?.url?.pathname;

  let activePath: string | undefined;

  let displayMobileMenu = false;

  menuOpen.set(displayMobileMenu);

  $: displayMobileMenu, menuOpen.set(displayMobileMenu);

  let mobileHeadingArea: HTMLElement;
  let mobileNav: HTMLElement;

  var tl = gsap.timeline();
  $: if (mobileNav && displayMobileMenu) {
    tl.set(mobileNav, { opacity: 0 });
    tl.to(mobileNav, {
      opacity: 1,
      duration: 0.25,
      ease: 'power2.inOut',
    });
  }

  beforeNavigate((navigate) => {
    activePath = navigate.to?.url.pathname;
    displayMobileMenu = false;
  });
</script>

<header
  class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent"
  class:overflow-auto={displayMobileMenu}
>
  <!-- Desktop nav -->
  <div class="max-w-8xl mx-auto hidden md:block">
    <div class="py-4 border-b border-slate-300/10 lg:px-8 lg:border-0 mx-4 lg:mx-0">
      <nav class="text-sm leading-6 text-slate-700 dark:text-slate-200">
        <ul class="flex space-x-8 justify-end">
          {#each NAVIGATION_ITEMS as item}
            <li>
              <a
                href={item.href}
                aria-current={item.href === currentPath ? 'page' : undefined}
                class="text-white no-underline hover:text-emerald-500"
                class:active={item.href === (activePath ?? currentPath)}
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>

  <!-- Mobile nav -->
  <div class="md:hidden flex flex-wrap" class:h-screen={displayMobileMenu}>
    <div
      bind:this={mobileHeadingArea}
      class="flex w-screen items-center h-16 justify-between overflow-hidden"
      class:mb-5={displayMobileMenu}
    >
      <h1 class="uppercase text-xl font-bold tracking-tighter leading-tight ps-4">
        Reettalipponen.art
      </h1>

      <div class="menu-icon relative cursor-pointer">
        <input class="menu-icon__cheeckbox" type="checkbox" bind:checked={displayMobileMenu} />
        <div>
          <span />
          <span />
        </div>
      </div>
    </div>

    <div
      bind:this={mobileNav}
      class="grow overflow-y-auto"
      class:hidden={!displayMobileMenu}
      style={`margin-top: -${mobileHeadingArea?.offsetHeight / 2}px`}
    >
      <div class="mx-auto text-center overflow-y-auto">
        <ul class="overflow-y-auto py-4">
          {#each NAVIGATION_ITEMS as item}
            <li class="py-3 uppercase">
              <a
                href={item.href}
                aria-current={item.href === currentPath ? 'page' : undefined}
                class="text-white no-underline hover:text-emerald-500 font-bold tracking-tighter"
                class:active={item.href === (activePath ?? currentPath)}
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  .active {
    color: theme('colors.emerald.600');
    font-weight: bold;
  }

  .menu-icon {
    transform: scale(1.1);
  }

  :root {
    --bar-bg: #fff;
  }

  .menu-icon {
    width: 50px;
    height: 50px;

    .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }
    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--bar-bg, #000);
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    &.active,
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
        }
      }
    }

    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
    }

    &:hover {
      // no need hover effect on mobile.
      @media (min-width: 1024px) {
        span:first-of-type {
          width: 26px;
        }

        span:last-of-type {
          width: 12px;
        }
      }
    }
  }
</style>
