/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D12",
          50: "#F4F4F6",
          100: "#E6E7EB",
          200: "#C7C9D1",
          300: "#9A9DAA",
          400: "#6B6F7E",
          500: "#4A4E5C",
          600: "#343844",
          700: "#22252E",
          800: "#14161B",
          900: "#0B0D12",
          950: "#070809",
        },
        paper: {
          DEFAULT: "#FAF9F6",
          100: "#FFFFFF",
          200: "#F4F2EC",
        },
        indigo: {
          50: "#EEEEFD",
          100: "#DEDEFB",
          300: "#9C9CF6",
          400: "#7A7AF2",
          500: "#5B5FEF",
          600: "#4548D6",
          700: "#3537A8",
        },
        clay: {
          100: "#FBE9DB",
          300: "#EFB48A",
          400: "#E6A074",
          500: "#E08D5C",
          600: "#C46F3F",
          700: "#9C5630",
        },
        signal: {
          500: "#3DD9C2",
          600: "#22B6A0",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 30px -8px rgba(0,0,0,0.45)",
        "glass-light": "0 1px 0 0 rgba(255,255,255,0.6) inset, 0 8px 30px -8px rgba(20,20,30,0.12)",
      },
      keyframes: {
        "grid-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "grid-fade": "grid-fade 1.2s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
