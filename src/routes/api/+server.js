
export async function GET({ request, platform }) {
	const info = await platform?.env?.KV.get('info');
  return new Response(info)
}