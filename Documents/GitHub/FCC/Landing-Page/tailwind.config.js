/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.18em',
        wider: '0.24em',
      },
      colors: {
        'fcc-black': '#000000',
        'fcc-panel': '#1A1A1A',
        'fcc-border': '#333333',
        'fcc-cream': '#F6F5EF',
        'fcc-muted': '#CCCCCC',
        'fcc-accent': '#CDDFFF',
        'fcc-gray': '#AAAAAA',
      },
      boxShadow: {
        'fcc-accent': '4px 4px 0 0 #CDDFFF',
        'fcc-dark': '4px 4px 0 0 #333333',
      },
      borderRadius: {
        none: '0',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}

