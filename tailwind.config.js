/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        panel: "var(--color-panel)",
        paper: "var(--color-paper)",
        line: "var(--color-line)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        bronze: "var(--color-bronze)",
        accent: "var(--color-accent)",
        blush: "var(--color-blush)",
        clay: "var(--color-clay)",
        mist: "var(--color-mist)",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(28, 17, 12, 0.08)",
        card: "0 18px 42px rgba(58, 38, 27, 0.12)",
      },
      maxWidth: {
        content: "76rem",
      },
      letterSpacing: {
        editorial: "0.18em",
      },
    },
  },
  plugins: [],
};
