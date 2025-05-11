/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B4D8', // Ocean blue
        secondary: '#FFB703', // Sunny yellow
        accent: '#2EC4B6', // Turquoise
        sand: '#FDF0D5', // Light sand
        coral: '#FF6B6B', // Coral pink
        ocean: '#023E8A', // Deep ocean
        light: '#F8F9FA', // White sand
        dark: '#1A1A1A', // Dark text
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
      },
      backgroundImage: {
        'beach-pattern': "url('/beach-pattern.svg')",
        'wave-pattern': "url('/wave-pattern.svg')",
      },
    },
  },
  plugins: [],
} 