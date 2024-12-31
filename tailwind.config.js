/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate3d: 'rotate3d 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite',
        spinReverseFast: 'spinReverseFast 1.2s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        rotate3d: {
          '0%': { transform: 'rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'rotate3d(1, 1, 1, 360deg)' },
        },
        spinReverseFast: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      perspective: {
        1000: '1000px',
      },
      fontFamily: {
        sans: ['TT Commons', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


