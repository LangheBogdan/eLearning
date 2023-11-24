/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "ui-sans-serif"],
      serif: ["Arvo", "ui-serif"],
    },
    colors: {
      deppressedElephant: "#666CA3",
      blueSky: "#13183F",
    },
    extend: {},
  },
  plugins: [],
};
