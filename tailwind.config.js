/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#5267df',
        red: '#fa5959',
        dark: '#242a45',
        gray: '#9194a2',
      },
    },
  },
  plugins: [],
}
