<script lang="ts">
	import type { SearchResultAny } from "bandcamp-fetch";
	import SearchItem from "./SearchItem.svelte";

	export let items: SearchResultAny[];
</script>

<div class={`grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6`}>
	{#if items.length}
		{#each items as item}
			<SearchItem {item} />
		{/each}
	{:else}
		<span>No results...</span>
	{/if}
</div>
