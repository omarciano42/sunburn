<script lang="ts">
	import { page } from "$app/stores";

	import AlbumGallery from "$lib/components/gallery/AlbumGallery.svelte";
	import ArtistInfo from "$lib/components/artist/ArtistInfo.svelte";

	const { artist, discography } = $page.data;
</script>

<svelte:head>
	<title>{artist.name} @ sunburn</title>
</svelte:head>

<div class="flex flex-col sm:grid sm:grid-cols-4 gap-6">
	<ArtistInfo {artist} />
	<div class="col-span-3">
		<AlbumGallery albums={discography} size="small" />
	</div>
</div>
