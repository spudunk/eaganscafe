/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
    },
    extend: {
      fontFamily: {
        display: ["Shadows Into Light", "sans-serif"]
      }
    },
  },
  plugins: [],
}

