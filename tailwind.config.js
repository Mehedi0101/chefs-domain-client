/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#FF6B6B',
        'dark1': '#3e3930',
        'dark2': '#776f60',
        'dark3': '#bdb5aa'
      },
    },
  },
  plugins: [require("daisyui")],
}