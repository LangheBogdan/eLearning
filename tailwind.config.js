/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Lato", "ui-sans-serif"],
      serif: ["Arvo", "ui-serif"],
    },

    extend: {
      colors: {
        deppressedElephant: "#666CA3",
        blueSky: "#13183F",
        yerg: "#83869A",
        btn2IdleStart: "#FF6F48",
        btn2IdleEnd: "#F02AA6",
        sectionGradientEnd: "#F0F1FF",
        sectionGradientStart: "#FFF",
        btn3IdleStart: "#4851FF",
        btn3IdleEnd: "#F02AA6",
      },
    },
  },
  plugins: [],
};
