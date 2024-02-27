/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightC: "#fafafa",
        darkC: "#0f0f0f",
        blueC: "#002868",
        redC: "#BF0A30",
      },
      fontFamily: {
        tsg: ["Chakra Petch", "sans-serif"],
        tsgDancing: ["BLOVERLY Regular"],
      },
      screens: {
        ix: "280px",

        ixl: "321px",
        // => @media (min-width: 1024px) { ... }

        ixsm: "400px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true,
    styled: false,
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
