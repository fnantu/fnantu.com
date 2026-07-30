import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",
          700: "#7C3AED",
          800: "#6B21A8",
          900: "#581C87",
          950: "#3B0764",
        },
        zinc: {
          50: "#F8F7FF",
          100: "#EBE8F8",
          200: "#D2CDE7",
          300: "#B3ACCC",
          400: "#8E85AB",
          500: "#6B638A",
          600: "#504869",
          700: "#3B3450",
          800: "#26223A",
          900: "#151224",
          950: "#0C0A18",
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(168, 85, 247, 0.15)",
        "glow-lg": "0 0 40px rgba(168, 85, 247, 0.2)",
        "glow-sm": "0 0 10px rgba(168, 85, 247, 0.1)",
        "glow-btn": "0 0 30px rgba(168, 85, 247, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
