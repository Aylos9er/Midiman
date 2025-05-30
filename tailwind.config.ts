import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      height: {
        '128': '32rem',
      },
      minHeight: {
        'chart': '400px',
      },
      backgroundColor: {
        'chart-bg': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
