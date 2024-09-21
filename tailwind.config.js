/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderColor: {
        'primary': 'rgb(48, 25, 180)',
      },
      minHeight: {
        'screen': '100vh',
      },
      spacing: {
        '15': '60px',
      },
      fontFamily: {
        'hero-font': ['Sriracha', 'cursive'], 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'), 
  ],
}
