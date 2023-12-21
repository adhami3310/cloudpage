<script lang="ts">
	import type { MonitorTest } from '$lib';
	import CuteStatus from './CuteStatus.svelte';

	export let checks: MonitorTest[];

	export const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

	$: relevant_tests = checks.filter((t) => Date.now() - t.timestamp <= 30 * MILLISECONDS_IN_DAY);

	$: day_success = checks.reduce(
		(res: MonitorTest[][], a) => {
			res.at(Math.trunc((Date.now() - a.timestamp) / MILLISECONDS_IN_DAY))?.push(a);
			return res;
		},
		[...Array(30)].map(() => [])
	);
</script>

<ol>
	{#each day_success as day}
		<CuteStatus
			success={day.filter((c) => c.successful).length}
			successValues={day.filter((c) => c.successful).map((c) => c.duration)}
			failure={day.filter((c) => !c.successful).length}
		></CuteStatus>
	{/each}
</ol>
<div id="time">
	<div>30 Days Ago</div>
	<div>Today</div>
</div>

<style>
	ol {
		padding: 0;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		gap: 3px;
	}

	#time {
		margin-top: 0.5em;
		display: flex;
		opacity: 0.5;
		align-items: baseline;
		justify-content: space-between;
	}
</style>
