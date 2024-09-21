module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}', 
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        error: 'var(--color-error)',
        primary: 'var(--color-primary)', 
        secondary: 'var(--color-secondary)', 
        tertiary: 'var(--color-tertiary)',
        tertiaryLight: 'var(--color-tertiary-light)',
        tertiaryLighter: 'var(--color-tertiary-lighter)',
        tertiaryDark: 'var(--color-tertiary-dark)',
        tertiaryDarker: 'var(--color-tertiary-darker)',
      },
    },
    letterSpacing: {
      tight: '-0.2rem' // Equivalent to -2px at base font size
    }
  },
  plugins: [],
};