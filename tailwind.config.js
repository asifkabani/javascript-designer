module.exports = {
  purge: ['./src/**/*.js'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif'],
        mrDafoe: ['Mr Dafoe', 'serif'],
        inter: ['Inter, sans-serif'],
      },
      colors: {
        jsdYellow: '#d5ba2e',
        jsdPurple: '#7c1d5f',
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
}
