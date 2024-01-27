import { error } from "@sveltejs/kit";

import { search } from "$lib/server/search";

export async function load({ url: { searchParams } }) {
	const query = searchParams.get("q");
	const page = searchParams.get("page");

	if (!query) error(400, "Invalid search query");

	return { current: page || 1, query, ...(await search(query, page ? parseInt(page) : undefined)) };
}
