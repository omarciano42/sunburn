import bandcamp from "bandcamp-fetch";

export async function getArtistInfo(artistUrl: string) {
	const artist = await bandcamp.band.getInfo({ bandUrl: artistUrl, imageFormat: 20 });
	return artist;
}

export async function getArtistDiscography(artistUrl: string) {
	const discography = await bandcamp.band.getDiscography({ bandUrl: artistUrl });
	return discography;
}
