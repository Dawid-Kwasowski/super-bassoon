import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F8F4E3",
        black: "#191414",
        primary: "#FF0035",
      },
    },
  },
  plugins: [],
} satisfies Config;
