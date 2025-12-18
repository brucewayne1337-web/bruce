/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0b0b0d',
        gold: {
          DEFAULT: '#d4af37',
          soft: '#c9a23a',
        },
        neon: '#00f0ff',
        ruby: '#c81e1e'
      },
      boxShadow: {
        lux: '0 8px 30px rgba(0,0,0,0.45)'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Arial', 'sans-serif']
      }
    }
  }
}
