import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — We Received Your Campaign Brief",
  description:
    "We received your FastBillboards campaign brief. We'll reach out within 24 hours to schedule your free strategy call.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen bg-navy flex items-center py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Confirmation */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-400"
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            We Got It. Thank You!
          </h1>
          <p className="text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
            Your campaign brief has been received. We&apos;ll review it and
            reach out within 24 hours (usually much sooner during business
            hours).
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-navy-light border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">
            What Happens Next
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Check your email",
                desc: "You should receive a confirmation email momentarily. If you don't see it, check your spam folder or email us directly at hello@fastbillboards.com.",
                icon: "📧",
              },
              {
                step: "2",
                title: "We'll reach out within 24 hours",
                desc: "A member of the FastBillboards team will contact you to schedule your free 30-minute strategy call. We'll confirm your market parameters and explain exactly what we'll do.",
                icon: "📞",
              },
              {
                step: "3",
                title: "Schedule your strategy call",
                desc: "Use the link below to pick a time that works for you. The call is free, no-commitment, and typically runs 20–30 minutes.",
                icon: "📅",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="w-10 h-10 bg-yellow-accent/10 border border-yellow-accent/30 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{item.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendly CTA */}
        <div className="bg-yellow-accent/10 border border-yellow-accent/30 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-white font-bold text-lg mb-2">
            Want to Schedule Your Call Right Now?
          </h3>
          <p className="text-white/60 text-sm mb-6">
            Skip the wait — pick a time that works for you using our scheduling
            link.
          </p>
          <a
            href="https://calendly.com/fastbillboards/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-light text-navy font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Schedule Your Free Strategy Call
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Share */}
        <div className="bg-navy-light border border-white/10 rounded-2xl p-6 text-center">
          <h3 className="text-white font-semibold mb-2">
            Know someone else who advertises on billboards?
          </h3>
          <p className="text-white/50 text-sm mb-4">
            Share FastBillboards with a colleague and help them stop overpaying
            too.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:?subject=You should check out FastBillboards&body=I just found a billboard negotiation service that charges a flat $1,000 fee instead of agency markups. Check it out: https://fastbillboards.com"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Share via Email
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://fastbillboards.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>

        {/* Back to site */}
        <div className="text-center mt-8">
          <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
            ← Back to FastBillboards.com
          </Link>
        </div>
      </div>
    </section>
  );
}
