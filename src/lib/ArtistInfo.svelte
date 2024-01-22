<script lang="ts">
	import type { Artist, Label } from "bandcamp-fetch";

	export let artist: Artist | Label;
</script>

<div class="flex flex-col bg-base-200 flex-1 gap-2 p-2 h-fit sm:w-2/5 rounded-box">
	{#if artist.imageUrl}
		<img src={artist.imageUrl} alt={artist.name} class="rounded-box" />
	{/if}

	<h1 class="truncate">{artist.name}</h1>

	{#if artist.description}
		<p>{artist.description}</p>
	{/if}
</div>
