/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          light: '#F5E6D3',
          DEFAULT: '#6F4E37',
          dark: '#4A2C1A',
        },
        'seattle': {
          gray: '#4A4A4A',
          blue: '#2B5F75',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 