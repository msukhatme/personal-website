/** @type {import('tailwindcss').Config} */
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
        'uchicago-dark-gray': '#222222', // For primary background
        'uchicago-off-black': '#1A1A1A', // Alternative background
      },
      fontFamily: {
        // Add EB Garamond for headings and a sans-serif stack for body
        // We'll load EB Garamond via Google Fonts in layout.tsx
        // The 'var(--font-gotham)' and 'var(--font-eb-garamond)' will be defined in layout.tsx
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
  plugins: [],
}
