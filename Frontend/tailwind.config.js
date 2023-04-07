/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports ={
  content :[
    "./index.html",
    "./src/**/*.{js.jsx}",

  ],

  theme:{
    extend:{
      colors:{
        'greencolor': '#006600',
        'textColor': '#0000',
        'greyIsh':'#cccccc',
        
      }
    }
  }
}
