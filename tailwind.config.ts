import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow_cmbyn: {
          "300": "#ded0a9",
          "500": "#e6ca77",
        },
        orange_cmbyn: {
          "500": "#d97505",
          "700": "#863a06",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
