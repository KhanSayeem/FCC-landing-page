import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { PolicyPageLayout } from "./PolicyPageLayout";
import { Button } from "../components/ui/button";

const contactOptions = [
  {
    label: "Email",
    value: "sayeem@daywinlabs.com",
    description: "Detailed implementation questions, compliance documents, or enterprise pilots.",
    href: "mailto:sayeem@daywinlabs.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+880 1949-317789",
    description: "Quick status updates, scheduling, or fast follow-up questions.",
    href: "https://wa.me/8801949317789?text=Hi!%20I'm%20interested%20in%20Financial%20Command%20Center%20AI",
    icon: MessageCircle,
  },
];

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
}

export const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({ email: "", subject: "", message: "" });
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
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
      setFormData({ email: "", subject: "", message: "" });
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
        <div className="grid gap-4 md:grid-cols-2">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.label === "WhatsApp" ? "_blank" : undefined}
              rel={option.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="flex h-full items-start gap-4 border border-fcc-border bg-fcc-black p-6 transition hover:border-fcc-accent"
            >
              <div className="border border-fcc-border bg-fcc-panel p-3">
                <option.icon className="h-6 w-6 text-fcc-accent" />
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-[10px] uppercase tracking-[0.2em] text-fcc-gray">{option.label}</p>
                <p className="text-xl font-semibold text-fcc-cream">{option.value}</p>
                <p className="text-fcc-muted">{option.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="space-y-6 border border-fcc-border bg-fcc-black p-8 shadow-fcc-accent">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-fcc-gray">Message us</p>
            <h2 className="mt-2 text-2xl font-semibold text-fcc-cream">Send a note directly from here</h2>
            <p className="text-sm text-fcc-muted">We typically reply within 24 hours during GMT+6 business hours.</p>
          </div>

          {status === "success" && (
            <div className="border border-green-500 bg-green-500/10 p-4 text-sm text-green-200">Message sent! We&apos;ll reply shortly.</div>
          )}

          {status === "error" && (
            <div className="border border-red-500 bg-red-500/10 p-4 text-sm text-red-200">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-fcc-cream" htmlFor="email">
                Your Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-fcc-border bg-fcc-panel px-4 py-3 text-fcc-cream placeholder-fcc-gray focus:border-fcc-accent focus:outline-none"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-fcc-cream" htmlFor="subject">
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-fcc-border bg-fcc-panel px-4 py-3 text-fcc-cream placeholder-fcc-gray focus:border-fcc-accent focus:outline-none"
                placeholder="Financial Command Center AI - Pilot Inquiry"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-fcc-cream" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full border border-fcc-border bg-fcc-panel px-4 py-3 text-fcc-cream placeholder-fcc-gray focus:border-fcc-accent focus:outline-none"
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
                className="flex-1"
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

          <p className="text-center text-xs text-fcc-gray">Available Monday - Friday, 9 AM - 6 PM (GMT+6) - Responses within 1 business day</p>
        </div>
      </div>
    </PolicyPageLayout>
  );
};
