/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/dist/flowbite.min.js"],
  theme: {
    extend: {
      fontFamily: {
        'Cremona':['Cremona','sans-serif'],
        'Urbanist':['Urbanist','sans-serif'],
        'UrbanistMedium':['UrbanistMedium','sans-serif'],
        'UrbanistSemibold':['UrbanistSemibold','sans-serif'],
      },
      colors: {
        palette: {
          Auburn: '#AA302B',
          SoftAuburn: '#C25A5C',
          Peach:'#F8B791',
          SoftPeach:'#F8B8AF',
          OldRose:'#AE7886',
          OrchidPink: '#DEB2BF',
          ChampagnePink:'#F1DDD6'
        },
      },
    },
  },
  plugins: [
    require('./node_modules/flowbite/plugin')
  ],
};
