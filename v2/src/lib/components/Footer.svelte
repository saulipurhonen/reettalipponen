<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
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
