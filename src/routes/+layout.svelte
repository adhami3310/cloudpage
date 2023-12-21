<script>
	import '@fontsource/atkinson-hyperlegible';
	import '@fontsource/poppins/latin-800.css';
</script>

<slot />

<style>
	:global(body) {
		background: #fffbf5;
		color: #241f31;
		font-family: 'Atkinson Hyperegible', sans-serif;
        font-size: 16px;
		max-width: 80ch;
		margin: auto;
        padding: 1ch;
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			background: #241f31;
			color: #fffbf5;
		}
	}
</style>
