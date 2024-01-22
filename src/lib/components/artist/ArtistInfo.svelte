<script lang="ts">
	import type { Artist, Label } from "bandcamp-fetch";

	import proxyUrl from "$lib/proxyUrl";

	export let artist: Artist | Label;
</script>

<div class="flex flex-col bg-base-200 flex-1 gap-2 p-2 h-fit rounded-box">
	{#if artist.imageUrl}
		<a href={`/artist?q=${artist.url}`}>
			<img src={proxyUrl(artist.imageUrl)} alt={artist.name} class="rounded-box" />
		</a>
	{/if}

	<a href={`/artist?q=${artist.url}`}>
		<h1 class="truncate">{artist.name}</h1>
	</a>

	{#if artist.description}
		<p>{artist.description}</p>
	{/if}
</div>
