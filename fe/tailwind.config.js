/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chakra Petch'],
      },
      maxWidth: {
        maxContent: '1344px',
      },
      colors: {
        primary: '#DD1000',
      },
      gridTemplateColumns: {
        343: '3fr 4fr 3fr',
        64: '6fr 4fr',
        3565: '35fr 65fr',
        404020: '40fr 40fr 20fr',
        73: '7fr 3fr',
        46: '4fr 6fr',
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
