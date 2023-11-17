<script>
  /**
   * @type {string}
   */
  export let title;
  /**
   * @type {string}
   */
  export let description;
</script>

<svelte:head>
  <title>{title} - Reetta Lipponen Art</title>
  <meta name="description" content={description} />
</svelte:head>
