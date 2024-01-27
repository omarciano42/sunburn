import bandcamp from "bandcamp-fetch";

export async function search(query: string, page?: number) {
	const { items, totalPages: pages } = await bandcamp.search.all({ query, page });
	return { items, pages };
}
