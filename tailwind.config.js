/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        termScreen: "#282C34",
        termTop: "#D9D9D9",
        termExit: "#FF605C",
        termMin: "#FFBD44",
        termMax: "#00CA4E",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        scp: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
