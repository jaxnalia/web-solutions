/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',    // Blue-600
        secondary: '#1D4ED8',  // Blue-700
        dark: {
          50: '#1A1A1A',
          100: '#262626',
          200: '#333333',
          300: '#404040',
          400: '#4D4D4D',
          500: '#666666',
          600: '#808080',
          700: '#999999',
          800: '#B3B3B3',
          900: '#CCCCCC',
        }
      }
    },
  },
  plugins: [],
}