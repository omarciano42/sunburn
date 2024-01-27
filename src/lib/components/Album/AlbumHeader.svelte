<script lang="ts">
	import type { Album } from "bandcamp-fetch";

	export let album: Album;
</script>

<div class="mb-4">
	<!-- album name -->
	<h1>{album.name}</h1>
	{#if album.artist}
		{#if album.artist.url}
			<!-- album artist link -->
			<a class="text-xl link-hover" href={`/artist?q=${album.artist.url}`}> {album.artist.name}</a>
		{:else}
			<!-- album artist name -->
			<span class="text-xs truncate">{album.artist.name}</span>
		{/if}
	{/if}
</div>
