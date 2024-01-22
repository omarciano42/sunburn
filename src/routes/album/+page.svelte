<script lang="ts">
	import { page } from "$app/stores";

	import ArtistInfo from "$lib/ArtistInfo.svelte";
	import AlbumInfo from "$lib/AlbumInfo.svelte";
	import Tracklist from "$lib/Tracklist.svelte";

	const { album, artist } = $page.data;
</script>

<svelte:head>
	<title>{album.name} @ sunburn</title>
</svelte:head>

<div>
	<div class="mb-4">
		<h1>{album.name}</h1>
		{#if album.artist?.name}<h2>{album.artist?.name}</h2>{/if}
	</div>
	<div class="flex flex-col sm:grid sm:grid-cols-4 gap-6">
		<AlbumInfo {album} />
		<div class="sm:col-span-2">
			<Tracklist tracks={album.tracks} />
		</div>
		<ArtistInfo {artist} />
	</div>
</div>
