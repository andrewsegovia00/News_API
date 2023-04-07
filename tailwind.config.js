
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontSize: {
        xs: "8px"
      },
      colors: {
        primary: "#050816",
        secondary: "#071427",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "grey-400": "#9e9fa4",
        "blue-900": "#071427",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        'galaxy-pattern': "url('/src/assets/galaxy.png')"
      },
    },
  },
  plugins: [],
};

