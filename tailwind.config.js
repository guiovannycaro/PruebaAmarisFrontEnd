/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],

  theme: {
    extend: {
      colors: {

        'primary': 'var(--primary)',
    'secondary': 'var(--secondary)',
    'label': 'var(--labels)',

bg: '#F5F7FB',

          'blue-linktic': 'var(--primary)',
    'blue-intense': 'var(--secondary)',
    'gray-texts': '#505050',

    'redtrigger': '#FFDFDF',
    'redbordertrigger': '#EA0000',
    'gray-sky': '#EAECF0',
    'blue-fondo': '#F2FDF1',
    'blue-light': '#E0F3FEB2',
    'background': '#F5F7FB',
    'blue-lighter': '#E0F3FE',
    'blue': '#006FB0',
      }
    }
  },
  plugins: [],
}

