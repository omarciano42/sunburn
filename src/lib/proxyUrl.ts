export default function (url: string) {
	if (url.startsWith("https://f4.bcbits.com/img/")) {
		return "/api/image/" + url.substring(26);
	} else if (url.startsWith("https://t4.bcbits.com/stream/")) {
		return "/api/stream/" + url.substring(29);
	}

	return "#";
}
