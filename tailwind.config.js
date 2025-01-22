/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "0",
        md: "4%",
        lg: "6%",
        xl: "8%",
        "2xl": "10%",
      },
    },
    extend: {
      backgroundImage: {
        "mobile-app":
          "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')",
      },
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
        "gray-storm": "#697488",
      },
    },
  },
  plugins: [],
};
