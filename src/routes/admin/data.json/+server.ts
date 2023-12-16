import { json } from '@sveltejs/kit';

export async function GET({ platform }) {
  if (platform?.env) {
    const res = await platform?.env?.KV.get("data");
    return json(JSON.parse(res || `{"message":"load fail: KV empty"}`))
  }
  return json({ message: `load fail: platform.env not available` });
}