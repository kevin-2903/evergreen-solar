/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#12372A',
          50: '#eef3f0',
          100: '#d7e3dc',
          200: '#aec7b9',
          300: '#7e9d8a',
          400: '#507760',
          500: '#345b46',
          600: '#234836',
          700: '#12372A',
          800: '#0d2a20',
          900: '#081d15',
        },
        ivory: {
          DEFAULT: '#F5F2E9',
          50: '#fdfcf8',
          100: '#F5F2E9',
          200: '#ebe7d7',
          300: '#ddd7c0',
          400: '#c9c2a3',
        },
        gold: {
          DEFAULT: '#D9A441',
          50: '#fbf3e0',
          100: '#f5e5bf',
          200: '#ecd08a',
          300: '#e0bb5e',
          400: '#D9A441',
          500: '#c4922f',
          600: '#a37723',
          700: '#7e5b1e',
          800: '#5e441b',
          900: '#45321a',
        },
        charcoal: {
          DEFAULT: '#111815',
          600: '#2a322d',
          700: '#1d2521',
          800: '#111815',
          900: '#0a0f0d',
        },
        sage: {
          DEFAULT: '#718574',
          400: '#8ea092',
          500: '#718574',
          600: '#5a6c5e',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
        wide: '1600px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        label: '0.16em',
      },
      boxShadow: {
        soft: '0 2px 20px -6px rgba(18, 55, 42, 0.1)',
        card: '0 8px 40px -12px rgba(18, 55, 42, 0.15)',
        line: '0 1px 0 0 rgba(18, 55, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
