import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1920px',
      },
    },
  },
})
