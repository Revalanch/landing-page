export default function PhoneDemo() {
    return (
        <div className="relative hidden lg:flex justify-center items-center h-[600px] w-full perspective-[2000px]">
            {/* 3D Phone Container */}
            <div className="relative w-[300px] h-[580px] bg-slate-950 rounded-[3rem] border-4 border-slate-700 shadow-2xl [transform-style:preserve-3d] [transform:rotateY(-12deg)_rotateX(5deg)] transition-transform duration-500 hover:[transform:rotateY(-2deg)_rotateX(2deg)] group will-change-transform [backface-visibility:hidden]">
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-[3rem] shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.2)]" />

                {/* Screen Content */}
                <div className="absolute inset-1 bg-slate-900 rounded-[2.8rem] overflow-hidden flex flex-col border border-white/5">

                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-full z-20 flex items-center justify-center gap-2 px-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-subtle" />
                        <div className="w-1 h-1 rounded-full bg-slate-600" />
                    </div>

                    {/* Status Bar */}
                    <div className="h-12 flex justify-between items-center px-6 pt-2">
                        <span className="text-[11px] text-white font-medium pl-2">9:41</span>
                        <div className="flex gap-1.5 pr-2">
                            <div className="w-4 h-2.5 bg-white rounded-[2px]" />
                            <div className="w-0.5 h-1.5 bg-white/50" />
                        </div>
                    </div>

                    {/* Header: Incoming Call */}
                    <div className="bg-gradient-to-b from-slate-800/50 to-transparent p-6 pt-4 pb-4 text-center relative z-10">
                        <div className="w-14 h-14 mx-auto bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl shadow-lg shadow-cyan-500/20 mb-3 ring-2 ring-white/10">
                            👤
                        </div>
                        <h3 className="text-white font-bold text-base tracking-tight">New Lead</h3>
                        <p className="text-cyan-400 text-xs font-medium uppercase tracking-wide opacity-80 animate-pulse-subtle">AI Agent Active</p>
                    </div>

                    {/* Chat Transcription */}
                    <div className="flex-1 p-5 space-y-4 overflow-hidden flex flex-col justify-end pb-8">
                        {/* Customer Bubble */}
                        <div className="self-start max-w-[90%] p-3.5 rounded-2xl rounded-tl-sm bg-slate-800 border border-white/5 text-xs text-slate-200 animate-fade-in-up [animation-delay:0.5s] opacity-0 fill-mode-forwards shadow-sm">
                            "Hi, are you open? Need an emergency repair."
                        </div>

                        {/* AI Bubble */}
                        <div className="self-end max-w-[90%] p-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-br from-cyan-600 to-blue-600 text-xs text-white animate-fade-in-up [animation-delay:1.5s] opacity-0 fill-mode-forwards shadow-md">
                            "Yes! We have a technician nearby. Can you share your address?"
                        </div>

                        {/* Customer Bubble 2 */}
                        <div className="self-start max-w-[90%] p-3.5 rounded-2xl rounded-tl-sm bg-slate-800 border border-white/5 text-xs text-slate-200 animate-fade-in-up [animation-delay:2.5s] opacity-0 fill-mode-forwards shadow-sm">
                            "123 Main St. Can they come now?"
                        </div>

                        {/* AI Bubble 2 - Booking */}
                        <div className="self-end max-w-[90%] p-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-br from-cyan-600 to-blue-600 text-xs text-white animate-fade-in-up [animation-delay:3.5s] opacity-0 fill-mode-forwards shadow-md">
                            "Confirmed. Technician dispatched. Arrival in 15 mins."
                        </div>
                    </div>
                </div>

                {/* Floating Notification - Job Booked */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 p-4 rounded-2xl shadow-2xl animate-fade-in-up [animation-delay:4.5s] opacity-0 fill-mode-forwards text-center z-30">
                    <div className="w-10 h-10 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                        <span className="text-green-400 text-lg">✓</span>
                    </div>
                    <div className="text-white font-bold text-base">Job Booked!</div>
                    <div className="text-slate-400 text-xs mt-1">Synced to Calendar</div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -right-8 top-1/4 bg-slate-900 border border-slate-700/50 p-4 rounded-xl shadow-xl animate-float [animation-delay:2s]">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">🕒</div>
                    <div>
                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Availability</div>
                        <div className="text-sm font-bold text-white">24/7 Active</div>
                    </div>
                </div>
            </div>

            <div className="absolute -left-10 bottom-1/3 bg-slate-900 border border-slate-700/50 p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">💰</div>
                    <div>
                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Revenue Saved</div>
                        <div className="text-sm font-bold text-white">+$12,400/mo</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
