<script lang="ts">
	import type { SearchResultAny } from "bandcamp-fetch";
	import proxyUrl from "$lib/proxyUrl";

	export let item: SearchResultAny;

	const prefix = {
		album: "album",
		track: "album",
		artist: "artist",
		label: "artist",
	};
</script>

{#if item.type !== "fan"}
	<div class="flex flex-col gap-0.5">
		<!-- item thumbnail -->
		{#if item.imageUrl}
			<a href={`/${prefix[item.type]}?q=${item.url}`}>
				<img
					src={proxyUrl(item.imageUrl)}
					alt={item.name}
					class="w-full rounded-box hover:scale-95 transition delay-[25] ease-in-out"
				/>
			</a>
		{/if}

		<!-- item name -->
		<a class="truncate link-hover font-semibold" href={`/${prefix[item.type]}?q=${item.url}`}
			>{item.name}</a
		>

		<!-- item details -->
		{#if item.type === "album" || item.type === "track"}
			{#if item.artist}
				<span class="text-xs truncate">by {item.artist}</span>
			{/if}
			{#if item.type == "track" && item.album}
				<span class="text-xs truncate">from {item.album}</span>
			{/if}
		{/if}
	</div>
{/if}
