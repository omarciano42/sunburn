import bandcamp from "bandcamp-fetch";

export async function getAlbum(albumUrl: string) {
	const album = await bandcamp.album.getInfo({ albumUrl, albumImageFormat: 16 });
	return album;
}
