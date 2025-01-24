/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ["Montserrat", 'sans-mono'],
        'title': ["Orbitron", 'sans-mono'],
        'regular': ["Poppins", 'sans-mono'],
      },
      colors: {
        'balck': "#000000",
        'white': "#ffffff",
        "red": "#bb1e2c",
        "primaryColor": "#1e1e1e",
        "lightBg": "#f3f4f6"
      },
      boxShadow: {
        '3xl': '0px 0px 6px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

