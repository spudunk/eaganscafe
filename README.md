# Eagans Diner Web App

Built with Svelte, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Updating
Menu data is contained in src/lib/menu.js. Schema for the menu data is commented at the bottom of the menu.js file. 

Pages for individual routes are contained in src/routes. 
All of the redundant components are contained in src/lib/components.  

## Developing

1. Copy this repo
2. Installed dependencies with `npm install`
3. start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```
For performance the entire site has static building enabled in src/routes/+layout.server.js

You can preview the production build with `npm run preview`.

> Your app currently uses the cloudflare [adapter](https://kit.svelte.dev/docs/adapters) for the Cloudflare  environment.
