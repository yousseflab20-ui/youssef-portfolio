import { PERSONAL_INFO } from "../constants";
import { IconMail, IconPhone, IconPin } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-[85%] max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <span className="inline-block px-3 py-1 rounded-full glass text-violet-300 text-xs font-bold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left — Contact info */}
          <div className="space-y-6">
            <div className="glass gradient-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">Let's build something great</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-8">
                I'm always open to new opportunities, collaborations, and creative projects. Feel free to reach out — I'll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <IconMail />, title: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                  { icon: <IconPhone />, title: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
                  { icon: <IconPin />, title: "Location", value: PERSONAL_INFO.location, href: null },
                ].map((item, idx) => (
                  <div key={idx} className="contact-item flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-300 font-semibold hover:text-violet-400 transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 font-semibold text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass gradient-border rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Send a message</h3>
            <form className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40 hover:-translate-y-0.5"
              >
                Send Message ✦
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
