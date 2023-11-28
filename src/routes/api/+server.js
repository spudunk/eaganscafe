import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ platform }) {
  const info = await platform?.env?.KV.get('info');
	return json(info);
}