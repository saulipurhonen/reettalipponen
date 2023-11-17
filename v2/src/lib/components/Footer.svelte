<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <p>© {currentYear} Reetta Lipponen</p>
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