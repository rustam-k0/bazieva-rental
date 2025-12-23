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
          50: '#f2f9f5',
          100: '#e1f3e8',
          200: '#c3e8d3',
          300: '#94d5b3',
          400: '#5ab88b',
          500: '#359f6c',
          600: '#268053',
          700: '#216644', // Rich Circassian Green
          800: '#1e523a',
          900: '#004d2e', // Deepest Base
          950: '#0d2e21',
        },
        accent: {
          50: '#fbf8f1',
          100: '#f5eede',
          200: '#ebdbbc',
          300: '#dec28f',
          400: '#d0a968',
          500: '#c59048',
          600: '#aa7239',
          700: '#8d5630',
          800: '#73442a',
          900: '#5e3825',
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