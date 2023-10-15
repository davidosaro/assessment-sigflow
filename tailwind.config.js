
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['manrope', ...fontFamily.sans],
        secondary: ['Inter', ...fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: '#101828',
          50: '#D0D5DD',
          100: '#667085',
          200: '#34373F'

        },
        grey: {
          300: '#828282',
          100: 'rgba(24, 24, 27, 0.05)',
          50: 'rgba(250, 250, 250, 0.40)',
          200: '#E6E7EC',
          400: '#F5F5F5',
          500: '#E0E0E0'
        },
        success: {
          DEFAULT: '#32D583',
          50: '#ECFDF3'
        },
        red: {
          600: '#AF202D'
        }
      }
    },
  },
  plugins: [],
}

