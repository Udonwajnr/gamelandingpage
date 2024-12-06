/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry:["zentry","sanf-serif"],
        general:['general','sanf-serif'],
        "circular-web":["circular-web","sanf-serif"],
        "robert-medium":["robert-medium","sanf-serif"],
        "robert-regular":["robert-regular","sanf-serif"]
      }
    },
  },
  plugins: [],
};
