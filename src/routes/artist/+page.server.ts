import { error } from "@sveltejs/kit";

import { getArtistDiscography, getArtistInfo } from "$lib/server/artist.js";

export async function load({ url: { searchParams } }) {
	const artistUrl = searchParams.get("q");

	if (!artistUrl) error(403, "Missing artist url");

	try {
		const [artist, discography] = await Promise.all([
			getArtistInfo(artistUrl),
			getArtistDiscography(artistUrl),
		]);

		return {
			artist,
			discography,
		};
	} catch (e) {
		error(403, (e as Error).message);
	}
}
