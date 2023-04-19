/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    color: {
      'regalblue': '#2c444e',
    },
    text: {
      '-webkit-text-stroke': '10px white',
    },
  },
  plugins: [],
}