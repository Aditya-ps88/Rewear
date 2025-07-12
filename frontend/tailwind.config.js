/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'eco': {
          cream: '#F9F4EC',
          'green-primary': '#6A8A5E',
          'green-secondary': '#8BA987',
          tan: '#D8C3A5',
          brown: '#5D3E2F',
        }
      },
      fontFamily: {
        'sans': ['Nunito', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }
    },
  },
  plugins: [],
};