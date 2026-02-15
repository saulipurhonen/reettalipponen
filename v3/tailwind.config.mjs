/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Caveat', 'cursive'],
      },
      colors: {
        surface: {
          DEFAULT: '#0a0f0a',
          raised: '#141a14',
          elevated: '#1e261e',
        },
        accent: {
          DEFAULT: '#4a7c59',
          light: '#6b9e7a',
          dark: '#3d6b4a',
        },
        gold: '#c4a35a',
        text: {
          DEFAULT: '#e8ede9',
          muted: '#9aaa9e',
          dim: '#6b7d70',
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
