/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'whitePearl': '#FBFCF8',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1B2B24",
          secondary: "#adde33",
          accent: "#f8a33e",
          neutral: "#397968",
          "base-100": "#e5e5e5",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          info: "#60A5FA",
          success: "#34D399",
          warning: "#FBBD23",
          error: "#F87171",
          "base-content": "#000000",
        },
      },
      {
        dark: {
          primary: "#397968",
          secondary: "#adde33",
          accent: "#f8a33e",
          neutral: "#3D4451",
          "base-100": "#1a1919", // Dark background
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "base-content": "#9FA4A3",
        },
      },
    ],
  },
};
