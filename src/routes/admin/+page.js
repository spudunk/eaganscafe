export async function load({ fetch }) {
	const res = await fetch(`/api/data`);
	const data = await res.json();
	// console.log("+layout.js info: ", info)
	return data ;
}