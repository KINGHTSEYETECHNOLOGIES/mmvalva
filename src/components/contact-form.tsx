"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, X } from "lucide-react";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "26682e51-bd41-481e-90bd-ac4cf28605f2";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  function showToast(type: "success" | "error", message: string) {
    setToast({ type, message });
    window.setTimeout(() => setToast(null), 4500);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Inquiry from mmvalva.com");

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        showToast("success", "Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        showToast("error", data?.message || "Unable to send message. Please try again.");
      }
    } catch {
      showToast("error", "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      {toast ? (
        <div className="fixed right-4 top-24 z-[60] w-[min(92vw,430px)] animate-in slide-in-from-top-2 duration-300">
          <div
            className={`rounded-xl border p-4 shadow-2xl backdrop-blur ${
              toast.type === "success"
                ? "border-emerald-200 bg-emerald-50/95"
                : "border-rose-200 bg-rose-50/95"
            }`}
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 rounded-full p-1 ${
                  toast.type === "success" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertCircle className="h-5 w-5" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-black uppercase tracking-wider text-slate-900">
                  {toast.type === "success" ? "Message Sent" : "Submission Failed"}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">{toast.message}</p>
              </div>
              <button
                type="button"
                onClick={() => setToast(null)}
                className="rounded p-1 text-slate-500 transition-colors hover:bg-white/70 hover:text-slate-800"
                aria-label="Close notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <form className="grid gap-6 md:grid-cols-2" aria-label="Inquiry form" onSubmit={handleSubmit}>
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-xs font-bold text-slate-700 uppercase tracking-widest">
          Company Name *
        </label>
        <input
          id="company"
          name="company"
          className="border border-slate-300 bg-white p-4 text-slate-900 focus:border-red-700 outline-none transition-colors rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-widest">
          Contact Person *
        </label>
        <input
          id="name"
          name="name"
          className="border border-slate-300 bg-white p-4 text-slate-900 focus:border-red-700 outline-none transition-colors rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-widest">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="border border-slate-300 bg-white p-4 text-slate-900 focus:border-red-700 outline-none transition-colors rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-widest">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          className="border border-slate-300 bg-white p-4 text-slate-900 focus:border-red-700 outline-none transition-colors rounded"
        />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="application_model" className="text-xs font-bold text-slate-700 uppercase tracking-widest">
          Application or Engine Model *
        </label>
        <input
          id="application_model"
          name="application_model"
          className="border border-slate-300 bg-white p-4 text-slate-900 focus:border-red-700 outline-none transition-colors rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-widest">
          Required Volume & Specifications *
        </label>
        <textarea
          id="message"
          name="message"
          className="min-h-[160px] border border-slate-300 bg-white p-4 text-slate-900 focus:border-red-700 outline-none transition-colors rounded resize-y"
          required
        />
      </div>

        <button
          className="inline-flex justify-center items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-wider px-8 py-4 rounded transition-colors md:col-span-2 md:justify-self-start disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Details"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
