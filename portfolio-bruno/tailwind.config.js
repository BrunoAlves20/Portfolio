/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#000000',      /* Fundo totalmente preto da referência */
        darkGray: '#333333',    /* Cinza escuro */
        midGray: '#646464',     /* Cinza médio */
        lightGray: '#A7A7A7',   /* Cinza claro para textos secundários */
        offWhite: '#F9F9F9',    /* Branco quebrado para textos principais */
        brandOrange: '#E85002', /* O laranja principal */
        brandRed: '#C10801',    /* O vermelho do gradiente */
      },
      fontFamily: {
        // Já deixando preparado para quando você escolher a fonte no Google Fonts
        sans: ['Poppins', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}