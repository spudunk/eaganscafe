import { json } from "@sveltejs/kit";

/** @type {import('../$types').RequestHandler} */
export async function GET({ platform }) {
  const data = await platform?.env?.KV.get("data", { type: "json" });
  return json(data);
}
