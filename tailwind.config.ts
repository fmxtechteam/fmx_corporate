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
        primary: "#35AC0B",
        secondary: "#05376A",
        gray: {
          DEFAULT: "#FDFFFF",
          primary: "#020900",
          secondary: "#F3FBF3",
        },
        dark: {
          DEFAULT: "#020900",
        },
      },
    },
  },
  plugins: [],
};
export default config;
