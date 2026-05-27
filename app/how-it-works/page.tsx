import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — Billboard Negotiation Concierge Service",
  description:
    "See exactly how FastBillboards negotiates your billboard campaign. 5-step process, 5–7 business day turnaround, and a full deliverables package. Flat $1,000 fee.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,214,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,10,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-accent/10 border border-yellow-accent/30 rounded-full px-4 py-2 mb-8">
            <span className="text-yellow-accent text-sm font-semibold">
              The Process
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 text-balance">
            How FastBillboards Works
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            From intake form to negotiated campaign — here&apos;s exactly what
            happens at every step. Typical timeline: 5–7 business days.
          </p>
        </div>
      </section>

      {/* What You Provide */}
      <section className="py-16 bg-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            What You Bring to the Table
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Your budget range",
                desc: "We work with campaigns starting at $2,000/month in media spend.",
              },
              {
                label: "Target market",
                desc: "The city, region, or specific corridors where you want to advertise.",
              },
              {
                label: "Campaign goals",
                desc: "Brand awareness, event promotion, grand opening, seasonal push — whatever drives your campaign.",
              },
              {
                label: "Any existing quotes",
                desc: "If you&apos;ve already received quotes from vendors or agencies, share them. We&apos;ll beat them.",
              },
              {
                label: "Billboard type preference",
                desc: "Static, digital, or both — or we can advise on the best format for your goal.",
              },
              {
                label: "Desired campaign start",
                desc: "We need ~2 weeks lead time minimum, but can work with tighter timelines when inventory allows.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 bg-navy border border-white/10 rounded-xl p-5"
              >
                <div className="w-8 h-8 bg-yellow-accent/10 border border-yellow-accent/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-yellow-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    {item.label}
                  </p>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            The 5-Step Process
          </h2>
          <p className="text-white/60 text-center mb-16 text-lg">
            Transparent, efficient, and designed around your timeline.
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-white/10 hidden sm:block" />

            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Submit Intake Form & Schedule Kickoff Call",
                  day: "Day 1",
                  description:
                    "Fill out the intake form at /get-started with your campaign parameters. Provide your budget, target market, billboard format preferences, and any existing vendor quotes. Once received, we&apos;ll send you a calendar link to schedule your free 30-minute kickoff call.",
                  detail:
                    "No credit card required at this stage. The $1,000 fee is collected before we begin negotiation work.",
                },
                {
                  step: "2",
                  title: "Strategy Call: Map Your Campaign Goals",
                  day: "Day 1–2",
                  description:
                    "On the kickoff call, we review your goals in depth. We discuss your target audience, campaign objectives, creative plans (or lack thereof), and any specific location requirements. We explain the market landscape in your target area and set expectations on what&apos;s available within your budget.",
                  detail:
                    "This call typically runs 20–35 minutes. You&apos;ll leave with a clear picture of what&apos;s available in your market and a timeline for the negotiation process.",
                },
                {
                  step: "3",
                  title: "Vendor Outreach & Proposal Requests",
                  day: "Day 2–4",
                  description:
                    "We reach out to all relevant vendors in your target market — national operators (Lamar, Clear Channel, OUTFRONT) and local/regional independents. We request current availability, traffic count data (DEC), and best-available pricing for locations that match your parameters.",
                  detail:
                    "We leverage established vendor relationships to get real availability and motivated pricing — not the walk-in rate quoted to first-time buyers.",
                },
                {
                  step: "4",
                  title: "Negotiate, Compare, and Present Options",
                  day: "Day 4–6",
                  description:
                    "Once proposals are in, we negotiate each vendor down from their initial offer. We apply leverage: market knowledge, competitive proposals, volume bundling where applicable, and our reputation as a reliable buyer. We then build a side-by-side comparison of your top options.",
                  detail:
                    "You receive a clean comparison package showing each location, its traffic count, the negotiated monthly rate, effective CPM, and our recommendation on the best value option.",
                },
                {
                  step: "5",
                  title: "You Select — We Finalize Terms & Contracts",
                  day: "Day 6–7",
                  description:
                    "You review the options and make your selection. We handle the final contract negotiation, confirm production requirements, and facilitate execution of the vendor agreement. You receive a complete campaign summary with all relevant contacts, posting schedule, and production specifications.",
                  detail:
                    "We stay available to answer vendor questions and help troubleshoot any issues through the first posting period.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 sm:gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 bg-yellow-accent text-navy font-black text-lg rounded-full flex items-center justify-center shadow-lg shadow-yellow-accent/20 relative z-10">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow pb-4">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="flex-shrink-0 text-yellow-accent text-xs font-bold bg-yellow-accent/10 border border-yellow-accent/30 px-3 py-1 rounded-full">
                        {item.day}
                      </span>
                    </div>
                    <p className="text-white/70 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed border-l-2 border-yellow-accent/30 pl-4">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            What You Receive
          </h2>
          <p className="text-white/60 text-center mb-12 text-lg">
            A complete campaign package — not just a quote.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Written Vendor Quotes",
                desc: "Official written proposals from each vendor, including the negotiated rate, contract terms, and posting schedule.",
              },
              {
                title: "Side-by-Side Rate Comparison",
                desc: "Clean comparison showing location, traffic count, negotiated rate, and effective CPM for every option.",
              },
              {
                title: "Contract Terms Summary",
                desc: "Plain-English summary of the key terms in each vendor contract — cancellation policy, rate escalation clauses, production requirements.",
              },
              {
                title: "Vendor Contact Information",
                desc: "Direct contact info for the sales rep and operations team at each vendor, so you can communicate directly after campaign launch.",
              },
              {
                title: "Recommended Posting Schedule",
                desc: "Our recommendation on which locations to prioritize, the optimal contract duration, and suggested renewal timing.",
              },
              {
                title: "Production Specifications",
                desc: "Artwork specifications (size, resolution, file format) for each board, so your designer or print vendor can prepare materials correctly.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-navy border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-yellow-accent rounded-full flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold mb-1">{item.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/60 text-xl mb-10">
            Submit your campaign brief today. We&apos;ll have negotiated options
            back to you within 5–7 business days.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-light text-navy font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105"
          >
            Get Started — $1,000 Flat Fee
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
