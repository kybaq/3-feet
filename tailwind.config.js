/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "primary-blue": "#005BAC",
      "secondary-color": "#FFBF00",
      white: "#ffffff",
      black: {
        default: "#121212",
        100: "#F4F2F2",
        200: "#E9E5E6",
        300: "#BFB9BB",
        400: "#7F7A7C",
        500: "#2A2829",
        600: "#241D21",
        700: "#1E141B",
        800: "#180C16",
        900: "#140712",
      },
      blue: {
        100: "#D6E4FF",
        200: "#ADC8FF",
        300: "#84A9FF",
        400: "#6690FF",
        500: "#3366FF",
        600: "#254EDB",
        700: "#1939B7",
        800: "#102693",
        900: "#091A7A",
      },
    },
  },

  plugins: [],
};
