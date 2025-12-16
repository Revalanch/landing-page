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
                AI Call Agents for service businesses (24/7)
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
              Stop missing calls.{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Start booking more jobs.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Revalanch installs AI Call Agents that answer <strong className="text-white">100% of incoming calls</strong>, qualify customers, and book jobs automatically — so you never lose revenue when you’re busy or unavailable.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#demo"
                  className="group relative px-8 py-3.5 rounded-xl bg-cyan-600 text-white font-bold text-lg shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/30 transition-all text-center overflow-hidden"
                >
                  <span>Book a 15-minute demo</span>
                </a>
                <a
                  href="#live-demo"
                  className="group px-8 py-3.5 rounded-xl border border-slate-700 bg-transparent text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all text-center"
                >
                  Hear the AI in action
                </a>
              </div>
              <p className="text-sm font-bold text-red-400/80 tracking-wide uppercase text-center lg:text-left pl-1">
                Every missed call is lost revenue.
              </p>
            </div>


            {/* Claim Block */}
            <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/10 text-left">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>If you handle ~200 calls per week, we can save you <strong className="text-white">$5,000 in your first week</strong></span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span><strong className="text-white">100% performance-based</strong> — you only pay from revenue we generate</span>
                </li>
              </ul>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
              {[
                "Answer 100% of calls",
                "Increase close rates 20–40%",
                "Performance-based pricing",
              ].map((text, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-400">
                  {text}
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
                    <div className="p-2 bg-red-500/20 text-red-400 rounded-md">📞</div>
                    <div>
                      <div className="text-xs text-slate-400">Missed Calls</div>
                      <div className="text-sm font-bold text-white">0%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 border border-white/5">
                    <div className="p-2 bg-green-500/20 text-green-400 rounded-md">📈</div>
                    <div>
                      <div className="text-xs text-slate-400">Close Rate</div>
                      <div className="text-sm font-bold text-white">↑ 20–40%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/50 border border-white/5">
                    <div className="p-2 bg-blue-500/20 text-blue-400 rounded-md">💰</div>
                    <div>
                      <div className="text-xs text-slate-400">Revenue Lift</div>
                      <div className="text-sm font-bold text-white">↑ up to 40%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Awareness Section */}
      <section className="w-full py-16 bg-slate-900 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Missed calls are silently killing your revenue
          </h2>
          <div className="grid gap-6 text-left max-w-2xl mx-auto mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">✕</div>
              <p className="text-slate-300 text-lg">Customers don’t leave voicemails — they call the next business.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">✕</div>
              <p className="text-slate-300 text-lg">Most service businesses miss 15–30% of inbound calls.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">✕</div>
              <p className="text-slate-300 text-lg">That’s not a call problem — it’s a revenue leak.</p>
            </div>
          </div>
          <p className="text-xl font-medium text-cyan-400">
            We fix this by answering <strong className="font-bold text-white">every call</strong>, instantly.
          </p>
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
              { num: "1", title: "We connect your call flow", text: "Forward missed calls — or all calls — to the AI agent.", color: "bg-cyan-600" },
              { num: "2", title: "AI answers and qualifies instantly", text: "Understands job type, urgency, and location.", color: "bg-blue-600" },
              { num: "3", title: "Jobs get booked or followed up", text: "Calendar updates, SMS confirmations, CRM logging.", color: "bg-purple-600" },
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

      {/* 3. Proof Section */}
      <section id="proof" className="w-full py-24 bg-slate-950 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            What happens when you stop missing calls
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "20% → 0%", label: "Missed Calls", desc: "A locksmith reduced missed calls to zero." },
              { stat: "+40%", label: "Revenue Increase", desc: "One business doubled revenue by fixing call handling." },
              { stat: "20–40%", label: "Close Rate Lift", desc: "Instant answering boosts conversion rates." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{item.stat}</div>
                <div className="font-bold text-white mb-2">{item.label}</div>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <p className="text-slate-300 font-medium">Want to see this for your business?</p>
            <div className="flex gap-3">
              <a href="#demo" className="text-cyan-400 font-bold hover:underline">Book a demo</a>
              <span className="text-slate-600">or</span>
              <a href="#live-demo" className="text-white font-bold hover:underline">Hear the AI live</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="w-full py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What the AI handles for you
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything around inbound calls — so every lead turns into a booked job.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "24/7 AI call answering", desc: "Every call picked up in seconds.", icon: "📞" },
            { title: "Lead qualification", desc: "Filters spam, captures intent, collects details.", icon: "🎯" },
            { title: "Job booking", desc: "Books directly into your calendar or workflow.", icon: "📅" },
            { title: "Missed-call recovery", desc: "Automated SMS follow-ups.", icon: "💬" },
            { title: "CRM & reporting", desc: "Every call logged and measured.", icon: "📊" },
            { title: "Live test number", desc: "Let prospects hear the AI without a meeting.", icon: "🤖" },
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-transparent hover:from-slate-800/50 transition-colors group">
              <div className="text-4xl mb-6 bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Live AI Experience Section */}
      <section id="live-demo" className="w-full py-24 bg-slate-800/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Hear the AI in action
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Call a real number and experience the same AI that service businesses use to stop missing calls and increase revenue.
          </p>

          <div className="inline-block p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-2">Call this number now</p>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4 font-mono">
              +1 (555) 012-3456
            </div>
            <p className="text-cyan-400 font-medium animate-pulse">
              ● Live Demo Active
            </p>
            <p className="text-slate-500 text-xs mt-6">
              No call with us required. Just hear the AI.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Performance-based Model (Pricing) */}
      <section id="pricing" className="w-full py-24 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            You only pay when it works
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            We operate on a pure performance model. We invest in building your system, and we only earn when you succeed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { title: "No retainers", icon: "🚫" },
              { title: "No long-term contracts", icon: "📄" },
              { title: "Revenue share only", icon: "🤝" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-white">{item.title}</div>
              </div>
            ))}
          </div>

          <div className="p-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 max-w-2xl mx-auto">
            <div className="bg-slate-950 rounded-[20px] p-8 text-center">
              <p className="text-xl sm:text-2xl font-bold text-white mb-6">
                "If it doesn’t make you money, you don’t pay."
              </p>
              <a href="#demo" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl bg-white text-slate-900 hover:bg-cyan-50 transition-colors">
                Talk about setup
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Booking Section */}
      <section id="demo" className="w-full py-24 relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-cyan-950/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Book a 15-minute demo
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            We’ll walk you through how the AI handles calls and estimate how much revenue you’re currently losing from missed calls.
          </p>

          <div className="mx-auto w-full">
            <CalBooking />
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className="w-full py-24 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            { q: "Will the AI sound natural?", a: "Yes. We use the latest voice AI models that simulate human pauses, intonation, and latency. Most callers don't realize they're speaking to an AI." },
            { q: "What if the AI can’t handle a call?", a: "The AI is trained to intelligently hand off complex calls to a human staff member or take a detailed message if no one is available." },
            { q: "Can I use this only for missed calls?", a: "Absolutely. You can set it up to answer only when your line is busy or after-hours, ensuring you never miss a lead." },
            { q: "How fast can we go live?", a: "We can typically build and deploy your custom AI agent within 3-5 business days." },
            { q: "How do you track revenue generated?", a: "We integrate with your CRM to track which leads were booked by the AI and which ones converted to paid jobs." },
          ].map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="font-bold text-white text-lg mb-2">{faq.q}</h3>
              <p className="text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 text-center text-slate-600 border-t border-slate-900 bg-slate-950 mt-auto">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs">
              R
            </div>
            <span className="text-lg font-bold text-slate-400 tracking-tight">
              Revalanch
            </span>
          </div>
          <p className="text-slate-500 font-medium">Revenue that snowballs — automatically.</p>
        </div>
        <p className="text-sm opacity-50">&copy; {new Date().getFullYear()} Revalanch. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </main>
  );
}
