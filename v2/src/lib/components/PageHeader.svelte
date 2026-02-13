<script>
  import { page } from '$app/stores';
  import { gsap } from 'gsap';

  /**
   * @type {string}
   */
  export let title;

  /**
   * @type HTMLElement
   */
  let titleElement;

  $: currentPath = $page?.url?.pathname;

  $: if (titleElement && currentPath) {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });

    tl.from(titleElement, { opacity: 0 }).to(titleElement, {
      opacity: 1,
    });
  }
</script>

<header>
  <h1
    bind:this={titleElement}
    class="green base:text-4xl md:text-6xl font-bold tracking-tighter leading-tight break-word uppercase md:mt-6"
  >
    <!-- {title} <span class="text-xl tracking-normal">{currentPath}</span> -->
    {title}

    {#if currentPath !== '/'}
      <span class="text-xs md:text-xl tracking-normal">{currentPath}</span>
    {/if}
    <!-- reettalipponen.art -->
  </h1>
</header>
