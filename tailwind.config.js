/** @type {import('tailwindcss').Config} */
module.exports = {
 mode: 'jit',
 purge: [
 './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
 ],
 theme: {
 extend: {
  screens: {
    'cel': '320px',
    'xxl': '1440px',
  },
  backgroundImage: {
    'bg-image': "URL('./src/assets/images/mangasHero.png')"
  }
 }
 },
 variants: {},
 plugins: []
}

