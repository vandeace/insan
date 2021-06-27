module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      colors: {
        "white-blue": "#E7EDFD",
        "blue-1": "#D3E2FE",
        "blue-2": "#A9BADA",
        "blue-3": "#93A5D0",
        "blue-4": "#637AA6",
        "blue-5": "#466289",
        white: "#fafafa",
        dark: "#181B1D",
        blue: {
          primary: "#3252df",
          dark: "#152C5B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
