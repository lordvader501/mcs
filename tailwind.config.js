/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        text1: "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",
        text2: "linear-gradient(90deg, #0076CE 0.1%, #9400D3 65.11%)",
        hero: "linear-gradient(75deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%)",
        numberbg: "linear-gradient(96deg, #0076CE 0%, #9400D3 100%)",
        joinus:
          "linear-gradient(180deg, #FAFBFC 11.67%, rgba(250, 251, 252, 0.08) 100%)",
        footerbg: "linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%)",
      },
      screens: {
        xs: "300px",
        xm: "550px",
        "2.5xl": "1440px",
        "4xl": "2500px",
        "6xl": "3200px",
        "10xl": "4500px",
      },
      fontSize: {
        px65: "65px",
        px35: "35px",
        px18: "18px",
        px17: "17px",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        kaisei: ["var(--font-kaisei-harunoumi)"],
        poppins: ["var(--font-poppins)"],
      },
      textColor: {
        darkgrey: "#616161",
      },
      boxShadow: {
        joincard: "2px 4px 15px 0px rgba(133, 133, 167, 0.25);",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
