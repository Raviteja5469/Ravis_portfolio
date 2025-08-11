/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      colors: {
        cosmic: {
          black: '#000000',
          dark: '#0a0a0f',
          midnight: '#1a1a2e',
          blue: '#16213e',
          purple: '#533a7b',
          cyan: '#00ffff',
          magenta: '#ff00ff',
          white: '#ffffff',
          gray: '#f8fafc',
          indigo: '#6366f1',
        },
        neon: {
          cyan: '#00ffff',
          magenta: '#ff00ff',
          green: '#00ff00',
          purple: '#8b5cf6',
          blue: '#3b82f6',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'starfield': 'starfield 100s linear infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' 
          },
          'to': { 
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)' 
          },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        starfield: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100vh)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        'light-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00ffff, #ff00ff)',
      },
    },
  },
  plugins: [],
};