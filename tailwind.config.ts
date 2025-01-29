import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        "pp-neue-machina": ["PPNeueMachina", "sans-serif"],
        "pp-migra": ["PPMigra", "sans-serif"],
        "clash-display": ["ClashDisplay", "sans-serif"],
      },
    },
    animation: {
      marquee: "marquee var(--duration) linear infinite",
      "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      "float-y": "float-y 6s ease-in-out infinite",
      "float-x": "float-x 6s ease-in-out infinite",
      "float-xy": "float-xy 6s ease-in-out infinite",
      sparkle: "sparkle 6s ease-in-out infinite",
      rocket: "rocket 6s ease-in-out infinite",
    },
    keyframes: {
      ping: {
        "75%, 100%": { transform: "scale(2)", opacity: "0" },
      },
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
      "marquee-vertical": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(calc(-100% - var(--gap)))" },
      },
      "bg-position": {
        "0%": { backgroundPosition: "0% 50%" },
        "100%": { backgroundPosition: "100% 50%" },
      },
      "float-y": {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5%)" },
        "100%": { transform: "translateY(0)" },
      },
      "float-x": {
        "0%": { transform: "translateX(0)" },
        "50%": { transform: "translateX(-5%)" },
        "100%": { transform: "translateX(0)" },
      },
      "float-xy": {
        "0%": { transform: "translate(0, 0)" },
        "50%": { transform: "translate(-5%, -5%)" },
        "100%": { transform: "translate(0, 0)" },
      },
      sparkle: {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.5)" },
        "100%": { transform: "scale(1)" },
      },
      rocket: {
        "0%": { transform: "translateY(1.3em) rotate(-45deg)" },
        "10%": { transform: "translateY(1.1em) rotate(-45deg)" },
        "30%": { transform: "translateY(1.2em) rotate(-45deg)" },
        "50%": { transform: "translateY(1em) rotate(-45deg)" },
        "70%": { transform: "translateY(1.2em) rotate(-45deg)" },
        "80%": { transform: "translateY(1em) rotate(-45deg)" },
        "90%": { transform: "translateY(1.2em) rotate(-45deg)" },
        "100%": { transform: "translateY(1.3em) rotate(-45deg)" },
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        dark: {
          colors: {
            default: {
              50: "#0c0b0e",
              100: "#131215",
              200: "#19181d",
              300: "#201f25",
              400: "#27252d",
              500: "#4d4b52",
              600: "#737177",
              700: "#98979b",
              800: "#bebec0",
              900: "#e4e4e5",
              foreground: "#fff",
              DEFAULT: "#27252d",
            },
            primary: {
              50: "#472140",
              100: "#703565",
              200: "#99488a",
              300: "#c35cb0",
              400: "#ec6fd5",
              500: "#ef88dc",
              600: "#f3a1e4",
              700: "#f6bbeb",
              800: "#f9d4f2",
              900: "#fdedfa",
              foreground: "#000",
              DEFAULT: "#ec6fd5",
            },
            secondary: {
              50: "#0f3840",
              100: "#185966",
              200: "#217a8b",
              300: "#299bb1",
              400: "#32bcd6",
              500: "#56c8dd",
              600: "#7ad3e4",
              700: "#9edfec",
              800: "#c2ebf3",
              900: "#e5f7fa",
              foreground: "#000",
              DEFAULT: "#32bcd6",
            },
            background: "#19181e",
            focus: "#ec6fd5",
            overlay: "#ffffff",
            divider: "#2d2d2e",
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
