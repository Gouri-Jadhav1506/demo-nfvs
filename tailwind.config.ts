import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#123B73',
          deep: '#0B1F3A',
          gold: '#D9A72E',
          muted: '#EAF1F9',
          bg: '#F7F9FC',
          text: '#172334',
          secondary: '#596579',
          border: '#DCE3EC',
        },
        primary: {
          50: '#F0F5FC',
          100: '#E0EBF8',
          200: '#C2D8F2',
          300: '#94BAE9',
          400: '#5F95DC',
          500: '#123B73',
          600: '#0F3263',
          700: '#0C284F',
          800: '#0B1F3A',
          900: '#07162B',
          950: '#040E1B',
        },
        sidebar: {
          bg: '#0B1F3A',
        },
      },
      screens: {
        xs: '480px',
      },
      borderRadius: {
        card: '0.75rem',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
