<script lang="ts">
	export let current: number;
	export let fn: (page: number) => string | null;

	const [previous, next] = [fn(current - 1), fn(current + 1)];
</script>

<div class="join mx-auto mt-8">
	<a data-sveltekit-reload class="join-item btn" class:btn-disabled={!previous} href={previous}>«</a
	>
	<btn class="join-item btn">Page {current}</btn>
	<a data-sveltekit-reload class="join-item btn" class:btn-disabled={!next} href={next}>»</a>
</div>
