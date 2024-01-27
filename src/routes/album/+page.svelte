<script lang="ts">
	import { page } from "$app/stores";

	import ArtistInfo from "$lib/components/artist/ArtistInfo.svelte";
	import AlbumInfo from "$lib/components/album/AlbumInfo.svelte";
	import AlbumHeader from "$lib/components/album/AlbumHeader.svelte";
	import Tracklist from "$lib/components/tracklist/Tracklist.svelte";

	const { album, artist } = $page.data;
</script>

<svelte:head>
	<title>{album.name} @ sunburn</title>
</svelte:head>

<div>
	<AlbumHeader {album} />
	<div class="flex flex-col sm:grid sm:grid-cols-4 gap-6">
		<AlbumInfo {album} />
		<div class="sm:col-span-2">
			<Tracklist tracks={album.tracks} />
		</div>
		<ArtistInfo {artist} />
	</div>
</div>
