/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}', // File dalam folder src
    './*.html', // Tambahkan jalur file HTML di luar folder src
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
      colors : {
        "coklattua": '#1f1810',
        "kuning": '#ffad31',
    }
    },
  },
  plugins: [],
}


