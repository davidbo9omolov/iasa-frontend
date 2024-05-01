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
    },
  },
  plugins: [],
}
