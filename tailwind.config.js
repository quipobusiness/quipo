/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Custom fonts will be added here
      },
      colors: {
        'quibo-text': '#695557',
        'quibo-border': '#ddf861',
        'quibo-bg': '#f2edf0',
      },
    },
  },
  plugins: [],
}
