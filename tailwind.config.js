module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "astro-header":
          "linear-gradient(to right bottom, rgb(230, 0, 125), rgb(231, 38, 71))",
      },
      boxShadow: {
        astro: "0 0 6px 0 rgb(0 0 0 / 20%)",
      },
      width: {
        "72px": "72px",
        "76px": "76px",
      },
      height: {
        "40px": "40px",
        "32px": "32px",
      },
      minWidth: {
        "1/3": "33%",
      },
    },
  },
  plugins: [],
};
