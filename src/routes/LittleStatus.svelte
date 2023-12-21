<script lang="ts">
	export let operational: boolean;
	export let known: boolean;
</script>

{#if known}
	{#if operational}
		<div class="good">Operational</div>
	{:else}
		<div class="bad">Not Operational</div>
	{/if}
{:else}
	<div class="unknown">?</div>
{/if}

<style>
	div {
		padding: 0.4em 0.6em;
		margin: 0.2em 0;
		border-radius: 100px;
		font-weight: bold;

		@media (prefers-color-scheme: dark) {
			filter: brightness(2);
		}
	}

	.good {
		color: #1f8355;
	}

	.bad {
		color: #d4131b;
	}

	.unknown {
		color: #493f64;
	}
</style>
