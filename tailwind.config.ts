import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        fidubit: {
          black: '#050505',
          dark: '#080808',
          darker: '#030303',
        },
        accent: {
          yellow: '#eab308',
          fuchsia: '#d946ef',
          purple: '#a855f7',
          blue: '#3b82f6',
          green: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'sound': 'sound 0ms -800ms linear infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-15deg)' },
          '100%': { transform: 'translateX(150%) skewX(-15deg)' },
        },
        sound: {
          '0%': { height: '3px', opacity: '0.35' },
          '100%': { height: '16px', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
