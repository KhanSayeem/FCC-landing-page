import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Mail, MessageCircle, ArrowLeft } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8801949317789?text=Hi!%20I%27m%20interested%20in%20Financial%20Command%20Center%20AI', '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using Web3Forms API (free service)
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

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setShowEmailForm(false);
          setFormData({
            email: "",
            subject: "",
            message: "",
          });
          onOpenChange(false);
        }, 3000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again or email us directly at sayeem@daywinlabs.com");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setShowEmailForm(false);
    setIsSubmitted(false);
    onOpenChange(false);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="text-center" onClose={handleClose}>
          <div className="py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="mb-2">Message Sent!</DialogTitle>
            <DialogDescription className="text-base">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (showEmailForm) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-xl" onClose={handleClose}>
          <DialogHeader>
            <button
              onClick={() => setShowEmailForm(false)}
              className="mb-2 flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to options
            </button>
            <DialogTitle>Send us an Email</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Financial Command Center AI - Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowEmailForm(false)}
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-100">Contact Us</DialogTitle>
          <DialogDescription className="text-slate-400">
            Choose how you'd like to reach out. We typically respond within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Button
            onClick={() => setShowEmailForm(true)}
            className="w-full h-auto py-4 flex items-start gap-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 transition-all"
            variant="outline"
          >
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Mail className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex-1 text-left space-y-1">
              <div className="font-semibold text-slate-100">Email Us</div>
              <div className="text-sm text-slate-400">sayeem@daywinlabs.com</div>
              <div className="text-xs text-slate-500">Best for detailed inquiries and documentation</div>
            </div>
          </Button>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full h-auto py-4 flex items-start gap-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-green-500/50 transition-all"
            variant="outline"
          >
            <div className="p-2 rounded-lg bg-green-500/10">
              <MessageCircle className="h-5 w-5 text-green-400" />
            </div>
            <div className="flex-1 text-left space-y-1">
              <div className="font-semibold text-slate-100">WhatsApp</div>
              <div className="text-sm text-slate-400">+880 1949-317789</div>
              <div className="text-xs text-slate-500">Quick questions and instant responses</div>
            </div>
          </Button>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">
            Available Monday - Friday, 9 AM - 6 PM (GMT+6)<br />
            We aim to respond to all inquiries within 24 hours
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
