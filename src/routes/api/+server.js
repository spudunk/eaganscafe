
export async function GET({ request, platform }) {
	const info = await platform?.env?.KV.get('info', {type: "text"});
  return new Response(info)
}