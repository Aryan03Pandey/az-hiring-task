/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: '#172B4D',
        primaryActive: '#D6F4FF',
        secondaryActive: '#EFF5FF',
        secondaryGradient: 'linear-gradient(180deg, rgba(239,245,255,1) 0%, rgba(255,255,255,1) 100%)',
        secondaryText: '#17384D',
        secondaryActiveText: '#608AD2',
        bgSecondary: '#E7F8FF',
        activeText: '#172B4D',
        border: '#A4E6FF'
      },
      boxShadow: {
        'custom-light': '0 4px 10px 0px rgba(23, 43, 77, 0.1)',
      },
    },
  },
  plugins: [],
}

