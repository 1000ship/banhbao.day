import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFDF7", 
        foreground: "#5D576B",
        primary: {
            DEFAULT: "#FF9EAA",
            dark: "#FF708D", 
            light: "#FFC6D3",
        },
        secondary: {
            DEFAULT: "#FFD580", 
        },
        accent: {
            DEFAULT: "#B5EAD7",
        }
      },
      fontFamily: {
        sans: ['var(--font-fredoka)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
        },
        wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
