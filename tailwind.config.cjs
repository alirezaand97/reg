/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f3f9fe",
          200: "#1D59A4",
          300: "#004871",
        },
      },
      fontFamily: {
        yekan: "YekanBakh",
        yekanMedium: "YekanBakhMedium",
        yekanBold: "YekanBakhBold",
      },
    },
  },
  plugins: [],
};
