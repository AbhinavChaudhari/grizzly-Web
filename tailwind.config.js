/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'normal': "2.5rem",
        'large': "2.75rem",
        'xlarge': "3.75rem"
      },
      
      lineHeight : {
        large: "3.25rem",
        xlarge: "3.75rem"
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },      

      colors:{
        primary: "#212A34",
        secondary: "#11B2A8",
        borderColor: "#BDBDBD"
      },

      fontFamily: {
        neue: ["Neue Haas Unica Pro"]
      },
      fontWeight:{
        neue: 500,
        bold: 950
      },
      
    },

   

    container: {
      // you can configure the container to be centered
      center: true,


      // default breakpoints but with 40px removed
      screens: {
        md: '727px',
        lg: '984px',
        xl: '1140px',
      },
    },


  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
