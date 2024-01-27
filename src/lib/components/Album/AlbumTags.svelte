<script lang="ts">
	export let tags: string[] | undefined;
</script>

{#if tags?.length}
	<div class="flex gap-2 flex-wrap">
		{#each tags as tag}
			<!-- keyword -->
			<span class="badge badge-accent badge-lg">{tag}</span>
		{/each}
	</div>
{/if}
