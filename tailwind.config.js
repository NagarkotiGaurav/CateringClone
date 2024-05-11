/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  mode: "jit",
  theme: {
    extend: {
      listStyleImage: {
        check: 'url("assets/icons/check-solid.svg")',
      },
    },
  },
  plugins: [],
}

