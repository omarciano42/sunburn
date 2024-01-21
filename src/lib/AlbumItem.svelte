<script lang="ts">
	import type { Album } from "bandcamp-fetch";

	export let album: Album;
</script>

<div class="w-full flex flex-col gap-0.5">
	<a href="/{album.artist?.name}/album/{album.name}">
		<img
			src={album.imageUrl}
			alt={album.name}
			class="w-full rounded-md hover:scale-95 transition delay-[25] ease-in-out"
		/>
	</a>
	<a class="truncate link-hover font-semibold" href="/{album.artist?.name}/album/{album.name}"
		>{album.name}</a
	>
	<a class="text-xs truncate link-hover" href="/{album.artist?.name}"> {album.artist?.name}</a>
</div>
