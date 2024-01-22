import bandcamp from "bandcamp-fetch";

export async function explore() {
	const { items } = await bandcamp.discovery.discover();
	return items;
}
