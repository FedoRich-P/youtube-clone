import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: '#ff49db',
        purple: '#7e5bef',
        blue: '#1fb6ff',
      },
      boxShadow: {
        red: '0 0 10px rgba(255, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;