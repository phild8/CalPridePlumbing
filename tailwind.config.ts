import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e3e9fe',
          200: '#c8d4fd',
          300: '#a5b8fa',
          400: '#7e97f6',
          500: '#5a79ef',
          600: '#3f61e0',
          700: '#2f4ec2',
          800: '#28429b',
          900: '#243a7f'
        },
        cardgray: '#edf0f4',
        ink: '#1f2a44'
      },
      boxShadow: {
        soft: '0 8px 24px rgba(36,58,127,0.08)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
}
export default config
