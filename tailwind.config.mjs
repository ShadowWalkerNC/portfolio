/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Legacy tokens — kept for content collection compat
          purple: '#3B82F6',
          dark:   '#020817',
          card:   '#0F1E35',
          border: '#1E3A5F',
          muted:  '#64748B',
          // New blue theme tokens
          blue:       '#3B82F6',
          'blue-bright': '#60A5FA',
          'blue-dim':    '#1D4ED8',
          surface:    '#0A1628',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
