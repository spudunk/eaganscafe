
export async function GET({ request, platform }) {
	const info = await platform?.env?.KV.get('ethelInfo');
  console.log(platform)
  return new Response(info)
}