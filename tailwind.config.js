/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/**/*.html",
    "./admin/**/*.html",
    "./admin/js/**/*.js",
    "./assets/js/**/*.js"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Emerald Green base
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          500: '#f59e0b', // Amber
          600: '#d97706',
        },
        accent: {
          500: '#0ea5e9', // Sky Blue
          600: '#0284c7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(16, 185, 129, 0.1)',
        'premium-hover': '0 25px 50px -12px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}

