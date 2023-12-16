// import originalData from "$lib/data";

export async function load({ fetch, platform }) {
  if (platform) {
    const data = await platform?.env?.KV.get("data", { type: "json" });
    console.log("using data from KV store");
    return data;
  }
  // console.log("using original data from lib")
  // return originalData;
  console.log("initializing with empty data object...")
  return {}
}
