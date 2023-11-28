export const prerender = true;


export async function load(context) {
  if(context.platform) {
    console.log("platform: ", context.platform);
    console.log("env: ", context.platform.env);

  } else {
    console.log("context: ", context)
  }
  return {};
}
