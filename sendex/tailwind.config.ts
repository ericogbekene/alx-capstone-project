import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sendex: {
          50: '#f5fbff',
          100: '#e8f6ff',
          200: '#bfe9ff',
          300: '#96dbff',
          400: '#5cc3ff',
          500: '#2196f3',
          600: '#1976d2',
          700: '#115a9a',
          800: '#0b3f6b',
          900: '#07283f'
        }
      }
    }
  },
  plugins: []
}

export default config
