/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss')


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        "logo":"#145389",
        "short-sidebar": "#363F72"
      }
    },
    fontFamily:{
      'poppins': 'Poppins, sans-serif',
      'futura':'Futura, sans-serif',
      'josefin': 'josefin-sans, sans-serif'
    }
  },
  plugins: [
    plugin(function({addComponents}){
      addComponents({
        '.all-center':{
          justifyItems:'center',
          alignItems:'center'
        }
      })
    })
  ],
}

