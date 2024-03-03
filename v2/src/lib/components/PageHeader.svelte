<script>
  import { page } from '$app/stores';
  import { gsap } from 'gsap';
  import { TextPlugin } from 'gsap/dist/TextPlugin';

  /**
   * @type {string}
   */
  export let title;

  /**
   * @type HTMLElement
   */
  let titleElement;

  var tl = gsap.timeline();

  $: currentPath = $page?.url?.pathname;
  $: if (titleElement) {
    tl.set(titleElement, { opacity: 0 });
    titleElement.classList.remove('invisible');
    tl.to(titleElement, {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    });
  }

  $: $page.params.slug && tl.restart();
</script>

<header>
  <h1
    bind:this={titleElement}
    class="green base:text-4xl md:text-6xl font-bold tracking-tighter leading-tight break-word uppercase mt-6 invisible"
  >
    <!-- {title} <span class="text-xl tracking-normal">{currentPath}</span> -->
    {title}

    {#if currentPath !== '/'}
      <span class="text-xl tracking-normal">{currentPath}</span>
    {/if}
    <!-- reettalipponen.art -->
  </h1>
</header>
