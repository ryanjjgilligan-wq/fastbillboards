import type { Metadata } from "next";
import Link from "next/link";
import SavingsCalculator from "@/components/SavingsCalculator";

export const metadata: Metadata = {
  title: "Pricing — Flat $1,000 Billboard Negotiation Fee",
  description:
    "FastBillboards charges a flat $1,000 fee for complete billboard campaign negotiation. No percentage-based commissions. Full service included. Satisfaction guaranteed.",
};

async function handleCheckout() {
  "use server";
  // This is a server action placeholder — client button handles this
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,214,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,10,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            One fee. Full service. No surprises. This is what honest pricing
            looks like.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16 bg-navy-light">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-navy border-2 border-yellow-accent rounded-2xl p-10 text-center shadow-2xl shadow-yellow-accent/10">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-accent text-navy text-xs font-black px-5 py-1.5 rounded-full tracking-widest uppercase">
                Only Option — Because One Is Enough
              </span>
            </div>

            <div className="mt-4">
              <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-3">
                Billboard Negotiation Concierge
              </p>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-7xl font-black text-yellow-accent">
                  $1,000
                </span>
              </div>
              <p className="text-white/40 text-sm mb-10">
                Flat fee, per campaign. No percentage. No hidden charges.
              </p>

              <ul className="text-left space-y-4 mb-10">
                {[
                  "Free strategy call to map your campaign goals",
                  "Vendor outreach across all relevant operators",
                  "Rate negotiation using insider relationships",
                  "Side-by-side quote comparison package",
                  "Contract review and terms summary",
                  "Production specifications for all boards",
                  "Recommended posting schedule",
                  "5–7 business day turnaround",
                  "Nationwide coverage — all markets",
                  "Satisfaction guarantee (full refund if we can't beat your existing quotes)",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-accent/10 border border-yellow-accent/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-yellow-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <CheckoutButton />

              <p className="text-white/30 text-xs mt-4">
                Payment collected before negotiation begins. Refunded in full if
                we can&apos;t beat your current best quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Our Satisfaction Guarantee
            </h2>
            <p className="text-white/70 leading-relaxed max-w-xl mx-auto">
              If we can&apos;t negotiate a better deal than the quotes you
              already have — or if we can&apos;t find appropriate inventory in
              your target market — we&apos;ll refund your $1,000 in full. No
              questions asked. No fine print. We only win when you win.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-green-400 text-sm font-semibold">
                Full refund guarantee, no time limit
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Calculate Your Savings
            </h2>
            <p className="text-white/60">
              See how much you save vs. a traditional agency at any budget level.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      {/* FAQ Callouts */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Common Pricing Questions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                q: "Is the $1,000 fee in addition to the media cost?",
                a: "Yes. The $1,000 is our service fee for negotiating your campaign. The actual billboard costs (the media you purchase) are paid directly to the vendors — we never touch your media budget.",
              },
              {
                q: "Do you take any commission from vendors?",
                a: "Absolutely not. We never accept referral fees, kickbacks, or commissions from any vendor. Our only compensation is your flat $1,000 fee.",
              },
              {
                q: "What if I want to negotiate multiple campaigns per year?",
                a: "Each campaign is a separate $1,000 engagement. Many clients use us 2–4 times per year and still save dramatically vs. agency fees.",
              },
              {
                q: "When is the $1,000 fee charged?",
                a: "The fee is collected after your strategy call, before we begin vendor outreach. It's secured via Stripe with a full-service money-back guarantee.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-navy-light border border-white/10 rounded-xl p-6"
              >
                <p className="text-white font-semibold mb-2 text-sm">
                  {item.q}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-yellow-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Not Ready to Pay Yet?
          </h2>
          <p className="text-navy/70 text-lg mb-8">
            Submit your campaign brief for free. We&apos;ll respond within 24
            hours with an overview of what&apos;s possible in your market.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
          >
            Submit Your Brief — Free
          </Link>
        </div>
      </section>
    </>
  );
}

// Client component for checkout button
function CheckoutButton() {
  return (
    <CheckoutButtonClient />
  );
}

// We need a separate client component for the checkout button
import CheckoutButtonClient from "@/components/CheckoutButton";
