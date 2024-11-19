/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Inclui arquivos HTML e JS na pasta src e subpastas
    "./index.html"   // Inclui seu arquivo HTML principal
  ],
  theme: {
    fontFamily:{
      'sans': ['Oswald', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')" // Adiciona sua imagem de fundo personalizada
      }
    },
  },
  plugins: [],
};
