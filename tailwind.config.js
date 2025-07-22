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
      'xl': '1500px',
      '2xl': '1800px',
    },
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'system-ui', 'sans-serif'],
        'shipori': ['Shipori Mincho', 'serif'],
        'sans': ['Satoshi', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'quibo-xl': '3.33rem',    // 90/27 - Main headings
        'quibo-lg': '2.59rem',    // 70/27 - Large headings
        'quibo-md': '1.85rem',    // 50/27 - Medium headings
        'quibo-sm': '1.48rem',    // 40/27 - Small headings/body
        'quibo-xs': '0.93rem',    // 25/27 - Small text/labels
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
