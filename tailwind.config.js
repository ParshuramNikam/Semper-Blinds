const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'lightGreen': '#ebf1db',
        'lightBlue': '#dfebf8',
        'green': '#aac238',
        'blue': '#163760',
        'darkGreen': '#7e993c',
        'darkBlue': '#122a50',
      },
    },
  },
  plugins: [],
}

