module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        bluegray_900: "#333333",
        indigo_A200_d3: "#4d68f9d3",
        indigo_900_33: "#29346e33",
        black_900: "#000000",
        indigo_A400: "#4154ff",
        gray_900_ab: "#000938ab",
        black_901: "#060606",
        indigo_A200: "#4d69fa",
        pink_300: "#fb4bae",
        black_900_3f: "#0000003f",
        indigo_700_33: "#3f4b8b33",
        white_A700: "#ffffff",
      },
      fontFamily: {
        raleway: "Raleway",
        almarai: "Almarai",
        poppins: "Poppins",
      },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "0px 4px  32px 0px #0000003f",
      },
      textShadow: {
        ts1: "0px 4px  4px #3f4b8b33",
        ts: "0px 4px  4px #29346e33",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
