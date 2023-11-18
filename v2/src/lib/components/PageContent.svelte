<script>
    import { gsap } from 'gsap';

    /**
   * @type HTMLElement
   */
    let contentContainer;

    $: if (contentContainer) {
    gsap.set(contentContainer, { opacity: 0 });
    contentContainer.classList.remove('invisible');
    gsap.to(contentContainer, {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }

</script>

<section bind:this={contentContainer} class="container py-20 invisible">
  <div class="max-w-xl backdrop-blur-sm">
    <slot />
  </div>
</section>
