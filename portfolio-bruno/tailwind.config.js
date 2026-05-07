/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0b0c10',
        cardBg: '#1f2833',
        textPrimary: '#ffffff',
        textSecondary: '#c5c6c7',
        accent: '#45a29e',
        accentHover: '#66fcf1',
      }
    },
  },
  plugins: [],
}