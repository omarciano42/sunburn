import { error } from "@sveltejs/kit";

import { getArtistDiscography, getArtistInfo } from "$lib/server/artist.js";

export async function load({ url: { searchParams } }) {
	const artistURL = searchParams.get("q");

	if (!artistURL) error(403, "Missing artist url");

	try {
		const [info, discography] = await Promise.all([
			getArtistInfo(artistURL),
			getArtistDiscography(artistURL),
		]);

		return {
			info,
			discography,
		};
	} catch (e) {
		error(403, (e as Error).message);
	}
}
