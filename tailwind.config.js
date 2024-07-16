/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#282A36',
        accent: '#FF79C6',
        customwhite: '#FFC90E'
      },
    },
  },
  plugins: [],
}

