<script lang="ts">
	import type { UserKind } from "bandcamp-fetch";

	import proxyUrl from "$lib/proxyUrl";

	export let artist: UserKind;
</script>

<div class="flex flex-col bg-base-200 flex-1 gap-2 p-2 h-fit rounded-box">
	<!-- artist thumbnail -->
	{#if artist.imageUrl}
		<img src={proxyUrl(artist.imageUrl)} alt={artist.name} class="rounded-box" />
	{/if}

	<!-- artist name -->
	{#if artist.url}
		<a href={`/artist?q=${artist.url}`}>
			<span class="truncate text-xl font-bold">{artist.name}</span>
		</a>
	{/if}

	<!-- artist description -->
	{#if artist.description}
		<p>{artist.description}</p>
	{/if}
</div>
