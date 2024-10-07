/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        autofillBg:  'rgb(0 ,0 ,0)',
        autofillText: 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: [],
}