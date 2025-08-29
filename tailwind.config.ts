/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        destructive: "var(--destructive)",
        card: "var(--card)",
        popover: "var(--popover)",
        sidebar: "var(--sidebar)",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
      fontFamily: {
        medium: ["medium", ...fontFamily.sans],
         bold: ["bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
