import explore from "$lib/server/explore";

export async function load() {
	const albums = await explore();
	return { albums };
}
