/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
