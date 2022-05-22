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
        "16px": "16px",
      },
      height: {
        "40px": "40px",
        "32px": "32px",
        "16px": "16px",
      },
      minWidth: {
        "1/4": "28%",
        "1/5": "20%",
        "6rem": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1536px",
      },
      colors: {
        "astro-black": "rgb(51, 51, 51)",
        "modal-black": "rgb(0, 0, 0,0.9)",
        "astro-pink": "rgb(230, 0, 125)",
      },
    },
  },
  plugins: [],
};
