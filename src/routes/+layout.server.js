// import { info } from "$lib/info";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({platform}) {
  try {
    return {
      info: await platform?.env?.KV.get("info", { type: "json" }),
    };    
  } catch (error) {
    return {info: error}
  }


}
