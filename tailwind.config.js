/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB', // Blue-600 as primary color
        'primary-dark': '#1D4ED8', // Blue-700 for hover states
        'primary-light': '#3B82F6', // Blue-500 for lighter variants
        'secondary': '#0F172A', // Slate-900 for secondary/black color
      },
    },
  },
  plugins: [],
};