import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET({ platform }) {
  // const info = await platform?.env?.KV.get("info", { type: "json" });
  const info = await platform?.env?.KV.get("info");
  
  console.log("+server.js info: ", info);
  return new Response(info);
}
