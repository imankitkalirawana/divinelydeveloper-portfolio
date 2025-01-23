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
      ping: {
        "75%, 100%": { transform: "scale(2)", opacity: "0" },
      },
      "content-blur": {
        "0%": { filter: "blur(0.3rem)" },
        "100%": { filter: "blur(0)" },
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
