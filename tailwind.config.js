/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: "#121212",
    },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      }
  },
},
  variants: {
    extend: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
}