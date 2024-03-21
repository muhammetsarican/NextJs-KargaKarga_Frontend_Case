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
      }
    },
    fontFamily:{
      'nunito': 'Nunito, sans-serif'
    }
  },
  plugins: [],
}

