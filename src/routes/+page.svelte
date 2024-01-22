<script lang="ts">
	import { page } from "$app/stores";

	import AlbumGallery from "$lib/AlbumGallery.svelte";

	const { albums } = $page.data;
</script>

<svelte:head>
	<title>explore @ sunburn</title>
</svelte:head>

<h1>Explore</h1>
<AlbumGallery {albums} />
