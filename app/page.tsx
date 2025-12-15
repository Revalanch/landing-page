import Image from "next/image";
import CalBooking from "@/components/CalBooking";
import ScrollToTop from "@/components/ScrollToTop";
import Snowfall from "@/components/Snowfall";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-slate-950">
      {/* 1. Hero Section */}
      <section id="home" className="relative w-full min-h-screen pt-20 overflow-hidden border-b border-white/5 bg-slate-950 flex flex-col justify-center">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

        <Snowfall />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
                Automation agency for modern businesses
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
              Automations that make your revenue{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                snowball.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Revalanch designs and builds end-to-end automations that capture more leads, close more deals, and free your team from busywork.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#demo"
                className="group relative px-8 py-3.5 rounded-xl bg-cyan-600 text-white font-bold text-lg shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/30 transition-all text-center overflow-hidden"
              >
                <span>Book a 15-minute demo</span>
              </a>
              <a
                href="#how-it-works"
                className="group px-8 py-3.5 rounded-xl border border-slate-700 bg-transparent text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all text-center"
              >
                See how it works
              </a>
            </div>

            <div className="mt-2 text-sm text-slate-500 font-medium">
              Clients recover <span className="text-green-400">20–40%</span> more revenue within the first 30 days.
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {[
                { title: "Lead & Sales", text: "Stop losing leads to slow follow-ups." },
                { title: "Ops & Back-office", text: "Automate repetitive tasks across tools." },
                { title: "Done-for-you", text: "We design, build, and maintain." },
              ].map((f, i) => (
                <div key={i} className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-left">
                  <h3 className="font-bold text-slate-200 text-sm">{f.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{f.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual (Desktop) */}
          <div className="relative justify-center items-center hidden lg:flex h-[500px] perspective-[1000px]">
            {/* Main Abstract Card */}
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-500">
              {/* Decorative "Avalanche Ball" Gradient */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="h-3 w-20 bg-slate-800 rounded-full" />
                  <div className="h-3 w-8 bg-green-500/20 rounded-full" />
                </div>

                {/* Metric Cards inside Visual */}
                <div className="space-y-4 my-auto">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 border border-white/5">
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-md">⚡</div>
                    <div>
                      <div className="text-xs text-slate-400">Avg. Response Time</div>
                      <div className="text-sm font-bold text-white">&lt; 2 min</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 border border-white/5">
                    <div className="p-2 bg-green-500/20 text-green-400 rounded-md">💰</div>
                    <div>
                      <div className="text-xs text-slate-400">Tasks Eliminated</div>
                      <div className="text-sm font-bold text-white">100+ / month</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 border border-white/5">
                    <div className="p-2 bg-purple-500/20 text-purple-400 rounded-md">🔄</div>
                    <div>
                      <div className="text-xs text-slate-400">Uptime</div>
                      <div className="text-sm font-bold text-white">24/7 Always On</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works Section */}
      <section id="how-it-works" className="w-full py-24 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-slate-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              { num: "1", title: "Audit & map your workflows", text: "We review your current tools, processes, and bottlenecks.", color: "bg-cyan-600" },
              { num: "2", title: "Design & build automations", text: "We connect your apps, define triggers, and build robust automations.", color: "bg-blue-600" },
              { num: "3", title: "Monitor, optimize & scale", text: "We track performance, fix edge cases, and extend automations as you grow.", color: "bg-purple-600" },
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className={`absolute -top-5 -left-5 w-12 h-12 rounded-full ${step.color} flex items-center justify-center font-bold text-white shadow-lg text-lg`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-white">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="w-full py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What we automate
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From marketing to support, we build the systems that run your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Lead capture & CRM", desc: "Forms, landing pages, and CRMs synced automatically.", icon: "🎯" },
            { title: "Sales pipeline & follow-up", desc: "Automated email/SMS touchpoints and task creation.", icon: "🚀" },
            { title: "Customer onboarding", desc: "Welcome flows, document collection, and setup.", icon: "🤝" },
            { title: "Support & operations", desc: "Ticket routing, internal notifications, status updates.", icon: "⚙️" },
            { title: "Reporting & analytics", desc: "Dashboards and scheduled reports.", icon: "📊" },
            { title: "AI agents & assistants", desc: "Chat or voice assistants plugged into your systems.", icon: "🤖" },
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-transparent hover:from-slate-800/50 transition-colors group">
              <div className="text-4xl mb-6 bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Pricing Section */}
      <section id="pricing" className="w-full py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Simple, transparent engagement
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            We keep pricing simple: start with an implementation project, then choose an ongoing plan that fits how many automations and systems you run.
          </p>

          <div className="max-w-md mx-auto p-1 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
            <div className="bg-slate-950/80 rounded-[22px] p-8 sm:p-10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Done-for-you automation</h3>
              <div className="flex items-baseline justify-center gap-1 mt-4 mb-2">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <p className="text-slate-500 text-sm mb-8">Tailored to your complexity</p>

              <ul className="text-left space-y-4 mb-10">
                {[
                  "Implementation project (One-time)",
                  "Ongoing automation management",
                  "Strategy & architecture",
                  "Build & integration",
                  "Monitoring & support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">✓</div>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#demo" className="block w-full py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-cyan-50 transition-colors shadow-lg shadow-white/5">
                Talk about pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Booking Section */}
      <section id="demo" className="w-full py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Book a 15-minute demo
          </h2>
          <p className="text-lg text-slate-400 mb-12">
            No commitment. No upfront fees. We’ll show you where automations can unlock the most revenue for you.
          </p>

          <div className="mx-auto w-full">
            <CalBooking />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 text-center text-slate-600 border-t border-slate-900 bg-slate-950 mt-auto">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs">
            R
          </div>
          <span className="text-lg font-bold text-slate-400 tracking-tight">
            Revalanch
          </span>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Revalanch. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </main>
  );
}
