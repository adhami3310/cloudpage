<script lang="ts">
	import type { PageServerData } from './$types';
	import { unwrap_or, type MonitorStatus } from '$lib';
	import Status from './Status.svelte';
	import Monitor from './Monitor.svelte';

	export let data: PageServerData;

	$: status = data.status;

	$: allOperational = status.every((s) => unwrap_or(s.checks.at(-1)?.successful, true));

	$: allKnown = status.length > 0 && status.every((s) => s.checks.length > 0);
</script>

<main>
	<h1>Fuiz</h1>

	<Status {allOperational} {allKnown}></Status>

	<ol>
		{#each status as monitor}
			<Monitor {monitor} />
		{/each}
	</ol>
</main>

<style>
	h1 {
		font-family: 'Poppins';
		margin: 0 0 0.2em;
	}

	ol {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
