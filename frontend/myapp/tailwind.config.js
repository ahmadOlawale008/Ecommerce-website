/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#2f3e46",
          primaryLight: "77746D",
          customPrimary: "#403D39",
          secondary: "#EB5E28",
          secondaryDark: "#983B17",
        },
      },
      fontFamily: {
        sans: ["Reddit Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        custom: ["Roboto Mono", "monospace"],
        cursive: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
