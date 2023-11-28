import { json } from "@sveltejs/kit";
import data from "$lib/data";

export async function GET({ platform }) {
  const res = await platform?.env?.KV.put("data", JSON.stringify(data));
  return json({ "KV Response": res });
}
