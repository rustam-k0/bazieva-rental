/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d9ff',
          300: '#9dbaff',
          400: '#6b91ff',
          500: '#009fe3', // Cerulean Blue
          600: '#006ce6',
          700: '#003580', // Resolution Blue (Booking.com Primary)
          800: '#002966',
          900: '#001f4c',
          950: '#001333',
        },
        accent: {
          50: '#fffbea',
          100: '#fff1c5',
          200: '#ffe385',
          300: '#ffd046',
          400: '#ffbf1b',
          500: '#feba02', // Selective Yellow (Booking.com Accent)
          600: '#e2a000',
          700: '#bb7b00',
          800: '#976100',
          900: '#7c5000',
        }
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}