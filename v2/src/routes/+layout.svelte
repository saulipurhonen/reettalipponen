<script>
  import { page } from '$app/stores';
  import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from './Header.svelte';
  import '../app.css';
  import './styles.css';
  import { gsap } from 'gsap';
  import { NAVIGATION_ITEMS } from '$lib/constants/navigation';

  $: isHomePage = $page?.url?.pathname === '/';
  $: currentPath = $page?.url?.pathname;

  /**
   * @type HTMLElement
   */
  let mainContainer;

  let isNavigating = false;

  beforeNavigate((navigation) => {
    if (isNavigating || navigation.to?.route.id === currentPath) return;

    isNavigating = true;

    const hrefs = NAVIGATION_ITEMS.map((item) => item.href);

    const oldIndex = hrefs.indexOf(currentPath);
    const newIndex = hrefs.indexOf(navigation.to?.url.pathname ?? '');

    navigation.cancel();

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'power2.inOut' },
      onComplete: () => {
        isNavigating = false;
        if (navigation.to) {
          gotoDestination(navigation.to.url);
        }
      },
    });

    const goLeft = oldIndex > newIndex;

    const x = 500;

    const fadeToValue = goLeft ? x : x * -1;
    const completionValue = goLeft ? x * -1 : x;

    tl.to(mainContainer, { x: fadeToValue, opacity: 0 }).to(mainContainer, {
      x: completionValue,
      opacity: 0,
    });
  });

  afterNavigate(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.inOut' } });

    tl.to(mainContainer, { x: 0, opacity: 1 });
  });

  /**
   * @param {string | URL} destination
   */
  async function gotoDestination(destination) {
    isNavigating = true; // Prevents re-triggering beforeNavigate
    await goto(destination);
    isNavigating = false;
  }
</script>

<div class="app" class:home={isHomePage}>
  <Header />

  <main bind:this={mainContainer}>
    <slot />
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .home {
    background-image: url('$lib//images/bg_mock.jpg');
    background-size: cover;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
