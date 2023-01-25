/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      navlinkPrimaryColor: "#afafaf",
      movieHubWhite: "#ffffff",
      navbarBlack: "#161616",
      backgroundBlack: "#0D0D0F",
      buttonGreen: "#00CE79",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
