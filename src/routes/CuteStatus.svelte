<script lang="ts">
	import { tippy } from 'svelte-tippy';
	import 'tippy.js/dist/tippy.css';

	export let success: number;
	export let successValues: number[];
	export let failure: number;

	$: operational = failure == 0;
	$: known = success + failure > 0;

	$: failuresContent = `Failures Count: ${failure}`;
	$: successContent = `Average Latency: ${
		successValues.reduce((s, v) => s + v, 0) / successValues.length
	}`;

	$: content = [failure > 0 ? failuresContent : '', success > 0 ? successContent : '']
		.filter((s) => s)
		.join('\n');
</script>

{#if known}
	{#if operational}
		<li
			class="good"
			use:tippy={{
				placement: 'bottom',
				theme: 'tomato',
				content
			}}
		>
			Success
		</li>
	{:else}
		<li
			class="bad"
			use:tippy={{
				placement: 'bottom',
				theme: 'tomato',
				content
			}}
		>
			Failure
		</li>
	{/if}
{:else}
	<li
		class="unknown"
		use:tippy={{
			placement: 'bottom',
			theme: 'tomato',
			content: 'No Data'
		}}
	>
		Unknown
	</li>
{/if}

<style>
	li {
		flex: 1;
		display: block;
		font-size: 0;
		height: 3rem;
		max-width: 1rem;
		border-radius: 100px;
		font-weight: bold;
	}

	.good {
		background: #1f8355;
	}

	.bad {
		background: #d4131b;
	}

	.unknown {
		background: #00000020;

		@media (prefers-color-scheme: dark) {
			background: #ffffff20;
		}
	}

	:global(.tippy-box[data-theme~='tomato']) {
		background: hsl(36, 5%, 85%);
		color: inherit;

		& .tippy-arrow {
			color: hsl(36, 5%, 85%);
		}

		@media (prefers-color-scheme: dark) {
			& .tippy-arrow {
				color: hsl(257, 10%, 48%);
			}

			background: hsl(257, 10%, 48%);
		}
	}
</style>
