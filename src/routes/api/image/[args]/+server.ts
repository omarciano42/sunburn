export async function GET({ params: { args } }) {
	const endpoint = "https://f4.bcbits.com/img/" + args;
	return await fetch(endpoint);
}
