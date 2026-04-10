import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | M.M. Valves",
  description:
    "Contact M.M. Valves for product inquiry, bulk orders, and export requirements.",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Start the engineering discussion"
      intro="Share your product dimensions, volume requirements, and application specifics. Our technical team will respond with a commercial proposal."
      mode="hero"
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.1}>
          <form className="grid gap-5 md:grid-cols-2 p-8 rounded-3xl bg-[#f8fbff] border border-line shadow-sm" aria-label="Inquiry form">
            <h3 className="text-xl font-black uppercase text-steel-strong md:col-span-2 mb-2">Technical Inquiry</h3>
            <input className="rounded-xl border border-line bg-white p-4 text-sm text-steel-strong shadow-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Company Name *" required />
            <input className="rounded-xl border border-line bg-white p-4 text-sm text-steel-strong shadow-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Contact Person *" required />
            <input className="rounded-xl border border-line bg-white p-4 text-sm text-steel-strong shadow-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Email Address *" type="email" required />
            <input className="rounded-xl border border-line bg-white p-4 text-sm text-steel-strong shadow-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Phone Number" />
            <input className="rounded-xl border border-line bg-white p-4 text-sm text-steel-strong shadow-sm md:col-span-2 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Application or Engine Model *" required />
            <textarea className="min-h-32 rounded-xl border border-line bg-white p-4 text-sm text-steel-strong shadow-sm md:col-span-2 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Required volume, dimensions, logic specifications... *" required />
            
            <button className="flex min-w-[200px] items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-md hover:bg-accent/90 transition-colors md:justify-self-start" type="submit">
              Submit Details
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-3xl bg-steel-strong p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-600 [mask-image:linear-gradient(0deg,transparent,black)] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6">Corporate Office</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-white/50 mt-1" />
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-1 text-sm text-[#bfd0e2]">Headquarters</h4>
                    <p className="text-sm leading-relaxed text-white/80">123 Industrial Estate Road<br/>Sector 10, New Delhi 110001<br/>India</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 border-t border-white/10 pt-6">
                  <Mail className="h-5 w-5 shrink-0 text-white/50 mt-1" />
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-1 text-sm text-[#bfd0e2]">Sales & Export Inquiries</h4>
                    <a href="mailto:contact@placeholder.com" className="text-sm leading-relaxed text-white/80 hover:text-accent transition-colors break-all">
                      contact@placeholder.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 border-t border-white/10 pt-6">
                  <Phone className="h-5 w-5 shrink-0 text-white/50 mt-1" />
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-1 text-sm text-[#bfd0e2]">Direct Lines</h4>
                    <a href="tel:+910000000000" className="text-sm leading-relaxed text-white/80 hover:text-accent transition-colors block">
                      +91 00 0000 0000
                    </a>
                    <a href="tel:+911111111111" className="text-sm leading-relaxed text-white/80 hover:text-accent transition-colors block mt-1">
                      +91 11 1111 1111
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
