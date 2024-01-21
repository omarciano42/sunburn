<script>
	import { page } from "$app/stores";

	const { artist, track, album } = $page.params;
</script>

<svelte:head>
	<title>{artist} - {track || album} @ sunburn</title>
</svelte:head>

<div class="flex flex-col md:flex-row gap-2">
	<main class="md:w-3/4">
		<slot />
	</main>
	<aside class="flex flex-col bg-base-200 flex-1">
		<span>[artist image]</span>
		<strong class="text-2xl">{artist}</strong>
		<p>[artist description]</p>
	</aside>
</div>
