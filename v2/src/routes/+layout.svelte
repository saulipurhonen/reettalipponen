<script>
	import { page } from '$app/stores';
  import Footer from '$lib/components/Footer.svelte';
  import Header from './Header.svelte';
  import '../app.css';
  import './styles.css';

	$: isHomePage = $page?.url?.pathname === '/';
</script>

<div class="app" class:home={isHomePage}>
  <Header />

  <main>
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
