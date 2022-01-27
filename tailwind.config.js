const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: ["dark"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/gradient.svg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: {
          "brand-01": "#000308",
          "brand-02": "#1C1C1C",
          "brand-03": "#ffffff40",
          "brand-04": "#1f1f1f",
          "brand-05": "#202022",
          "brand-06": "#30363D",
          "brand-07": "rgba(255, 255, 255, 0.12)",
          "brand-08": "#0D1117",
          "brand-smoke": "rgba(0, 0, 0, 0.78)",
          "brand-09": "#0b0b0f",
          "brand-10": "#12100E",
          "brand-11": "#2B4162",
        },
        blue: {
          "brand-01": "#168FFF",
          "brand-tag": "#2196f3",
          "brand-02": "#0E5FB0",
        },
        green: {
          "brand-01": "#3fd080",
          "brand-02": "#20BF55",
          "brand-03": "#01BAEF",
        },
        gray: {
          "brand-01": "#b3b3b3",
          "brand-02": "#8B949E",
          "brand-03": "#181921",
          "brand-04": "#1e1f27",
        },
        brown: {
          "brand-01": "#453A49",
        },
      },
      keyframes: {
        rubber_band: {
          "0%": {
            transform: "scale3d(1, 1, 1)",
          },
          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },
          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },
          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },
          "65%": {
            transform: "scale3d(.95, 1.05, 1)",
          },
          "75%": {
            transform: "scale3d(1.05, .95, 1)",
          },
          "100%": {
            transform: "scale3d(1, 1, 1)",
          },
        },
      },
      animation: {
        rubber: "rubber_band 1s",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
