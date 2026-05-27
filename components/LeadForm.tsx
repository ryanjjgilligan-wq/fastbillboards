"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  budget_range: string;
  target_market: string;
  billboard_type: string;
  campaign_start: string;
  existing_quotes: string;
  referral_source: string;
}

export default function LeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget_range: "",
    target_market: "",
    billboard_type: "",
    campaign_start: "",
    existing_quotes: "",
    referral_source: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      router.push("/thank-you");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-navy-lighter border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-yellow-accent/60 focus:ring-1 focus:ring-yellow-accent/30 transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-white/80 mb-2";
  const selectClass = inputClass + " cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-yellow-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-yellow-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="budget_range" className={labelClass}>
          Campaign Budget Range <span className="text-yellow-accent">*</span>
        </label>
        <select
          id="budget_range"
          name="budget_range"
          required
          value={formData.budget_range}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="">Select your budget range</option>
          <option value="Under $5k">Under $5k</option>
          <option value="$5k–$15k">$5k–$15k</option>
          <option value="$15k–$30k">$15k–$30k</option>
          <option value="$30k–$75k">$30k–$75k</option>
          <option value="$75k+">$75k+</option>
        </select>
      </div>

      <div>
        <label htmlFor="target_market" className={labelClass}>
          Target Market / City or Region{" "}
          <span className="text-yellow-accent">*</span>
        </label>
        <input
          id="target_market"
          name="target_market"
          type="text"
          required
          value={formData.target_market}
          onChange={handleChange}
          placeholder="e.g., Austin TX, Dallas metro area, Southeast US"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="billboard_type" className={labelClass}>
          Billboard Type Preference
        </label>
        <select
          id="billboard_type"
          name="billboard_type"
          value={formData.billboard_type}
          onChange={handleChange}
          className={selectClass}
        >
          <option value="">Select billboard type</option>
          <option value="Static">Static</option>
          <option value="Digital">Digital</option>
          <option value="Both">Both</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="campaign_start" className={labelClass}>
          Desired Campaign Start Date
        </label>
        <input
          id="campaign_start"
          name="campaign_start"
          type="text"
          value={formData.campaign_start}
          onChange={handleChange}
          placeholder="e.g., July 2026, ASAP, Q3 2026"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="existing_quotes" className={labelClass}>
          Do you have any existing quotes or vendor conversations?
        </label>
        <textarea
          id="existing_quotes"
          name="existing_quotes"
          value={formData.existing_quotes}
          onChange={handleChange}
          placeholder="Share any quotes you've already received, vendors you've spoken with, etc."
          className={inputClass + " resize-none"}
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="referral_source" className={labelClass}>
          How did you hear about FastBillboards?
        </label>
        <input
          id="referral_source"
          name="referral_source"
          type="text"
          value={formData.referral_source}
          onChange={handleChange}
          placeholder="Google, friend referral, LinkedIn, etc."
          className={inputClass}
        />
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-accent hover:bg-yellow-light text-navy font-bold text-base py-4 rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit — Get Your Free Strategy Call"}
      </button>
      <p className="text-center text-xs text-white/40">
        No commitment. We&apos;ll reach out within 24 hours to schedule your
        free kickoff call.
      </p>
    </form>
  );
}
