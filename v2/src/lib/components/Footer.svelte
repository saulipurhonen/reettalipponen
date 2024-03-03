<script>
  // import { gsap } from 'gsap';

  const currentYear = new Date().getFullYear();

  /**
   * @type HTMLElement
   */
  let footerContainer;

  // $: if (footerContainer) {
  //   footerContainer.classList.remove('invisible');

  //   gsap.set(footerContainer, { opacity: 1, y: 0 });

  //   const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.inOut' } });

  //   tl.from(
  //     footerContainer,
  //     {
  //       opacity: 0,
  //       y: 0,
  //     },
  //     1,
  //   );
  // }
</script>

<footer bind:this={footerContainer} class="invisible">
  <p>
    © {currentYear} Reetta Lipponen | Website by
    <a href="https://github.com/saulipurhonen" target="_blank">partner in crime</a>
  </p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
