/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
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
        normal: ["15px" , {
          lineHeight : '18px'
        }],
      },

      spacing: {
        7.5: "30px",
      },
      colors: {
        "blur-grey": "#afaeb3",
        "primary-color": "var(--primary-color)",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        7: "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
