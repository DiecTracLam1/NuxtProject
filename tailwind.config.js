/** @type {import('tailwindcss').Config} */
console.log("input config");
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./assets/**/antd.css",
    "./assets/**/index.css",
  ],

  safelist: [
    {
      pattern: /bg-(grey|green|blue|black)-(100|500)/,
    },
  ],

  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1092px",
      xl: "1280px",
    },

    extend: {
      fontSize: {
        normal: [
          "15px",
          {
            lineHeight: "18px",
          },
        ],
      },
      margin: {
        marginTop: "84px",
      },

      height: {
        headerHeight: "84px",
      },
      spacing: {
        7.5: "30px",
      },
      colors: {
        "blur-grey": "#afaeb3",
        "primary-color": "var(--primary-color)",
        "normal-color": "#3d3d3d",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
  important: true,
};
