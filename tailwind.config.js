/** @type {import('tailwindcss').Config} */
module.exports = {
 mode: 'jit',
 purge: [
 './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
 ],
 theme: {
 extend: {
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
 }
 },
 variants: {},
 plugins: []
}
