/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
        'hdPrimary': '#2C6975',
        'hdSecondary': '#68B2A0',
        'hdTertiry': '#CDE0C9',
        'hdFortery': '#E0ECDE',
    }
  },
  plugins: [],
}
