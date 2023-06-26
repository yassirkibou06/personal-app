/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      //put your font and go to styles/globals.css to change the link of your font
      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif'],
      },
      // change your color (!dont change name of color ex: 'pry-gray')
      colors: {
        'pry-gray': '#dedede',
        'pry-brown': '#E0B784',
        'pry-bleu': '#58CEDF',
        'scnd-gray': '#d0d0d0',
        'fs-black': '#000000cc'
      }
    },
  },
  plugins: [],
}