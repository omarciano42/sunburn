<script lang="ts">
	import type { Album, Track } from "bandcamp-fetch";

	import AlbumItem from "./AlbumItem.svelte";

	export let albums: (Album | Track)[];
	export let size: "small" | "big" = "big";

	const columns = {
		big: "grid-cols-2 sm:grid-cols-4 md:grid-cols-6",
		small: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
	};
</script>

<div class={`grid gap-4 ${columns[size]}`}>
	{#if albums.length}
		{#each albums as album}
			<AlbumItem {album} />
		{/each}
	{:else}
		<span>No results...</span>
	{/if}
</div>
