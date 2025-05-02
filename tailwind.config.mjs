/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#230E40",
        secondaryBackground: "#3F1878",
        textWhite: "#F3F1F7",
        violettBackground: "#D705F2",
        blueButton: "#4951F2",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
