/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // For your main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // For all JS, JSX, TS, TSX files in src
  ],
  theme: {
    extend: {
      color:{
        primary:'#000000'
      }
    },
  },
  plugins: [],
}
