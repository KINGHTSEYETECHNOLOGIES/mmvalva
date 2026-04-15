import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | M.M. Valves",
  description: "Privacy policy for M.M. Valves website visitors and inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            We respect your privacy and use the information you share only to respond to inquiries, provide support,
            and improve our website experience.
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-slate-400">Last updated: April 15, 2026</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Information We Collect</h2>
            <p className="leading-7">
              When you contact us through the website, we may collect your name, company name, email address, phone
              number, product requirements, and any other details you choose to provide.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">How We Use Information</h2>
            <p className="leading-7">
              We use your information to respond to inquiries, prepare quotations, support ongoing communication, and
              maintain internal business records. We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Cookies and Analytics</h2>
            <p className="leading-7">
              Our website may use basic cookies or analytics tools to understand visitor behavior and improve site
              performance. These tools do not give us access to sensitive personal data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Data Security</h2>
            <p className="leading-7">
              We take reasonable technical and organizational steps to protect the information we receive from
              unauthorized access, misuse, or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Contact Us</h2>
            <p className="leading-7">
              If you have any questions about this privacy policy, please contact us through the details listed on our
              Contact page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}