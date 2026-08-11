import { PERSONAL_INFO } from "../constants";
import { IconMail, IconPhone, IconPin } from "./Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="w-[80%] max-w-7xl mx-auto">

        <div className="text-center mb-16 fade-up">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900">Contact Me</h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Let's work together</h3>
              <p className="text-zinc-500 font-medium leading-relaxed max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <IconMail />, title: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                { icon: <IconPhone />, title: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
                { icon: <IconPin />, title: "Location", value: PERSONAL_INFO.location, href: null },
              ].map((item, idx) => (
                <div key={idx} className="contact-item flex items-center gap-5 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-zinc-900 font-bold hover:text-blue-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-zinc-900 font-bold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-100">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Send me a message</h3>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-600">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-600">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-600">Message</label>
                <textarea rows={4} placeholder="How can I help you?" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
