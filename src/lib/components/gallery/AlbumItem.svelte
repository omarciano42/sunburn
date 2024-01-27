<script lang="ts">
	import type { Album, Track } from "bandcamp-fetch";

	import proxyUrl from "$lib/proxyUrl";

	export let album: Album | Track;
</script>

<div class="flex flex-col gap-0.5">
	<!-- album thumbnail -->
	{#if album.imageUrl}
		<a href={`/album?q=${album.url}`}>
			<img
				src={proxyUrl(album.imageUrl)}
				alt={album.name}
				class="w-full rounded-box hover:scale-95 transition delay-[25] ease-in-out"
			/>
		</a>
	{/if}

	<!-- album name -->
	<a class="truncate link-hover font-semibold" href={`/album?q=${album.url}`}>{album.name}</a>

	<!-- album artist -->
	{#if album.artist}
		{#if album.artist.url}
			<a class="text-xs truncate link-hover" href={`/artist?q=${album.artist.url}`}>
				{album.artist.name}</a
			>
		{:else}
			<span class="text-xs truncate">{album.artist.name}</span>
		{/if}
	{/if}
</div>
