module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md1: { max: "1050px" },
        md2: { max: "634px" },
        md3: { max: "400px" },
        md4: { max: "740px" },
        md5: { max: "780px" },
      },
      colors: {
        primary: "#7918F2",
      },
    },
  },
  plugins: [],
};
