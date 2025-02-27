/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#1b0330',
        'bright-purple': '#9013FE',
        'electric-blue': '#4285F4',
        'dark-charcoal': '#1E1E1E',
        'light-gray': '#CCCCCC',
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
        'extrabold': 900,
      },
      backgroundImage: {
        'purple-black-gradient': 'linear-gradient(to bottom, #1b0330, #000000)',
        'blue-white-gradient': 'linear-gradient(to right, #4285F4, #FFFFFF)',
        'purple-blue-gradient': 'linear-gradient(to right, #9013FE, #4285F4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}