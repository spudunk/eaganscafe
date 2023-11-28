export async function load({ fetch, params }) {
	// const res = await fetch(`/api/items/${params.id}`);
	const res = await fetch(`/api`);
	const info = await res.json();
	console.log("+layout.js info: ", info)

	return info ;
}