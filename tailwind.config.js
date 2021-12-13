module.exports = {
  purge: ["./src/**/*.js"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
        mrDafoe: ["Mr Dafoe", "serif"],
      },
      colors: {
        jsdYellow: "#d5ba2e",
        jsdPurple: "#7c1d5f",
      },
    },
  },
};
