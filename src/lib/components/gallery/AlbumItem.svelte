<script lang="ts">
	import type { Album, Track } from "bandcamp-fetch";

	import proxyUrl from "$lib/proxyUrl";

	export let album: Album | Track;

	const releaseEndpoint = `/album?q=${album.url}`;
	const artistEndpoint = `/artist?q=${album.artist?.url}`;
</script>

<div class="flex flex-col gap-0.5">
	{#if album.imageUrl}
		<a href={releaseEndpoint}>
			<img
				src={proxyUrl(album.imageUrl)}
				alt={album.name}
				class="w-full rounded-box hover:scale-95 transition delay-[25] ease-in-out"
			/>
		</a>
	{/if}
	<a class="truncate link-hover font-semibold" href={releaseEndpoint}>{album.name}</a>
	{#if album.artist?.name}
		<a class="text-xs truncate link-hover" href={artistEndpoint}> {album.artist.name}</a>
	{/if}
</div>
