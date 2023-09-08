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
        'color-bg': 'var(--color-bg)',
        'color-primary-variant': 'var(--color-primary-variant)',
        'color-white': 'var(--color-white)',
        'color-light': 'var(--color-light)',
      },
      backgroundImage: {
        'bg-image': 'var(--bg-image)',
      },
      width: {
        'container-width-lg': 'var(--container-width-lg)',
        'container-width-md': 'var(--container-width-md)',
        'container-width-sm': 'var(--container-width-sm)',
      },
    },
  },
  plugins: [],
};
