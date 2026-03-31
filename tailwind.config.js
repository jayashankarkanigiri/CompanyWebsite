/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#520206',
        'light-red': '#8b1e24',
        'navy-blue': '#130142',
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(135deg, #520206 0%, #130142 100%)',
      },
      animation: {
        'smoke': 'smoke 20s ease-in-out infinite',
      },
      keyframes: {
        smoke: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.3',
          },
          '25%': {
            transform: 'translate(-20px, -10px) scale(1.05)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'translate(20px, -20px) scale(1.1)',
            opacity: '0.3',
          },
          '75%': {
            transform: 'translate(-10px, 20px) scale(1.05)',
            opacity: '0.4',
          },
        },
      },
    },
  },
  plugins: [],
}
