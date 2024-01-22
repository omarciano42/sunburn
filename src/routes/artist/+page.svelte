<script lang="ts">
	import { page } from "$app/stores";

	import AlbumGallery from "$lib/AlbumGallery.svelte";
	import ArtistInfo from "$lib/ArtistInfo.svelte";

	const { artist, discography } = $page.data;
</script>

<svelte:head>
	<title>{artist.name} @ sunburn</title>
</svelte:head>

<div class="flex flex-col sm:flex-row-reverse gap-6">
	<ArtistInfo {artist} />
	<AlbumGallery albums={discography} size="small" />
</div>
