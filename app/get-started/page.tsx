import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Get Started — Submit Your Billboard Campaign Brief",
  description:
    "Submit your billboard campaign brief to FastBillboards. Tell us your budget, market, and goals — we'll handle the rest. Free strategy call included.",
};

export default function GetStartedPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,214,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,10,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-accent/10 border border-yellow-accent/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-yellow-accent text-sm font-semibold">
              Free to submit — no commitment
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tell Us About Your Campaign
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Fill out the brief below. We&apos;ll reach out within 24 hours to
            schedule your free strategy call and kick off the negotiation
            process.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 pb-24 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-navy-light border border-white/10 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">
                  Campaign Brief
                </h2>
                <LeadForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What Happens Next */}
              <div className="bg-navy-light border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-5">
                  What Happens Next
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "We review your brief",
                      desc: "We read every submission and respond within 24 hours — usually much faster.",
                    },
                    {
                      step: "2",
                      title: "Free strategy call",
                      desc: "We schedule a 30-minute call to align on your campaign goals and market.",
                    },
                    {
                      step: "3",
                      title: "Negotiation begins",
                      desc: "After the call, we start vendor outreach. Options back to you within 5–7 business days.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-7 h-7 bg-yellow-accent text-navy font-black text-sm rounded-full flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {item.title}
                        </p>
                        <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">
                      Satisfaction Guarantee
                    </p>
                    <p className="text-white/60 text-xs leading-relaxed">
                      If we can&apos;t beat your existing quotes, we refund
                      your $1,000. Full stop.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-navy-light border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-3 text-sm">
                  Prefer to Talk First?
                </h3>
                <p className="text-white/50 text-xs mb-4 leading-relaxed">
                  Call or email us directly and we&apos;ll walk you through the
                  process before you submit anything.
                </p>
                <a
                  href="mailto:hello@fastbillboards.com"
                  className="block text-yellow-accent hover:text-yellow-light text-sm font-semibold transition-colors mb-2"
                >
                  hello@fastbillboards.com
                </a>
                <a
                  href="tel:+18005550199"
                  className="block text-yellow-accent hover:text-yellow-light text-sm font-semibold transition-colors"
                >
                  (800) 555-0199
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
