const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      letterSpacing: {
        widest: "0.013em",
      },
      fontSize: {
        xxs: "0.68rem",
      },
      backgroundImage: {
        "split-blue-orange":
          "linear-gradient(to right, #2e4396 70% , #f5b23e 30%);",
        "hero-pattern": "url('/images/bg.jpg');",
      },
      width: {
        557: "34.813rem",
        448: "31rem",
        468: "29.25rem",
        270: "17rem",
        400: "25rem",
        260: "16rem",
        314: "19.6rem",
        365: "22rem",
      },
      boxShadow: {
        "3xl": " 0 2px 23px 0 rgba(0, 0, 0, 0.07)",
      },
      maxWidth: {
        12: "30rem",
        15: "19rem",
        112: "52rem",
        120: "75rem",
        790: "49.4rem",
        870: "55rem",
        666: "41.6rem",
        1400: "87.5rem",
      },

      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        blogger: ["BloggerSans", "sans-serif"],
      },

      spacing: {
        72: "18rem",
        84: "21rem",
        96: "25rem",
        98: "32rem",
        100: "40rem",
        12: "52rem",

        112: "97rem",
      },
      colors: {
        border: "#cdcdcd",
        grayBlack: "#303030",
        rose: "#d01662",
        logo: "#2e4396",
        orange: "#f5b23e",
        gray: "#f5f5f5",
        white: "#ffffff",
        darkGray: "#707070",
        sv: "#9b9b9b",
        dark: "#404040",
        darkblack: "#3f3f3f",
        light: "#f1f1f1",
        newGreen: "#5aba31",
        line: "#a19d9d",
        text: "#545454",
        newgray: "#f2f2f2",
        lgreen: "#4aaf53",
        lblack: "#363636",
        lgr: "#777777",
        newBlue: "#4a90e2",
      },
    },
  },
  variants: {},
  plugins: [],
};
