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
        "2xDark":"#1D1D22",
        "pDark-soft" :"rgb(184, 173, 210)",
        "chartDark" :"rgba(39, 38, 44, 0.5)",
        "basicBg" :"rgba(31, 199, 212, 0.06)"
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
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}
