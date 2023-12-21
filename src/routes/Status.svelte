<script lang="ts">
	export let allOperational: boolean;
	export let allKnown: boolean;
</script>

{#if allKnown}
	{#if allOperational}
		<h2 class="good">All Systems Operational</h2>
	{:else}
		<h2 class="bad">Not All Systems Operational</h2>
	{/if}
{:else}
	<h2 class="unknown">
		{#if allOperational}
			Systems Could Be Operational
		{:else}
			Systems May Not Be Operational
		{/if}
	</h2>
{/if}

<style>
	h2 {
		padding: 0.4em 0.6em;
		margin: 0.2em 0;
		border-radius: 10px;
		color: #fffbf5;
		font-weight: bold;
	}

	.good {
		background: #1f8355;
	}

	.bad {
		background: #d4131b;
	}

	.unknown {
		background: #493f64;
	}
</style>
