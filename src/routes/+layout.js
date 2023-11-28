export async function load({ fetch, params }) {
	// const res = await fetch(`/api/items/${params.id}`);
	const res = await fetch(`/api`);
	const info = await res.json();

	return info ;
}