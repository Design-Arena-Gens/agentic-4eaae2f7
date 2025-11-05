/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lux: {
          bg: '#0b0b0b',
          surface: '#121212',
          gold: '#d4af37',
          ivory: '#f7f4ef',
          slate: '#9aa0a6'
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.2), 0 10px 30px -10px rgba(212,175,55,0.25)'
      },
      backgroundImage: {
        'lux-radial': 'radial-gradient(1200px 600px at 80% -10%, rgba(212,175,55,0.08), transparent 60%)',
        'lux-gradient': 'linear-gradient(135deg, rgba(212,175,55,0.16), rgba(255,255,255,0) 60%)'
      }
    }
  },
  plugins: []
};
