/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "pSoft-text":"rgb(122, 110, 170)",
        "pActive-text":"rgb(118, 69, 217)",
        "pBlue" : "rgb(31, 199, 212)",
        "pDark" : "rgb(40, 13, 95)",
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      
      'xl': {'max': '1279px'},
      
      'lg': {'max': '1023px'},
    
      'md': {'max': '767px'},
      
      'sm': {'max': '639px'},
      
      '2sm': {'max': '488px'},
      
    }
   
  },
  plugins: [],
}
