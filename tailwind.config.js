/** @type {import('tailwindcss').Config} */
import form from '@tailwindcss/form'
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

