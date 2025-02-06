import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: '',
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1400px",
          xl: "1680px",
        },
      },
      colors: {
        ['dark-500']: "var(--dark-500)",
        ['dark-700']: "var(--dark-700)",
        brand: "var(--brand)",
        highlighted: "var(--highlighted)",
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        md: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        '2xl': "1.5rem", // 24px
        '3xl': "2rem" // 32px
      },
      lineHeight: {
        '3': "0.75rem",
        '4': "1rem",
      },
    },
    screens: {
      sm: "640px", 
      md: "768px",
      lg: "1024px",  
      xl: "1280px",  
      "2xl": "1536px",
    },
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;
