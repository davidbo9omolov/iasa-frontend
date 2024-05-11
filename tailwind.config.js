/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#FFF',
        tertiary: '#FFD200',
        quaternary: '#282828',

        cursor:'rgba(25, 25, 25, .4)'
      },
      backgroundImage:{
        blackGradient:'linear-gradient(0deg, rgba(0,0,0,0.9514399509803921) 0%, rgba(255,255,255,0) 100%)',
        sliderCardGradient:'linear-gradient(90deg, rgba(251,146,60,1) 0%, rgba(247,68,0,1) 100%)'
      },
      textColor: {
        primary: '#000',
        secondary: '#FFF',
        tertiary: '#FFD200',
        quaternary: '#282828',

        //   text-gray
        gray: '#C6C6C6',
      },
      borderColor: {
        primary: '#000',
        secondary: '#FFF',
        tertiary: '#FFD200',
        quaternary: '#282828',
        thin: '#4B4B4B',
      },
      transitionTimingFunction:{
        'cursor-transition':'cubic-bezier(.215,.61,.355,1)'
      }
    },
  },
  plugins: [],
}
