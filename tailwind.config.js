/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        red: { DEFAULT: '#e63329', light: '#ff4d42', dark: '#c0251c', soft: 'rgba(230,51,41,0.08)' },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
