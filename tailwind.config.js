/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pantone': '#6667AB',
      },
    },
  },
  darkMode: "media", // class
  plugins: [require("@tailwindcss/forms")],
}