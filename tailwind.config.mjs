import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#0F7261",
        secondary: "#999999",
      },
    },
  },
  plugins: [animations],
};
