/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#266FE8',
        warn: '#E34D59',
        'warn-hover': '#FF7875',
        secondary: '',
        hover: '#4E94F5',
        'bg-main': '#FFFFFF',
        'bg-secondary': '#F7F8FA',
        'text-main': '#1D2129',
        'text-primary': '#1D2129',
        'text-secondary': '#4E5969',
        'text-tertiary': '#86909C',
        border: '#F2F3F5'
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}
