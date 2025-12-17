"use client";

import { useEffect, useState } from "react";

export default function Snowfall() {
    const [mounted, setMounted] = useState(false);

    // Generate static particles once using lazy state initialization
    const [particles] = useState(() =>
        [...Array(6)].map(() => ({
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.3 + 0.1
        }))
    );

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {particles.map((style, i) => (
                <div
                    key={i}
                    className="snow-flake"
                    style={style}
                />
            ))}
        </div>
    );
}
