<script lang="ts">
	import { page } from "$app/stores";

	const { artist } = $page.params;
</script>

<svelte:head>
	<title>{artist} @ sunburn</title>
</svelte:head>

<h1>{artist} discography</h1>
