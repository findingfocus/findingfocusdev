/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './src/**/*.{html,js,svelte,ts}',
    'node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#9333EA', // Custom secondary color
        navbarBg: '#4D5578', // Custom navbar background color
        navbarBgDark: '#1F2336', // Custom navbar background color for dark mode
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

