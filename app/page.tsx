import Image from "next/image";
import CalBooking from "@/components/CalBooking";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollIndicator from "@/components/ScrollIndicator";
import Snowfall from "@/components/Snowfall";
import PhoneDemo from "@/components/PhoneDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden bg-slate-950">
      {/* 1. Hero Section */}
      <section id="home" className="relative w-full min-h-screen pt-26 pb-12 overflow-hidden border-b border-white/5 bg-slate-950 flex flex-col justify-center">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none transform-gpu translate-z-0" />

        <Snowfall />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center py-12 lg:py-0">
          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                AI Call Agents for service businesses (24/7)
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
              Stop missing calls.{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-1 inline-block">
                Start booking more jobs.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Revalanch installs AI Call Agents that answer <strong className="text-white">100% of incoming calls</strong>, qualify customers, and book jobs automatically - so you can capture every opportunity and scale your revenue 24/7.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="#demo"
                  className="group relative px-8 py-3.5 rounded-xl bg-cyan-600 text-white font-bold text-lg shadow-lg hover:bg-cyan-500 hover:shadow-cyan-500/30 transition-all text-center overflow-hidden"
                >
                  <span>Book a 15-minute demo</span>
                </a>
              </div>
            </div>


            {/* Claim Block */}
            <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-950/10 text-left">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Building the <strong className="text-white">autonomous enterprise</strong> of tomorrow.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>We automate the busywork so you can <strong className="text-white">focus on growing</strong> your business.</span>
                </li>
              </ul>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
              {[
                "Zero missed opportunities",
                "Infinite scalability",
                "Total automation",
              ].map((text, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-slate-400">
                  {text}
                </div>
              ))}
            </div>
          </div>

          <PhoneDemo />
        </div>

        <ScrollIndicator />
      </section>

      {/* 2. How It Works Section */}
      <section id="how-it-works" className="w-full py-24 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-slate-900/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              { num: "1", title: "We connect your call flow", text: "Forward missed calls - or all calls - to the AI agent.", color: "bg-cyan-600" },
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
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            What happens when you stop missing calls
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "20% → 0%", label: "Missed Calls", desc: "Service business reduced missed calls to zero." },
              { stat: "+40%", label: "Revenue Increase", desc: "Business doubled revenue by fixing call handling." },
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
            <div>
              <a href="#demo" className="text-cyan-400 font-bold hover:underline">Book a demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="w-full py-24 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What the AI handles for you
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything around inbound calls - so every lead turns into a booked job.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "24/7 AI call answering", desc: "Every call picked up in seconds.", icon: "📞" },
            { title: "Lead qualification", desc: "Filters spam, captures intent, collects details.", icon: "🎯" },
            { title: "Job booking", desc: "Books directly into your calendar or workflow.", icon: "📅" },
            { title: "Missed-call recovery", desc: "Automated SMS follow-ups.", icon: "💬" },
            { title: "CRM & reporting", desc: "Every call logged and measured.", icon: "📊" },

          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/50 to-transparent hover:from-slate-800/50 transition-colors group">
              <div className="text-4xl mb-6 bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-300 shadow-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Booking Section */}
      <section id="demo" className="w-full py-24 relative border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-cyan-950/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 text-center relative z-10">
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
      <section id="faq" className="w-full py-24 max-w-3xl mx-auto px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            { q: "Will the AI sound natural?", a: "Yes. We use the latest voice AI models that simulate human pauses, intonation, and latency. Most callers don't realize they're speaking to an AI." },
            { q: "What if the AI says something wrong?", a: "It strictly follows your playbook. We program guardrails so it only answers based on your approved data. If it’s unsure, it takes a message rather than guessing." },
            { q: "Why shouldn't I just hire a receptionist?", a: "A receptionist costs a full salary, goes home at 5 PM, and can only handle one call at a time. Revalanch works 24/7, scales infinitely, and costs a fraction of the price." },
            { q: "Will my customers hate talking to a robot?", a: "Customers hate voicemail. They appreciate instant answers. Because our AI sounds human and actually solves their problem (booking, quoting, etc.), satisfaction is often higher than with busy human staff." },
            { q: "Is it really worth the cost?", a: "Ask yourself: what is one qualified lead worth? If the AI rescues even one missed call per month, it usually pays for itself. The rest is pure profit." },
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
            <div className="relative w-[38px] h-[38px] flex items-center justify-center">
              {/* Absolute Background Circle - Offset Bottom Right */}
              <div className="absolute bottom-[8px] right-[3px] w-[26px] h-[26px] rounded-full bg-white border border-slate-200 shadow-md -z-10 transition-transform duration-300" />
              <Image
                src="/logo.svg"
                alt="Revalanch Logo"
                width={38}
                height={38}
                className="w-[38px] h-[38px] object-contain drop-shadow-lg relative z-10 transition-transform duration-300"
              />
            </div>
            <span className="text-lg font-bold text-slate-400 tracking-tight">
              Revalanch
            </span>
          </div>
          <p className="text-slate-500 font-medium">Revenue that snowballs - automatically.</p>
        </div>
        <p className="text-sm opacity-50">&copy; {new Date().getFullYear()} Revalanch. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </main >
  );
}
