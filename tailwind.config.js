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
        'satoshi': ['Satoshi', 'system-ui', 'sans-serif'],
        'shipori': ['Shipori Mincho', 'serif'],
        'sans': ['Satoshi', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'quibo-xl': '2.96rem',    // 80/27 - Main headings
        'quibo-lg': '2.22rem',    // 60/27 - Large headings
        'quibo-md': '1.63rem',    // 44/27 - Medium headings
        'quibo-sm': '1.30rem',    // 35/27 - Small headings/body
        'quibo-xs': '0.78rem',    // 21/27 - Small text/labels
      },
      colors: {
        'quibo-text': '#695557',
        'quibo-border': '#ddf861',
        'quibo-bg': '#f2edf0',
        'quibo-green-dark': '#2b4a44',
        'quibo-green-light': '#d9f4a5',
        'quibo-gray-light': '#f3f3f3',
        'quibo-input-bg': '#59494c',
      },
    },
  },
  plugins: [],
}
