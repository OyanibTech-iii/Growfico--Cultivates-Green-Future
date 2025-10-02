/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./templates/**/*.twig", 
    "./assets/**/*.{js,ts,vue}", 
  ],
  theme: {
    extend: {
      colors: {
        "dark-forest-green": "#094021",
        "bright-green": "#03A64A",
        "light-gray": "#6A7F74",
        "background": "#F7FAFC",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        base: ["0.75rem", { lineHeight: "1rem" }], 
        heading: ["1rem", { lineHeight: "1.5rem" }], 
      },
      fontWeight: {
        semibold: "600",
      },
    },
  },
  plugins: [],
};