/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#60b18f',
        orange: {
          600: '#fb923c',
        },
      },
    },
  },
  plugins: [],
}