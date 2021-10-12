const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
      './frontend/**/*.vue',
  ],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          sky: colors.sky,
          cyan: colors.cyan,
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
