/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

