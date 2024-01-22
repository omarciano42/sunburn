<script lang="ts">
	import type { Track } from "bandcamp-fetch";

	import TrackItem from "./TrackItem.svelte";

	export let tracks: Track[];
</script>

<h2>Tracklist</h2>
<ul class="w-full">
	{#each tracks as track, index}
		<TrackItem {track} {index} />
	{/each}
</ul>
