/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mini: "320px"
      },
      colors: {
        dark: "#3D464D",
        light: "#F5F5F5",
        brightGray: "#ececec",
        body: "#6C757D",
        yellow: "#FFD333",
        yellowDark: "#ffc800",
        border: "#dee2e6",
        borderYellow: "#ffefb3",
        skeleton: "bg-slate-200"
      }
    },
  },
  // plugins: [
  //   require('@tailwindcss/container-queries'),
  // ],
}

