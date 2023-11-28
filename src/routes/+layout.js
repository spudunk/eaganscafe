export async function load({ fetch }) {
	const res = await fetch(`/api`);
	const info = await res.json();
	// console.log("+layout.js info: ", info)
	return info ;
}