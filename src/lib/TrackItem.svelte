<script lang="ts">
	import type { Track } from "bandcamp-fetch";

	import proxyUrl from "./proxyUrl";

	export let track: Track;
	export let index: number;
</script>

<li class="flex gap-2">
	<span>{index + 1}.</span>
	<div class="flex flex-col gap-2 w-full">
		<div class="flex justify-between items-center">
			<span class="col-span-4 text-lg">{track.name}</span>
			{#if track.duration}
				<span class="text-right"
					>{Math.round(track.duration / 60)}:{Math.round(track.duration % 60)}</span
				>
			{/if}
		</div>

		{#if track.streamUrl}
			<audio src={proxyUrl(track.streamUrl)} controls />
		{/if}
	</div>
</li>
