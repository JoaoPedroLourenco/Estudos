/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        formBg: "#0e0e0e",
        ladoDirBg: "#0D1C2F",
        roxo: "#6643FFff",
        roxoHover: "#8266fc",
        textoCinza: "#808080",
        borderInput: "#ffffff1a",
        circuloRoxo: "#503BB2",
      },
    },
  },
  plugins: [],
};
