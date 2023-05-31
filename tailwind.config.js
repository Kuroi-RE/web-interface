/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        all: "all 1s ease-in normal",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // mytheme: {
        //   primary: "#ff7cb3",
        //   secondary: "#a722e5",
        //   accent: "#b3ce50",
        //   neutral: "#221D25",
        //   "base-100": "#3A364A",
        //   info: "#46A7E7",
        //   success: "#22C967",
        //   warning: "#CF6E0C",
        //   error: "#F2648C",
        // },
      },

      "night",
      "cmyk",
    ],
  },
};
