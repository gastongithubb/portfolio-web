import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      colors: {
        orange: {
          primary: '#f4f4f4',
          secondary: '#ff7900',
          tertiary: '#ff8500',
          quaternary: '#ff9100',
          quinary: '#f8f8ff',
        },
        purple: {
          primary: '#240046',
          secondary: '#3c096c',
          tertiary: '#5a189a',
          quaternary: '#7b2cbf',
          quinary: '#9d4edd',
        },
      },
    },
  },
  plugins: [],
};

export default config;