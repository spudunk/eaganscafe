/** @type {import('./$types').LayoutServerLoad} */
export async function load(context) {
  try {
    return {
      info: await context.platform?.env?.KV.get("info"),
    };
  } catch (error) {
    console.error(error);
    return {};
  }
}
