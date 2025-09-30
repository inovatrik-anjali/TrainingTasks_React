module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        
        
      },

       letterSpacing: {
        tightest:"-0.5px", // custom spacing
      },
       colors: {
        myblue: "#6b75db",   // blue-500
        mypurple: "#800cecff", // purple-600
        mypink: "#e76ba9ff",   // pink-400
        mydarkblue: "#111a2e",  //darkblue
        mygrey:"#f0f2fa",
        myblue2:"#182e8aff",
       btnbg: "#a47cc2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
