module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows:{
        'nav': 'auto 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}