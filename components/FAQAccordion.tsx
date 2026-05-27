"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does FastBillboards make money?",
    answer:
      "We charge a flat $1,000 fee paid by you. We never accept commissions, referral fees, or any compensation from billboard vendors. Our only incentive is getting you the best possible deal.",
  },
  {
    question: "How much can I actually save?",
    answer:
      "Most clients save $2,000–$8,000 per campaign depending on budget and market. On a $20,000 campaign, a typical agency charges $3,000–$4,000 in fees alone. You pay us $1,000 and keep the rest.",
  },
  {
    question: "What markets do you cover?",
    answer:
      "Nationwide. We work with all major OOH vendors including Lamar, Clear Channel, and OUTFRONT as well as hundreds of regional and local independent operators.",
  },
  {
    question: "What if you can't beat my current quote?",
    answer:
      "If we can't negotiate a better deal than what you already have, we'll refund your fee. No questions asked.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most campaigns are fully sourced and negotiated within 5–7 business days from your kickoff call.",
  },
  {
    question: "Do I need a big budget?",
    answer:
      "No. We work with campaigns starting at $2,000 in monthly spend. The smaller your budget, the more our fee pays for itself in savings.",
  },
  {
    question: "What types of billboards do you negotiate?",
    answer:
      "Static bulletins, digital billboards, posters, wallscapes, transit shelters, and airport OOH across all markets.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-white/10 rounded-xl overflow-hidden bg-navy-light"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span
              className="font-semibold text-white text-base"
              itemProp="name"
            >
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === idx ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-yellow-accent text-xl flex-shrink-0 ml-4"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div
                  className="px-6 pb-5 pt-1 text-white/70 leading-relaxed"
                  itemProp="text"
                >
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
