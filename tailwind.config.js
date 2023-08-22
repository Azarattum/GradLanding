import tailwindMobileHover from "tailwind-mobile-hover";
import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "var(--grain), radial-gradient(circle at center, var(--tw-gradient-stops))",
        "lines-left":
          "repeating-linear-gradient(-45deg, rgb(255 255 255 / 0.01), rgb(255 255 255 / 0.01) 5px, transparent 5px, transparent 25px)",
        "lines-right":
          "repeating-linear-gradient(45deg, rgb(255 255 255 / 0.01), rgb(255 255 255 / 0.01) 5px, transparent 5px, transparent 25px)",
      },
      animation: {
        "enter-slide": "slide 0.4s ease-in-out 1",
        "enter-fall": "fall 0.4s ease-in-out 1",
      },
      keyframes: {
        slide: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        fall: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [tailwindMobileHover, tailwindTypography],
};
