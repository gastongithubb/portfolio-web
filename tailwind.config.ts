import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CAD2C5',
          light: '#84A98C',
          dark: '#52796F',
        },
        background: {
          DEFAULT: '#2F3E46',
          secondary: '#354F52'
        }
      },
      fontFamily: {
        sans: ['SF Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;