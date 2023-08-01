/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        pale_violet: "hsl(276, 79%, 92%)",
        mod_violet: "hsl(276, 55%, 52%)",
        dark_violet: "hsl(271, 15%, 43%)",
        gray_blue: "hsl(206, 6%, 79%)",
        vd_violet: "hsl(271, 36%, 24%)",
        grad_start: "hsl(293, 100%, 63%)",
        grad_end: "hsl(264, 100%, 61%)",
        light_violet: "hsl(270, 22%, 91%)",
        light_magenta: "hsl(289, 100%, 72%)",
      },
    },
  },
  plugins: [],
};
