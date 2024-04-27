// Tailwind
import type { Config } from 'tailwindcss'

// Flowbite React
import { content, plugin } from 'flowbite-react/tailwind'

export default {
  content: [content(), 'node_modules/preline/dist/*.js', './app/**/*.{js,jsx,ts,tsx}', './app/**/**/*.{js,jsx,ts,tsx}', './app/**/**/**/*.{js,jsx,ts,tsx}', './app/**/**/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#ff8000',
        lightPrimaryColor: '#ffdbca',
        secondaryColor: '#0000ff',
        primaryGradient: '#ff5b2e',
        secondaryGradient: '#f5324f',
      },
      fontFamily: {
        primaryFont: [
          'Manrope',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
          'sans-serif',
        ],
        cursiveFont: [
          'Bilbo Swash Caps',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
          'sans-serif',
        ],
      },
    },
    transitionDuration: {
      '3000': '3000ms',
    },
    animation: {
      'loop-scroll': 'loop-scroll 50s linear infinite',
    },
    keyframes: {
      'loop-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
    },
  },
  plugins: [plugin(), require('preline/plugin')],
} satisfies Config
