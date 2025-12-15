"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
    const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#06b6d4" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    if (!calLink) {
        if (process.env.NODE_ENV === "development") {
            return (
                <div className="w-full h-64 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-slate-900/50 p-6 text-center">
                    <div>
                        <p className="text-red-400 font-mono font-bold text-lg mb-2">Configuration Missing</p>
                        <p className="text-slate-400">
                            Please set <span className="text-cyan-400">NEXT_PUBLIC_CAL_LINK</span> in{" "}
                            <code className="bg-slate-800 px-1 py-0.5 rounded">.env.local</code>
                        </p>
                        <p className="text-slate-500 text-sm mt-2">Example: yourusername/15min-demo</p>
                    </div>
                </div>
            );
        }
        return null; // Don't show anything in production if config is missing
    }

    return (
        <div className="w-full h-[650px] rounded-2xl border border-slate-700 bg-slate-900/40 backdrop-blur-sm overflow-hidden shadow-2xl">
            <Cal
                namespace="15min"
                calLink={calLink}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view" }}
            />
        </div>
    );
}
