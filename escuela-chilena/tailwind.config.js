/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colegio: {
          rojo: '#C41E3A',
          rojoOscuro: '#8B0000',
          amarillo: '#FFD700',
          amarilloClaro: '#FFF8DC',
          blanco: '#FFFFFF',
          gris: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
