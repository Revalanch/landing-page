"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById("how-it-works");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!mounted) return null;

    return (
        <div
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer animate-fade-in-up [animation-delay:2s] opacity-0 fill-mode-forwards group"
            aria-label="Scroll to next section"
        >
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-400 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-md whitespace-nowrap shadow-lg">
                    Scroll Down
                </span>
            </div>

            {/* Mouse Icon */}
            <div className="w-[20px] h-[32px] rounded-full border-2 border-slate-400/40 flex justify-center p-1 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] bg-slate-950/30 backdrop-blur-sm animate-bounce">
                <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-scroll-wheel group-hover:bg-cyan-300" />
            </div>
        </div>
    );
}
