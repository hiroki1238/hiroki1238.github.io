/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
              zenmaru: ["Zen Maru Gothic"], kosugimaru: ["Kosugi Maru"], rocknroll: ["RocknRoll One"], decol: ["Kaisei Decol"],
          },
          colors: {
              // 'カラー名': 'カラーコード'
              'shadow-gray1':'#bfbfbf', 'gray-50': '#f9fbfc', 'gray-150': '#f4f5f7', 'gray-170': '#eff0f2', 'gray-250': '#eaebef',
            },

            width: {
               '1/9': '0.11111111%',
               '1/8': '12.5%',
               '1/7': '14.2857143%',
               '2/7': '28.5714286%',
               '3/7': '42.8571429%',
               '4/7': '57.1428571%',
               '5/8': '62.5%',
               '5/7': '71.4285714%',
               '7/9': '77.7777777%',
               '6/7': '85.7142857%',
             },

             aspectRatio: {
              'slideshow': '7/5',
            },
    },
  },
  plugins: [],
};
