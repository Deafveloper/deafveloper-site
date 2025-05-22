/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3A3A3A',
        },
        purple: {
          glow: '#B794F4',
          light: '#E9D8FD',
          dark: '#553C9A',
        },
        gold: {
          glow: '#F6E05E',
          light: '#FAF089',
          dark: '#975A16',
        },
        teal: {
          glow: '#4FD1C5',
          light: '#B2F5EA',
          dark: '#285E61',
        },
      },
      boxShadow: {
        'glow': '0 0 15px -3px rgba(183, 148, 244, 0.4)',
        'glow-gold': '0 0 15px -3px rgba(246, 224, 94, 0.4)',
        'glow-teal': '0 0 15px -3px rgba(79, 209, 197, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px -3px rgba(183, 148, 244, 0.4)' },
          '50%': { boxShadow: '0 0 20px -3px rgba(183, 148, 244, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};