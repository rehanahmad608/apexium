/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      body: '#acacac',
      'body-light': '#65676b',
      'dark-1': 'rgb(6,6,6)',
      'dark-2': 'rgba(6,6,6,0.7)',
      'dark-3': 'hsla(0,0%,100%,0.1)',
      'dark-4': '#0f0f11',
      'light-1': '#f5f8fa',
      'light-2': '#d8d8d8',
      border: 'hsla(0,0%,100%,0.1)',
      'main-1': '#059dff',
      'main-2': '#fb5343',
      'main-3': '#6549d5',
      'main-4': '#e33fa1',
      danger: '#dc2626',
    },
  },
  darkMode: 'class',
  plugins: [],
};
