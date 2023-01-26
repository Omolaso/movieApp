/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "580px",
      md: "768px",
      lg: "1000px",
      xl: "1280px",
      "2xl": "1400px",
    },
    colors: {
      navlinkPrimaryColor: "#afafaf",
      movieHubWhite: "#ffffff",
      navbarBlack: "#161616",
      backgroundBlack: "#0D0D0F",
      buttonGreen: "#00CE79",
      buttonBlue: "#0D6EFD",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
