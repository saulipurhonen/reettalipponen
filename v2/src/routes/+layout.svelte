<script>
  import { page } from '$app/stores';
  import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from './Header.svelte';
  import '../app.css';
  import './styles.css';
  import { gsap } from 'gsap';
  import { NAVIGATION_ITEMS, MOBILE_BREAKPOINT } from '$lib/constants/navigation';
  import { menuOpen, isMobile } from '$lib/stores';
  import { onMount } from 'svelte';

  $: isHomePage = $page?.url?.pathname === '/';
  $: currentPath = $page?.url?.pathname;

  /**
   * @type HTMLElement
   */
  let appContainer;

  /**
   * @type HTMLElement
   */
  let mainContainer;

  let isNavigating = false;

  let innerWidth = 0;

  onMount(() => {
    menuOpen.subscribe((isOpen) => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    });
  });

  // const isMobile = innerWidth < MOBILE_BREAKPOINT;

  isMobile.set(innerWidth < MOBILE_BREAKPOINT);

  beforeNavigate((navigation) => {
    if (isMobile) {
      mainContainer.classList.add('invisible');
    }

    if (isNavigating || !navigation.to || navigation.to?.route.id === currentPath || isMobile)
      return;

    isNavigating = true;

    const hrefs = NAVIGATION_ITEMS.map((item) => item.href);

    const oldIndex = hrefs.indexOf(currentPath);
    const newIndex = hrefs.indexOf(navigation.to?.url.pathname ?? '');

    navigation.cancel();

    const tl = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power2.inOut' },
      onComplete: () => {
        isNavigating = false;
        if (navigation.to) {
          gotoDestination(navigation.to.url);
        }
      },
    });

    if (oldIndex === newIndex) return;

    const goLeft = oldIndex > newIndex;

    const x = 50;

    const fadeToValue = goLeft ? x : x * -1;
    const completionValue = goLeft ? x * -1 : x;

    tl.to(mainContainer, { x: fadeToValue, opacity: 0 }).to(mainContainer, {
      x: completionValue,
      opacity: 0,
    });
  });

  afterNavigate(() => {
    mainContainer.classList.remove('invisible');
    gsap.to(mainContainer, { x: 0, opacity: 1 });
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

<svelte:window bind:innerWidth />

<div bind:this={appContainer} class="app" class:home={isHomePage && !isMobile}>
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
