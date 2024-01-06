module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1440px'
    },
    extend: {
      backgroundImage:{
        'footer-background': 'url(../images/lastpart.png)',
      },
      colors:{
        'brightRed': 'hsl(0, 93%, 59%)',
        'brightRedLight': 'hsl(12, 88%, 69%)',
        'lightRed': 'hsl(0, 44%, 64%)',
        'darkRed': 'hsl(0, 43%, 48%)',
        'red-news': 'hsl(0, 75%, 75%)',
        'pinkish-red': 'hsl(0, 92%, 95%)',
        'pinkishDarkRed': 'hsl(0, 75%, 75%)',
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'ruda': ['Ruda', 'sans-serif'],
        'rosario': ['Rosario', 'sans-serif'],
        'm-plus-code': ['M PLUS 1 Code', 'monospace'],
        'marcellus': ['Marcellus SC', 'serif'],
      }
    },
  },
  plugins: [],
}

