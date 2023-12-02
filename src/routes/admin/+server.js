import { json } from "@sveltejs/kit";

export async function POST({ platform, request }) {
  const body = await request.json();
  // console.log('request json: ', body)  // okay here
  if (platform?.env && body) {
    const res = await platform?.env?.KV.put("data", JSON.stringify(body));
    return json({ message: `saved` });
  }
  if (body) {
    return json({ message: "no platform" });
  }
  return json({ message: "no request.body" });
}
