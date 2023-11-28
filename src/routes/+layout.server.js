// import { info } from "$lib/info";

/** @type {import('./$types').LayoutServerLoad} */
export async function load(context) {
  try {
    return {
      info: await context.platform?.env?.KV.get("info", { type: "json" }),
    };
  } catch (error) {
    console.error(error);
    // return { info: info };
    return {info: {}};
  }
}
