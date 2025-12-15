"use client";

import { useEffect, useState } from "react";

export default function Snowfall() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="snow-flake"
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: Math.random() * 0.3 + 0.1
                    }}
                />
            ))}
        </div>
    );
}
