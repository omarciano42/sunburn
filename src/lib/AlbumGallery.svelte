<script lang="ts">
	import type { Album } from "bandcamp-fetch";
	import AlbumItem from "$lib/AlbumItem.svelte";

	export let albums: Album[];
</script>

<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
	{#each albums as album}
		<AlbumItem {album} />
	{/each}
</div>
