/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screen:{
      sm:'488px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        initialColor:'#bc3fea',
        bgColor:'#030710',
        dangerRed:'rgb(216, 0, 0)',
        appWallet:'#0066b2'
        
      },
    },
  },
  plugins: [],
}
