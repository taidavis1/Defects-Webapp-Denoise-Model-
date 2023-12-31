/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [],
  variants: {
    fill: ['hover', 'focus'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-font': ['Open Sans', 'sans-serif'],
        'newFont': ['Catamaran', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'Catamaran': ['Catamaran', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
        'new-2-font': ['Satisfy' , 'cursive'],
        'lato': ['Lato', 'sans-serif'],
        'Roboto': ['Roboto Serif' , 'serif'],
        'Freehand': ['Freehand' , 'cursive'],
        'Poppins': ['Poppins' , 'sans-serif'],
        'Abril': ['Abril Fatface' , 'cursive'],
        'Rouge': ['Rouge Script','cursive'],
        'Han-Sans': ['Black Han Sans', 'sans-serif'],
        'Monterast' :['Montserrat',' sans-serif'],
        'Gruppo': ['Gruppo', 'sans-serif'],
        'PlayFair': ['Playfair Display', 'serif'],
        'Dancing': ['Dancing Script', 'cursive'],
        'Marcok': ['Marcellus', 'serif'],
      },
      colors:{
        'ser-color': '#ffe4b0',
        'gold': '#ffd700',
      },
      backgroundImage: {
        'pageb': "url('/src/img/bg5.png')",
        'testbg': "url('/src/img/bg1.png')",
        'bgtest': "url('/src/img/hbg.jpg')",
        'bg2': "url('/src/img/bg2.png')", 
        'bg3': "url('/src/img/bg3.png')",
        'bg4': "url('/src/img/bg4.png')",
        'hpic': "url('/src/img/hpic.png')",
        'bgtree': "url('/src/img/bg-tree.png')",
        'bgpop': "url('/src/img/test.png')",
      }
    },
  },
}