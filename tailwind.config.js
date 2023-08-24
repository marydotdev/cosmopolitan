/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 0.4s ease-in-out 1',
        web: 'web 0.4s ease-in-out infinite',
        wiggle: 'wiggle 1.5s ease-in-out 1'
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

          '0%': { transform: 'rotate( 0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },  /* The following five values can be played with to make the waving more or less extreme */
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },  /* Reset for the last half to pause */
          '100%': { transform: 'rotate( 0.0deg)' }
        }
      }
    }
  },
  plugins: []
};
