import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { PolicyPageLayout } from "./PolicyPageLayout";
import { Button } from "../components/ui/button";

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5e9c3527-ae34-42ea-abbf-c00ae35ca0de",
          subject: formData.subject,
          from_name: formData.email,
          to_email: "sayeem@daywinlabs.com",
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus("success");
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage("Something went wrong. Please try again or email us at sayeem@daywinlabs.com.");
      setStatus("error");
    }
  };

  return (
    <PolicyPageLayout
      title="Contact Financial Command Center AI"
      subtitle="Book a pilot audit, request a security review, or ask anything about the platform. We respond within one business day."
      heroCtaLabel="Return to Homepage"
    >
      <div className="space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="mailto:sayeem@daywinlabs.com"
            className="flex h-full items-start gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:border-blue-500/50 hover:bg-slate-900/80"
          >
            <div className="rounded-xl bg-blue-500/10 p-3">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
              <p className="text-xl font-semibold text-slate-100">sayeem@daywinlabs.com</p>
              <p className="text-sm text-slate-400">
                Detailed implementation questions, compliance documents, or enterprise pilots.
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/8801949317789?text=Hi!%20I'm%20interested%20in%20Financial%20Command%20Center%20AI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-start gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 transition hover:border-green-500/40 hover:bg-slate-900/80"
          >
            <div className="rounded-xl bg-green-500/10 p-3">
              <MessageCircle className="h-6 w-6 text-green-400" />
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">WhatsApp</p>
              <p className="text-xl font-semibold text-slate-100">+880 1949-317789</p>
              <p className="text-sm text-slate-400">Quick status updates, scheduling, or fast follow-up questions.</p>
            </div>
          </a>
        </div>

        <div className="space-y-6 rounded-2xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-xl shadow-blue-900/10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Message us</p>
            <h2 className="text-2xl font-semibold text-slate-100">Send a note directly from here</h2>
            <p className="text-sm text-slate-400">We typically reply within 24 hours during GMT+6 business hours.</p>
          </div>

          {status === "success" && (
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-200">
              Message sent! We&apos;ll reply shortly.
            </div>
          )}

          {status === "error" && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
                Your Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="subject">
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Financial Command Center AI - Pilot Inquiry"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Tell us about your finance stack, goals, or anything else."
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg" className="flex-1" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="flex-1 border-slate-700 text-slate-200 hover:bg-slate-900"
                onClick={() =>
                  setFormData({
                    email: "",
                    subject: "",
                    message: "",
                  })
                }
              >
                Clear Form
              </Button>
            </div>
          </form>

          <p className="text-center text-xs text-slate-500">
            Available Monday - Friday, 9 AM - 6 PM (GMT+6) • Responses within 1 business day
          </p>
        </div>
      </div>
    </PolicyPageLayout>
  );
};
