/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js, jsx}',
    './components/**/*.{js, jsx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
        colors: {
            dark: '#292929',
            light: '#dfdfdf'
        }
    },
  },
  plugins: [],
}

