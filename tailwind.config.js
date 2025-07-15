/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1400px',
      '2xl': '1700px',
    },
    extend: {
      fontFamily: {
        // Custom fonts will be added here
      },
      colors: {
        'quibo-text': '#695557',
        'quibo-border': '#ddf861',
        'quibo-bg': '#f2edf0',
        'quibo-green-dark': '#2b4a44',
        'quibo-green-light': '#d9f4a5',
      },
    },
  },
  plugins: [],
}
