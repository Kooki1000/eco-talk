const colors = require('./src/components/obytes/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
    },
    colors: {
      ivory: '#D8E7DD',
      silver: '#F1D9D9',
      beige: '#FAE8DB',
      green: '#4F9467',
      pink: '#F9B5B5',
      orange: '#FCA363',
      brown: '#19552E',
      turquoise: '#0BAE9D',
      emerald: '#C6DEB8',
      peach: '#FBEABE',
      opal: 'BED8D8',
    },
  },
  plugins: [],
};
