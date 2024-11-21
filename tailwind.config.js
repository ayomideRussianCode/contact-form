/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Manrope', 'serif'],
      }
    },
    colors: {
      green1: "hsl(148, 38%, 91%)",
      green: "hsl(169, 82%, 27%)",
      red: "hsl(0, 66%, 54%)",
      white: "hsl(0, 0%, 100%)",
      gray1: "hsl(186, 15%, 59%)",
      gray: "hsl(187, 24%, 22%)",
    },
  },
  plugins: [],
};
