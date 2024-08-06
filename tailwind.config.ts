import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react";


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        ppneuemachinaregular: ['PPNeueMachinaRegular', 'sans-serif'],
        ppneuemachinabold: ['PPNeueMachinaBold', 'sans-serif'],
        ppneuemigraitalicbold: ['PPMigraItalicExtraboldItalic', 'sans-serif'],
        clashdisplaymedium: ['ClashDisplayMedium', 'sans-serif'],
      },
    },
    keyframes: {
      "reveal-up": {
        "0%": { opacity: "0", transform: "translateY(80%)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "reveal-down": {
        "0%": { opacity: "0", transform: "translateY(-80%)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      "content-blur": {
        "0%": { filter: "blur(0.3rem)" },
        "100%": { filter: "blur(0)" },
      },
    }
  },


  plugins: [require("tailwindcss-animate"), nextui()],
} satisfies Config

export default config