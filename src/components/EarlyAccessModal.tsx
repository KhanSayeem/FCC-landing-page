import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

interface EarlyAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EarlyAccessModal({ open, onOpenChange }: EarlyAccessModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    tools: "",
    painPoint: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          subject: "New Early Access Application - Financial Command Center AI",
          from_name: "FCC Landing Page",
          to_email: "sayeem@daywinlabs.com",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          revenue: formData.revenue,
          tools: formData.tools,
          painPoint: formData.painPoint,
          message: `
Early Access Application Details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Monthly Revenue: ${formData.revenue}
Current Tools: ${formData.tools}
Pain Point: ${formData.painPoint}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            revenue: "",
            tools: "",
            painPoint: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="text-center" onClose={() => onOpenChange(false)}>
          <div className="py-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
              <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="mb-2">Application Received!</DialogTitle>
            <DialogDescription className="text-base">
              Thank you for your interest. We'll review your application and reach out within 48 hours.
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl" onClose={() => onOpenChange(false)}>
        <DialogHeader>
          <DialogTitle>Apply for Early Access</DialogTitle>
          <DialogDescription>
            Join the pilot program and be among the first 5-10 businesses to experience AI-powered financial automation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="Acme Inc."
            />
          </div>

          <div>
            <label htmlFor="revenue" className="mb-2 block text-sm font-medium text-slate-300">
              Monthly Revenue Range *
            </label>
            <select
              id="revenue"
              name="revenue"
              required
              value={formData.revenue}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select range</option>
              <option value="0-10k">$0 - $10k</option>
              <option value="10k-50k">$10k - $50k</option>
              <option value="50k-100k">$50k - $100k</option>
              <option value="100k-500k">$100k - $500k</option>
              <option value="500k+">$500k+</option>
            </select>
          </div>

          <div>
            <label htmlFor="tools" className="mb-2 block text-sm font-medium text-slate-300">
              Current Financial Tools
            </label>
            <input
              type="text"
              id="tools"
              name="tools"
              value={formData.tools}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="e.g., Stripe, QuickBooks, Xero"
            />
          </div>

          <div>
            <label htmlFor="painPoint" className="mb-2 block text-sm font-medium text-slate-300">
              Biggest Financial Pain Point *
            </label>
            <textarea
              id="painPoint"
              name="painPoint"
              required
              value={formData.painPoint}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              placeholder="What takes the most time or causes the most headaches?"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
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
