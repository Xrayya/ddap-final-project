/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      phone: '0px',
      tablet: '768px',
      desktop: '1024px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      sm: ['14px', '24px'],
      base: ['16px', '24px'],
      lg: ['18px', '24px'],
      xl: ['20px', '32px'],
      '2xl': ['24px', '32px'],
      '3xl': ['32px', '40px'],
      '4xl': ['40px', '48px'],
      '5xl': ['48px', '64px'],
      '6xl': ['56px', '72px'],
    },
  },
  plugins: [],
};
