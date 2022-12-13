const { withRouter } = require('next/router');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: 'url("/src/public/nlw.png")'
      }
    },
    colors: {
      background: '#121214',
      textColor: '#ffff',
      purple: '#611bbc'
    }, 
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}