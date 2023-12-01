// export async function load({ fetch }) {
// 	const res = await fetch(`/api/data`);
// 	const data = await res.json();
// 	// console.log("+layout.js info: ", info)
// 	return data ;
// }

import { json } from "@sveltejs/kit";

export async function load({ fetch, platform }) {
  const data = await platform?.env?.KV.get("data", { type: "json" });
  return data;
}
