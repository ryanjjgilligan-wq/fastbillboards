import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import SavingsCalculator from "@/components/SavingsCalculator";

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://fastbillboards.com/#organization",
                name: "FastBillboards.com",
                url: "https://fastbillboards.com",
                logo: "https://fastbillboards.com/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-800-555-0199",
                  contactType: "customer service",
                  email: "hello@fastbillboards.com",
                },
              },
              {
                "@type": "Service",
                "@id": "https://fastbillboards.com/#service",
                name: "Billboard Negotiation Concierge",
                provider: { "@id": "https://fastbillboards.com/#organization" },
                description:
                  "Flat-fee billboard campaign negotiation service. We negotiate billboard advertising on behalf of advertisers nationwide for a flat $1,000 fee. No agency markups, no commissions.",
                offers: {
                  "@type": "Offer",
                  price: "1000",
                  priceCurrency: "USD",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "1000",
                    priceCurrency: "USD",
                    description: "Flat fee per campaign",
                  },
                },
                areaServed: { "@type": "Country", name: "United States" },
              },
            ],
          }),
        }}
      />

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
        {/* Geometric background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-accent/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-accent/40 rounded-full" />
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-yellow-accent/20 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-accent/30 rounded-full" />
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,214,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,10,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-accent/10 border border-yellow-accent/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-yellow-accent rounded-full animate-pulse" />
              <span className="text-yellow-accent text-sm font-semibold tracking-wide">
                Billboard Negotiation Concierge
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 text-balance">
              We Negotiate Your Billboard Campaign.{" "}
              <span className="text-yellow-accent">You Keep the Savings.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              Flat <span className="text-white font-semibold">$1,000 fee</span>.
              No agency markups. No commissions. Just expert billboard
              negotiation from a{" "}
              <span className="text-white font-semibold">
                10-year industry insider
              </span>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 bg-yellow-accent hover:bg-yellow-light text-navy font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-yellow-accent/20"
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
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["JD", "SR", "MK", "TW"].map((initials) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full bg-navy-lighter border-2 border-yellow-accent/30 flex items-center justify-center text-xs font-bold text-yellow-accent"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm">
                <span className="text-yellow-accent font-bold">
                  Clients save an average of $4,200 per campaign.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Entity Description ── */}
      <section className="bg-navy-light border-y border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-lg leading-relaxed">
            <strong className="text-white">FastBillboards.com</strong> is a
            billboard negotiation concierge service founded by a 10-year outdoor
            advertising industry veteran. For a flat $1,000 fee, FastBillboards
            negotiates billboard campaigns on behalf of advertisers nationwide,
            providing access to the same vendor relationships and pricing
            leverage previously only available to large agencies.
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Three steps to a negotiated billboard campaign — without the
              agency markup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit Your Campaign Brief",
                description:
                  "Fill out our intake form with your budget, target market, and campaign goals. Takes 5 minutes. No commitment required at this stage.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "We Negotiate With Vendors",
                description:
                  "We contact all relevant vendors in your market — Lamar, Clear Channel, OUTFRONT, and local independents — and negotiate rates using our industry relationships.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "You Select, We Finalize",
                description:
                  "We present you with a side-by-side comparison of your best options. You choose. We handle the paperwork and contract terms.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-navy-light border border-white/10 rounded-2xl p-8 hover:border-yellow-accent/30 transition-colors"
              >
                <div className="absolute -top-4 left-8">
                  <span className="bg-yellow-accent text-navy text-xs font-black px-3 py-1 rounded-full tracking-widest">
                    STEP {item.step}
                  </span>
                </div>
                <div className="text-yellow-accent mb-6 mt-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why FastBillboards?
            </h2>
            <p className="text-white/60 text-xl">
              The math is simple. The savings are real.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-6 py-5 text-white/50 text-sm font-medium uppercase tracking-wider w-1/3">
                    &nbsp;
                  </th>
                  <th className="px-6 py-5 text-center">
                    <span className="text-white/60 font-semibold">
                      Marketing Agency
                    </span>
                  </th>
                  <th className="px-6 py-5 text-center bg-yellow-accent/5">
                    <span className="text-yellow-accent font-bold">
                      FastBillboards.com
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-navy">
                {[
                  {
                    label: "Fee Structure",
                    agency: "15–20% of media buy",
                    fb: "Flat $1,000",
                    fbHighlight: true,
                  },
                  {
                    label: "On a $20k campaign",
                    agency: "$3,000–$4,000 in fees",
                    fb: "$1,000 flat fee",
                    fbHighlight: true,
                  },
                  {
                    label: "Vendor Relationships",
                    agency: "Generic, multi-category",
                    fb: "Billboard-specific insider",
                    fbHighlight: false,
                  },
                  {
                    label: "Works For You",
                    agency: "Partial (also serves vendors)",
                    fb: "100% buyer-side only",
                    fbHighlight: false,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0">
                    <td className="px-6 py-5 text-white/70 font-medium text-sm">
                      {row.label}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-red-400 text-sm">{row.agency}</span>
                    </td>
                    <td className="px-6 py-5 text-center bg-yellow-accent/5">
                      <span className="text-yellow-accent font-semibold text-sm">
                        ✓ {row.fb}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── What We Negotiate ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What We Negotiate
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Every format. Every market. Every major vendor and hundreds of
              local independents.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Static Bulletins", icon: "🏗️" },
              { label: "Digital Boards", icon: "💡" },
              { label: "Posters", icon: "📋" },
              { label: "Wallscapes", icon: "🏢" },
              { label: "Transit Shelters", icon: "🚌" },
              { label: "Airport OOH", icon: "✈️" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-navy-light border border-white/10 rounded-xl p-5 text-center hover:border-yellow-accent/30 transition-colors"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-white/80 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { vendor: "Lamar Advertising", coverage: "Nationwide" },
              { vendor: "Clear Channel Outdoor", coverage: "Nationwide" },
              { vendor: "OUTFRONT Media", coverage: "Nationwide" },
            ].map((v) => (
              <div
                key={v.vendor}
                className="flex items-center gap-3 bg-navy-light border border-white/10 rounded-xl px-5 py-4"
              >
                <div className="w-3 h-3 bg-yellow-accent rounded-full flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{v.vendor}</p>
                  <p className="text-white/40 text-xs">{v.coverage}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-4">
            + hundreds of regional and local independent billboard operators
          </p>
        </div>
      </section>

      {/* ── Savings Calculator ── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              See Your Savings
            </h2>
            <p className="text-white/60 text-xl">
              Calculate exactly what you save vs. a traditional agency.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We were quoted $28,000 by our old agency for a 3-month campaign in Dallas. FastBillboards got us the same coverage for $19,500 — same vendors, same locations. The $1,000 fee paid for itself about 85 times over.",
                name: "James D.",
                company: "Regional HVAC Franchise",
                saved: "$8,500 saved",
              },
              {
                quote:
                  "I didn't even know billboard negotiation was a thing you could outsource. Submitted the form on Tuesday, had a negotiated quote package by Friday. Five billboards across our metro area, 22% below the first quotes we received.",
                name: "Sarah R.",
                company: "Personal Injury Law Firm",
                saved: "$6,200 saved",
              },
              {
                quote:
                  "As a small business owner, I thought billboards were out of reach. FastBillboards found me remnant inventory on a perfect location — two blocks from our shop — at nearly 40% off the rack rate. Game changer.",
                name: "Marcus T.",
                company: "Local Restaurant Group",
                saved: "$3,800 saved",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-navy-light border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.company}</p>
                  </div>
                  <span className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20">
                    {t.saved}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-navy-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-yellow-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Ready to Stop Overpaying for Billboards?
          </h2>
          <p className="text-navy/70 text-xl mb-10 max-w-2xl mx-auto">
            Join advertisers who save thousands on every campaign. Flat $1,000
            fee. 5–7 business day turnaround. Satisfaction guaranteed.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-xl"
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
          <p className="text-navy/50 text-sm mt-6">
            No commitment until you approve your campaign options.
          </p>
        </div>
      </section>
    </>
  );
}
