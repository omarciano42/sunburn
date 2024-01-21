<script lang="ts">
	import type { Album, Track } from "bandcamp-fetch";
	import AlbumItem from "$lib/AlbumItem.svelte";

	export let albums: (Album | Track)[];
</script>

<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
	{#if albums.length}
		{#each albums as album}
			<AlbumItem {album} />
		{/each}
	{:else}
		<span>No results...</span>
	{/if}
</div>
