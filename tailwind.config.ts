import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'aeonik': ['Aeonik', 'sans-serif'],
        'sans': ['Aeonik', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#000000',
          light: '#fbfbfb',
          accent: '#ed786a',
          'dark-lighter': '#1a1a1a',
          'accent-light': '#f29b8f',
          'accent-dark': '#d85a4a',
        },
        'pastel-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
    },
  },
  plugins: [],
};

export default config;

