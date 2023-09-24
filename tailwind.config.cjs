const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)"
    },
    ".my-rotate-x-180":{
      transform: "rotateX(180deg)"
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d"
    },
    ".perspective":{
      perspective:"1000px"
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden"
    }
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    fontSize: {
      "3xs": '0.45rem',
      "2xs": '0.55rem',
      "xs": '0.75rem', 
      "sm": '0.8rem',
      "base": '1rem',
      "xl": '1.25rem',
      "2xl": '1.563rem',
      "3xl": '1.953rem',
      "4xl": '2.441rem',
      "5xl": '3.052rem',
    },
    screens: {
      'xs': '350px',
      'xm': '410px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
    },
  },
  plugins: [Myclass],
}
