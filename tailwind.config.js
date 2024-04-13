const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading1-bold": [
        "5rem",
        {
          lineHeight: "150%",
          fontWeight: "800",
        },
      ],
      "heading1-semibold": [
        "2rem",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "2.5rem",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading2-semibold": [
        "1.5rem",
        {
          lineHeight: "160%",
          fontWeight: "600",
        },
      ],
      "heading3-bold": [
        "3.3rem",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading3-semibold": [
        "2.1rem",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "heading4-medium": [
        "20px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "body-bold": [
        "1.2rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "1.2rem",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "body-normal": [
        "0.9rem",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "body1-bold": [
        "1rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-regular": [
        "2rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-medium": [
        "0.9rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base-semibold": [
        ".8rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "base1-semibold": [
        "1.3rem",
        {
          lineHeight: "140%",
          fontWeight: "400",
        },
      ],
      "small-regular": [
        "1rem",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
      "small-medium": [
        "1.5rem",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "small-semibold": [
        "1.1rem",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "subtle-medium": [
        "0.8rem",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      "subtle-semibold": [
        "0.8rem",
        {
          lineHeight: "16px",
          fontWeight: "600",
        },
      ],
      "tiny-medium": [
        "10px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
      "x-small-semibold": [
        "7px",
        {
          lineHeight: "9.318px",
          fontWeight: "600",
        },
      ],
      "icon-md": [
        "8rem",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        "primary-500": "#877EFF",
        "secondary-500": "#FFB620",
        blue: "#0095F6",
        "logout-btn": "#FF5A5A",
        "navbar-menu": "rgba(16, 16, 18, 0.6)",
        "dark-1": "#000000",
        "dark-2": "#121417",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEE",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
        "gray-1": "#697C89",
        glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      boxShadow: {
        "count-badge": "0px 0px 6px 2px rgba(219, 188, 159, 0.30)",
        "groups-sidebar": "-30px 0px 60px 0px rgba(28, 28, 31, 0.50)",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  animation: {
    "loop-scroll": "loop-scroll 50s linear infinite",
    gradient: "gradient 6s linear infinite",
  },
  keyframes: {
    gradient: {
      "0%": {
        backgroundPosition: "0% 50%",
      },
      "100%": {
        backgroundPosition: "100% 50%",
      },
    },
    "loop-scroll": {
      from: { transform: "translateX(0)" },
      to: { transform: "translateX(-100%)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
