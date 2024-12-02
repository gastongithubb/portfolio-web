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
        // Colores específicos que mencionamos
        primary: {
          DEFAULT: '#CAD2C5',
          light: '#84A98C',
          dark: '#52796F',
        },
        background: {
          DEFAULT: '#2F3E46',
          secondary: '#354F52'
        },
        // Variables para personalización
        'custom-background': 'var(--background)',
        'custom-foreground': 'var(--foreground)',
      },
      fontFamily: {
        // Si decides usar SF Pro o una fuente similar
        sans: ['SF Pro', 'system-ui', 'sans-serif'],
      },
      // Puedes añadir transiciones y otros efectos personalizados
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
} satisfies Config;