/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        phone: "300px",
        ipad: "500px",
        md: "900px",
        lg: "1200px",
        "2xl": "1400px",
        "3xl": "1700px",
        "4xl": "1900px",
        "5xl": "2400px",
      },
    },
  },
  plugins: [],
};
