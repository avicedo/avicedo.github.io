/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./public/**/*.{html,js}',
             "./node_modules/tw-elements/dist/js/**/*.js",],
  },

  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },

      fontFamily: {
        instrument: ['Instrument Sans'],
        neuemontrealbook:['Neue Montreal Book'],
        neuemontrealmedium:['Neue Montreal Medium'],
        editorialnewregular:['Editorial New Regular'],
        editorialnewultra:['Editorial New Ultralight'],
        editorialnewultrait:['Editorial New Ultralight Italic'],
      }
    },
  },

  plugins: [
    require('taos/plugin'),
    require('@tailwindcss/forms'),
    require("tw-elements/dist/plugin.cjs"),
  ],

  darkMode: "class",

  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}