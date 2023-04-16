/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "comic-sans": ['"Comic Sans MS"', "cursive"],
        "times-new-roman": ['"Times New Roman"', "serif"],
      },
    },
  },
  plugins: [],
};
