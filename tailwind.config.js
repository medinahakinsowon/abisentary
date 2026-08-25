/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "void-navy": "#0a1020",
        "deep-steel": "#121a30",
        "deep-steel-2": "#17203b",
        perimeter: "#26365c",
        "perimeter-soft": "#1c2745",
        "signal-blue": "#42cef4",
        "signal-blue-bright": "#4b83ff",
        "signal-blue-dim": "#0d3ea8",
        "alert-amber": "#ffb020",
        paper: "#eef2fb",
        "paper-dim": "#a7b3cf",
        "paper-faint": "#6b7797",
        "success-green": "#2fd67a",
      },
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(#1c2745 1px, transparent 1px), linear-gradient(90deg, #1c2745 1px, transparent 1px)",

        "signal-gradient": "linear-gradient(135deg, #4b83ff 0%, #42cef4 100%)",

        "dark-gradient": "linear-gradient(135deg, #121a30 0%, #0a1020 100%)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      keyframes: {
        sweep: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        blip: {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 1 },
        },
        pulsedot: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
      },
      animation: {
        sweep: "sweep 5s linear infinite",
        blip: "blip 3s ease-in-out infinite",
        pulsedot: "pulsedot 2s ease-in-out infinite",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
