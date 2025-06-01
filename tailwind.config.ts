import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {      
      fontFamily: {
        sans: ['"neue-haas-grotesk-display"', 'sans-serif'],
        serif: ['"the-seasons"', 'serif'],
      },},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-children'),
    require('tailwind-scrollbar'),
    require('tailwindcss-fluid-type'),
  ],
};
export default config;
