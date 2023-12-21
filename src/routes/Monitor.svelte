<script lang="ts">
	import { unwrap_or, type MonitorStatus } from '$lib';
	import Bars from './Bars.svelte';
	import LittleStatus from './LittleStatus.svelte';

	export let monitor: MonitorStatus;

	$: operational = unwrap_or(monitor.checks.at(-1)?.successful, true);
	$: known = monitor.checks.length > 0;
</script>

<li>
	<div id="info">
		<a href={monitor.displayedURL} target="_blank">{monitor.title}</a>
		<LittleStatus {operational} {known} />
	</div>
	<Bars checks={monitor.checks} />
</li>

<style>
	li {
		display: block;
		border-radius: 10px;
		padding: 0.4em 0.8em;
		background: #00000010;

		@media (prefers-color-scheme: dark) {
			background: #ffffff20;
		}
	}

	#info {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	a {
		font: inherit;
		color: inherit;
		font-weight: bold;
	}
</style>
