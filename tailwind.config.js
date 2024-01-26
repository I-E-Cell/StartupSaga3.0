/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["inter", "sans-serif"],
        titleFont: ["texas"],
      },
      screens: {
        xs: { max: "480px" },
      },
    },
  },
  plugins: [],
};
