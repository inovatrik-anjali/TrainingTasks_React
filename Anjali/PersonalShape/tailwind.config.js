module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        
        
      },

       letterSpacing: {
        tightest: "-0.5px", // custom spacing
      },
       colors: {
        myblue: "#3B82F6",   // blue-500
        mypurple: "#9333EA", // purple-600
        mypink: "#EC4899",   // pink-400
        darkblue: '#111a2e',  //darkblue
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
