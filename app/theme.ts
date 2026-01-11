export const theme = {
    colors: {
        brand: {
            primary: "#06b6d4", // cyan-500
            secondary: "#3b82f6", // blue-500
            dark: "#0f172a", // slate-900
            darker: "#020617", // slate-950
        },
        background: {
            main: "#020617",
            card: "rgba(15, 23, 42, 0.9)", // slightly transparent slate-900
            cardHover: "rgba(30, 41, 59, 0.5)", // slate-800 with opacity
            glass: "rgba(15, 23, 42, 0.6)",
        },
        text: {
            primary: "#ffffff",
            secondary: "#94a3b8", // slate-400
            muted: "#cbd5e1", // slate-300
            accent: "#22d3ee", // cyan-400
        },
        border: {
            light: "rgba(255, 255, 255, 0.05)",
            accent: "rgba(6, 182, 212, 0.2)", // cyan-500/20
        }
    },
    fonts: {
        sans: ["Inter", "sans-serif"],
    },
    gradients: {
        text: "linear-gradient(to right, #22d3ee, #3b82f6)",
        card: "linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.9))",
        avalanche: "radial-gradient(circle at 30% 30%, #22d3ee, #3b82f6)",
        snow: "rgba(255, 255, 255, 0.4)",
        grid: "linear-gradient(to right, rgba(30, 41, 59, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.5) 1px, transparent 1px)",
        conic: "conic-gradient(from 180deg at 50% 50%, #06b6d4 0deg, #3b82f6 180deg, #06b6d4 360deg)",
        heroGlow: "bg-cyan-900/10",
    },
    animations: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        spinSlow: "spin-slow 12s linear infinite",
        snowfall: "snowfall linear infinite",
        scrollWheel: "scroll-wheel 1.5s infinite",
        fadeInUp: "fade-in-up 0.8s ease-out forwards",
        pulseSubtle: "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    shadows: {
        glow: "0 0 30px rgba(34, 211, 238, 0.3)",
        pill: "0 0 15px rgba(6, 182, 212, 0.15)",
    }
};
