<script lang="ts">
	import type { Album } from "bandcamp-fetch";

	import AlbumTags from "./AlbumTags.svelte";
	import proxyUrl from "$lib/proxyUrl";

	export let album: Album;
</script>

<div class="flex flex-col gap-4 bg-base-200 rounded-box p-2 h-fit">
	<!-- album cover -->
	{#if album.imageUrl}
		<img src={proxyUrl(album.imageUrl)} alt={album.name} class="rounded-box" />
	{/if}

	<!-- album keywords -->
	<AlbumTags tags={album.keywords} />

	<!-- album description -->
	{#if album.description}
		<p>{album.description}</p>
	{/if}
</div>
