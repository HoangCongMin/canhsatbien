// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    theme: {
      extend: {
        colors: {
          orange: '#ee4d2d',
          bgorange: 'rgb(255 247 237)',
          bgWhite: 'rgba(255, 255, 255, 0.04)'
        },
        boxShadow: {
          '3xl': '0 0.0625rem 20px 0 rgb(0 0 0 / 5%)'
        }
      },
      fontFamily: {
        Roboto: ['Roboto']
      }
    }
  },
  plugins: []
}
