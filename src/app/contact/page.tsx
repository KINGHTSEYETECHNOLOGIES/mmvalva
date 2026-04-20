import type { Metadata } from "next";

import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | M.M. Valves",
  description:
    "Contact M.M. Valves for product inquiry, bulk orders, and export requirements.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-slate-900 pt-24 pb-16 border-b-4 border-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Start the Engineering Discussion
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Share your product dimensions, volume requirements, and application specifics. Our technical team will respond with a commercial proposal.
          </p>
        </div>
      </section>

      {/* CORE INFO */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            
            {/* Form Section */}
            <div className="bg-slate-50 p-8 lg:p-12 border border-slate-200 rounded-lg">
              <h2 className="text-2xl font-black uppercase text-slate-900 mb-8 border-b-2 border-red-700 inline-block pb-2">
                Technical Inquiry
              </h2>
              <ContactForm />
            </div>

            {/* Contact Details Section */}
            <div className="bg-slate-900 p-8 lg:p-12 border border-slate-800 rounded-lg text-white">
              <h2 className="text-2xl font-black uppercase text-white mb-8 border-b-2 border-red-700 inline-block pb-2">
                Corporate Office
              </h2>
              
              <ul className="space-y-10">
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded text-red-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm text-slate-400 mb-2">Headquarters</h3>
                    <p className="text-lg leading-relaxed text-slate-200">
                      2 Vaidyavadi, Gondal Road<br/>Rajkot - 360 002<br/>Gujarat, India
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded text-red-500">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm text-slate-400 mb-2">Sales & Export Inquiries</h3>
                    <a href="mailto:jayvirsinh@mmvalves.com" className="text-lg leading-relaxed text-slate-200 hover:text-red-400 transition-colors">
                      jayvirsinh@mmvalves.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded text-red-500">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-sm text-slate-400 mb-2">Direct Line</h3>
                    <a href="tel:+919429546918" className="text-lg leading-relaxed text-slate-200 hover:text-red-400 transition-colors block">
                      +91 9429546918
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
