/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite', // Adds the animate-blink class
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 }, // Fully visible at start and end
          '50%': { opacity: 0.5 },    // Dimmed in the middle
        },
      },
    },
    scale: {
      '90': '.9', // Add a custom scale value of 90%
    },
  },
  plugins: [],
};
