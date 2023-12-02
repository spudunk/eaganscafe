import { json } from "@sveltejs/kit";

export async function POST({ platform, request }) {
  const body = await request.json();
  // console.log('request json: ', body)  // okay here
  if (platform?.env) {
    const res = await platform?.env?.KV.put("data", JSON.stringify(body));
    return json({ message: `saved` });
  }
  return json({ message: `fail, no platform.env` });
}
