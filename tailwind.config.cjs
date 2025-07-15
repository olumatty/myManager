const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-archivo)', ...defaultTheme.fontFamily.sans],
        body: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primarytext: "#303030",
      },
      backgroundImage: {
        PrimaryBtn: "#39383f",
        SecondaryBtn: "#855fff",
      },
    },
  },
  plugins: [],
};
