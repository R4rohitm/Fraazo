/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      animation: {
        bounce2: "bounce 3s linear",
      },
    },
  },
  plugins: [],
};
