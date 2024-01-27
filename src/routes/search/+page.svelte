<script lang="ts">
	import { page } from "$app/stores";
	import Pagination from "$lib/components/layout/Pagination.svelte";
	import SearchResults from "$lib/components/search/SearchResults.svelte";

	const { items, pages, current, query } = $page.data;

	const fn = (page: number) => {
		if (page < 1 || page > pages) return null;
		return `/search?q=${query}&page=${page}`;
	};
</script>

<SearchResults {items} />
<Pagination {current} {fn} />
