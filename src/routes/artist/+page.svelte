<script lang="ts">
	import { page } from "$app/stores";

	import ArtistInfo from "$lib/ArtistInfo.svelte";
	import AlbumGallery from "$lib/AlbumGallery.svelte";

	const { info, discography } = $page.data;
</script>

<svelte:head>
	<title>{info.name} @ sunburn</title>
</svelte:head>

<div class="flex flex-col md:flex-row-reverse gap-6">
	<ArtistInfo {info} />
	<main class="md:w-3/4">
		<AlbumGallery albums={discography} />
	</main>
</div>
