/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'uchicago-maroon': '#800000',
        'uchicago-light-greystone': '#D9D9D9',
        'uchicago-greystone': '#A6A6A6',
        'uchicago-dark-gray': '#222222',
        'uchicago-off-black': '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-gotham)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        serif: ['var(--font-eb-garamond)', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-outline-white': {
          textShadow: `-1px -1px 0 ${theme('colors.white')}, 1px -1px 0 ${theme('colors.white')}, -1px 1px 0 ${theme('colors.white')}, 1px 1px 0 ${theme('colors.white')}`
        },
        '.text-outline-light-greystone': {
          textShadow: `-1px -1px 0 ${theme('colors.uchicago-light-greystone')}, 1px -1px 0 ${theme('colors.uchicago-light-greystone')}, -1px 1px 0 ${theme('colors.uchicago-light-greystone')}, 1px 1px 0 ${theme('colors.uchicago-light-greystone')}`
        },
        '.text-outline-white-thin': {
          textShadow: `0 0 3px ${theme('colors.white')}, 0 0 3px ${theme('colors.white')}`
        },
        '.text-outline-light-greystone-thin': {
          textShadow: `
            -0.5px -0.5px 0 ${theme('colors.uchicago-light-greystone')}, 
             0.5px -0.5px 0 ${theme('colors.uchicago-light-greystone')}, 
            -0.5px  0.5px 0 ${theme('colors.uchicago-light-greystone')}, 
             0.5px  0.5px 0 ${theme('colors.uchicago-light-greystone')}
          `
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
