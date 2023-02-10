/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        "": [""],
      },
      colors: {
        pallete: {
          FrenchWine: "#AB0A45",
          BakerMillerPink: "#FF8FB8",
          VeryPaleYellow: "#FFFDBC",
          DarkSeaGreen: "#97CB86",
          PersianGreen: "#11AA95",
        },
      },
    },
  },
  plugins: [
    require('./node_modules/flowbite/plugin')
  ],
};
