import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | M.M. Valves",
  description: "Terms of service for the M.M. Valves website and inquiries.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500">Terms of Service</p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">Terms of Service</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Please review these terms before using our website or submitting an inquiry.
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-slate-400">Last updated: April 15, 2026</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Website Use</h2>
            <p className="leading-7">
              This website is provided for general information about M.M. Valves, our products, and our manufacturing
              capabilities. You agree not to misuse the website or attempt unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Inquiry Submissions</h2>
            <p className="leading-7">
              When you submit an inquiry, you confirm that the information provided is accurate and that you are
              authorized to share it on behalf of your company or organization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Product Information</h2>
            <p className="leading-7">
              Product details, images, and descriptions on this website are for reference only and may change without
              prior notice. Final specifications are confirmed in formal quotation or order documents.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Limitation of Liability</h2>
            <p className="leading-7">
              M.M. Valves is not liable for damages resulting from the use of this website, interruptions in service, or
              reliance on information provided here without written confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">Changes to These Terms</h2>
            <p className="leading-7">
              We may update these terms from time to time. Continued use of the website after updates means you accept
              the revised terms.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}