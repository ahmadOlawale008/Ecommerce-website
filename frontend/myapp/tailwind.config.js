/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#252422",
          light: "#43413e",
          dark: "#0d0d0c",
        },
        secondary: {
          DEFAULT: "#EB5E28",
          light: "#f45a16",
          dark: "#e34d0b",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Calbri", "Arial", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        monospace: ["Inconsolata", "monospace"],
        cursive: ["Great Vibes", "cursive"],
        custom: ["Roboto", "sans-serif"],
      },
    },
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [],
  // },
};
