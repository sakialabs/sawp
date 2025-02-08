/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sudan-red': 'var(--color-sudan-red)',
        'sudan-white': 'var(--color-sudan-white)',
        'sudan-black': 'var(--color-sudan-black)',
        'sudan-green': 'var(--color-sudan-green)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

