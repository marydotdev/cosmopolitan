/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 0.4s ease-in-out 1',
        web: 'web 0.4s ease-in-out infinite',
        wiggle: 'wiggle 0.4s ease-in-out infinite'
      },
      fontFamily: {
        wb: ['Whirly Birdie'],
        wbat: ['Whirlybats'],
      },
      keyframes: {
        web: {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      }
    }
  },
  plugins: []
};
