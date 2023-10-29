module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        'brightRed': 'hsl(0, 93%, 59%)',
        'brightRedLight': 'hsl(12, 88%, 69%)',
        'lightRed': 'hsl(0, 44%, 64%)',
        'darkRed': 'hsl(0, 43%, 48%)',
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'ruda': ['Ruda', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

