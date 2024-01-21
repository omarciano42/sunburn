import bandcamp from "bandcamp-fetch";

export default async function () {
	const { items } = await bandcamp.discovery.discover();
	return items;
}
