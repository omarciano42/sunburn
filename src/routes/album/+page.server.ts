import { error } from "@sveltejs/kit";

import { getAlbum } from "$lib/server/album.js";
import { getArtistInfo } from "$lib/server/artist.js";

export async function load({ url: { searchParams } }) {
	const albumUrl = searchParams.get("q");

	if (!albumUrl) error(403, "Missing album url");

	try {
		const album = await getAlbum(albumUrl);

		if (album.artist?.url) {
			const artist = await getArtistInfo(album.artist.url);
			return { album, artist };
		}

		return {
			album,
		};
	} catch (e) {
		error(403, (e as Error).message);
	}
}
