<script>
  import { page } from '$app/stores';
  import Meta from '$lib/components/Meta.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PageContent from '$lib/components/PageContent.svelte';

  const worksPages = [
    {
      slug: 'ceramic',
      title: 'Keramiikka',
    },
    {
      slug: 'installation',
      title: 'Installaatio',
    },
    {
      slug: 'sculpture',
      title: 'Veistos',
    },
    {
      slug: 'customer',
      title: 'Asiakastyö',
    },
  ]

  $: currentWork = worksPages.find(work => work.slug === $page.params.slug)
</script>

{#if currentWork}
  <Meta title={currentWork.title} description={currentWork.title} />

  <PageHeader title={currentWork.title} />
{/if}

<PageContent>
  <p>TODO</p>
</PageContent>
