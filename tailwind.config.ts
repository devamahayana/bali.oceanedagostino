import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1600px'
      },
      colors: {        
        'primary': '#111',
        'secondary': '#000',
        'background': '#f1f4f9',
      },
      fontFamily:{
        poppins: ["var(--font-poppins)"],     
        asap: ["var(--font-asap)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
