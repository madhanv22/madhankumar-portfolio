/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderColor: {
        'primary' : 'rgb(48, 25, 180)'
      }
    },
    fontFamily: {
      'hero-font':'Sriracha'
    },
  },
  plugins: [],
}

