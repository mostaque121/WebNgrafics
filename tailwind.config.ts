import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Mbg: "#16152F",
        Sbg: "#23233f",
        Tbg: "#1c283f",
        Stext: "#18B3C7",
        Ttext: "#00b1dc",
        TtextH: "#0098C1",
        TtextA: "#0086A0",
        StextH: "#149CA5",
        StextA: "#118D91",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
