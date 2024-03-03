<script>
  import { page } from '$app/stores';
  import { gsap } from 'gsap';

  /**
   * @type HTMLElement
   */
  let contentContainer;
  $: currentPath = $page?.url?.pathname;
  // TODO: Restart animation when in slug route change
  // Current path check is a workaround for this for now.
  // Better approach would be resetting the animation when slug changes.
  $: if (contentContainer && currentPath) {
    contentContainer.classList.remove('invisible');

    const paragraphs = document.querySelectorAll('.reveal');

    if (paragraphs.length) {
      gsap.set(paragraphs, { opacity: 1, y: -20 });

      const tl = gsap.timeline({ defaults: { duration: 1.0, ease: 'power2.inOut' } });

      tl.from(
        paragraphs,
        {
          opacity: 0,
          y: 0,
          stagger: 0.1,
        },
        0.25,
      );
    }
  }
</script>

<section bind:this={contentContainer} class="container py-20 invisible">
  <div class="max-w-xl backdrop-blur-sm">
    <slot />
  </div>
</section>
