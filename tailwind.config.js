/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
}
