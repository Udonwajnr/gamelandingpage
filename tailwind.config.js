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
      },
      colors:{
        blue:{
          50:"#DFDFF0",
          75:"#DFDFF2",
          100:"#F0F2FA",
          200:"#010101",
          300:"#4FB7DD"
        },
        violet:{
          300:"#5724FF"
        },
        yellow:{
          100:"#8E983F",
          300:"#EDFF66"
        }

      }
    },
  },
  plugins: [],
};
