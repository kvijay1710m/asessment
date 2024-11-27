/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        lightGreen: "#F9FBE7",
        darkGreen: "#668D12",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #34D399, #3B82F6)", 
      },
    },
  },
  plugins: [],
};
