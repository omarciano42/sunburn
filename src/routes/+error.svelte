<script>
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>error {$page.status} @ sunburn</title>
</svelte:head>

<h1>An error has occurred ({$page.status})</h1>
<p>{$page.error?.message}</p>
