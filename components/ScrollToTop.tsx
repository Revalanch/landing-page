"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-cyan-600/80 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(8,145,178,0.3)] backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-cyan-400/30 group"
            aria-label="Scroll to top"
        >
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-900/90 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl pointer-events-none backdrop-blur-sm">
                Scroll to top
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
            </svg>
        </button>
    );
}
