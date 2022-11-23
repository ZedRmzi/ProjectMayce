/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        PassionsConflict: ['Passions Conflict', 'cursive'],
        Noto: ['Noto Sans', 'sans-serif']
      },
    },
    screens: {
      'xs': '350px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
