/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pnk":"hsl(322, 100%, 66%)",
        "lpnk":"hsl(321, 100%, 78%)",
        "lr":'hsl(0, 100%, 63%)',
        "vdc":"hsl(192, 100%, 9%)",
        "vpb":"hsl(207, 100%, 98%)"
      },
    },
  },
  plugins: [],
}