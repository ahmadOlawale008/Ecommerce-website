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
        sans: ["Lato", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        custom: ["Roboto Mono", "monospace"],
        cursive: ["Caveat", "cursive"],
        mono: ["adapter-mono-pe-variable", "sans-serif"],
        monospace: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [],
  // },
};
