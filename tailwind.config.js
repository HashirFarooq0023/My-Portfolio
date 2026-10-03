/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        canvas: {
          DEFAULT: '#000000',
          50: '#050505',
          100: '#080808',
          200: '#0B0B0B',
          300: '#111111',
          400: '#161616',
        },
        ink: {
          DEFAULT: '#FFFFFF',
          pure: '#FFFFFF',
          heading: '#F5F5F5',
          body: '#B8B8B8',
          muted: '#777777',
          dim: '#444444',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      letterSpacing: {
        'hero': '-0.065em',
        'title': '-0.055em',
        'tightest': '-0.04em',
        'wide-tracking': '0.22em',
      },
      boxShadow: {
        'glass-subtle': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glass-button': '0 8px 30px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
        'glass-elevated': '0 20px 70px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        'glass-deep': '0 30px 90px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
      },
    },
  },
  plugins: [],
}
