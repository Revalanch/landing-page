"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function ScrollIndicator() {
    const [mounted, setMounted] = useState(false);
    const [isAnchored, setIsAnchored] = useState(false);
    const placeholderRef = useRef<HTMLDivElement>(null);
    const anchorOffset = 32; // bottom-8 = 2rem = 32px

    useEffect(() => {
        setMounted(true);
    }, []);

    const updatePosition = useCallback(() => {
        const placeholder = placeholderRef.current;
        if (!placeholder) return;

        const heroSection = document.getElementById("home");
        if (!heroSection) return;

        const heroRect = heroSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // The anchor point is where the indicator would naturally sit (bottom of hero - offset)
        const anchorPointInViewport = heroRect.bottom - anchorOffset;

        // If the anchor point is above where the fixed indicator would be, anchor it
        if (anchorPointInViewport < viewportHeight - anchorOffset) {
            setIsAnchored(true);
        } else {
            setIsAnchored(false);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        window.addEventListener("scroll", updatePosition, { passive: true });
        window.addEventListener("resize", updatePosition, { passive: true });
        updatePosition();

        return () => {
            window.removeEventListener("scroll", updatePosition);
            window.removeEventListener("resize", updatePosition);
        };
    }, [mounted, updatePosition]);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById("how-it-works");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!mounted) return null;

    return (
        <>
            {/* Placeholder to reserve space at anchor point */}
            <div ref={placeholderRef} className="w-full h-[32px]" />

            {/* The actual indicator */}
            <div
                className={`z-20 flex justify-center pointer-events-none animate-fade-in-up [animation-delay:2s] opacity-0 fill-mode-forwards ${
                    isAnchored
                        ? "absolute bottom-8 left-0 right-0"
                        : "fixed bottom-8 left-0 right-0"
                }`}
            >
                <div
                    onClick={scrollToNextSection}
                    className="relative cursor-pointer pointer-events-auto group"
                    aria-label="Scroll to next section"
                >
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-400 bg-slate-900/90 border border-cyan-500/20 rounded-md whitespace-nowrap shadow-lg">
                            Scroll Down
                        </span>
                    </div>

                    {/* Mouse Icon */}
                    <div
                        className={`relative w-[20px] h-[32px] rounded-full border-2 flex justify-center p-1 transition-all duration-300 animate-bounce will-change-transform ${
                            !isAnchored
                                ? "border-slate-300/60 bg-slate-900/90 shadow-[0_0_20px_rgba(0,0,0,0.8),0_0_40px_rgba(0,0,0,0.4)] group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                                : "border-slate-400/40 bg-slate-950/30 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                        }`}
                    >
                        <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-scroll-wheel group-hover:bg-cyan-300" />
                    </div>
                </div>
            </div>
        </>
    );
}
