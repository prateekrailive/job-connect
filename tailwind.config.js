/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vk: {
          blue: '#0077FF',
          hover: '#0066CC',
          light: '#E5F0FF',
          bg: '#EDEEF0',
        }
      },
      boxShadow: {
        'vk': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'vk-hover': '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};