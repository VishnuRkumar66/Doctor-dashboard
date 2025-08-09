/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // include all HTML/JS inside src folder
  ],
  theme: {
    extend: {}, // you can customize theme here (colors, fonts, etc.)
  },
  plugins: [], // add Tailwind plugins here if needed
};
