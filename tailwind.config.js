module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // dark: "class",
  theme: {
    extend: {
      colors: {
        dark: "#121213",
        orange: "#FF4F00",
        teal: "#00F6CF",
        accent1: "#565556",
        accent2: "#2B2B2B",
        danger: "#FF2044",
        success: "#2DE229",
      },
      // spacing: {
      //   28: '7rem',
      // },
      // letterSpacing: {
      //   tighter: '-.04em',
      // },
      // lineHeight: {
      //   tight: 1.2,
      // },
      // fontSize: {
      //   '5xl': '2.5rem',
      //   '6xl': '2.75rem',
      //   '7xl': '4.5rem',
      //   '8xl': '6.25rem',
      // },
      // boxShadow: {
      //   small: '0 5px 10px rgba(0, 0, 0, 0.12)',
      //   medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      // },
    },
  },
  plugins: [],
};
