import { json } from "@sveltejs/kit";
import type { Data } from "$lib/types.js";

export async function POST({ platform, request }) {
  const data = await request.json() as Data;
  // console.log('request json: ', body)  // okay here
  if (platform?.env) {
    data.updated = new Date().getTime();
    await platform?.env?.KV.put("data", JSON.stringify(data));
    return json({ message: `saved!` });
  }
  return json({ message: `save fail: platform.env not available` });
}
