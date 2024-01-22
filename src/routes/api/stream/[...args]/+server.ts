export async function GET({ params: { args }, url: { searchParams } }) {
	const endpoint = `https://t4.bcbits.com/stream/${args}?${searchParams}`;
	return await fetch(endpoint, {
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
			Referer: "https://example.com",
		},
	});
}
