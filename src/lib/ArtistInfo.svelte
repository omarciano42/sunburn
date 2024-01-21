<script lang="ts">
	import type { Artist, Label } from "bandcamp-fetch";

	export let info: Artist | Label;
</script>

<aside class="flex flex-col bg-base-200 flex-1 gap-2 p-2 h-fit">
	{#if info.imageUrl}
		<img src={info.imageUrl} alt={info.name} />
	{/if}
	<strong class="text-2xl">{info.name}</strong>
	{#if info.description}
		<p class="text-sm">{info.description}</p>
	{/if}
</aside>
