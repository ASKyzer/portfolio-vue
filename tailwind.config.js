// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js,vue}'],

  theme: {
    extend: {
      letterSpacing: {
        tight: '-0.2rem' // Equivalent to -2px at base font size
      }
    }
  },

  plugins: []
}
