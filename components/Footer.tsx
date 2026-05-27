import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-light border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-yellow-accent font-bold text-lg">Fast</span>
              <span className="text-white font-bold text-lg">Billboards.com</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Billboard negotiation concierge service. Flat $1,000 fee. No markups. No
              commissions. Just expert negotiation from a 10-year industry insider.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/pricing", label: "Pricing" },
                { href: "/get-started", label: "Get Started" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-yellow-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:hello@fastbillboards.com"
                  className="hover:text-yellow-accent transition-colors"
                >
                  hello@fastbillboards.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005550199"
                  className="hover:text-yellow-accent transition-colors"
                >
                  (800) 555-0199
                </a>
              </li>
              <li className="text-white/40 text-xs mt-4">
                Nationwide Billboard Negotiation
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} FastBillboards.com. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Flat-fee billboard negotiation concierge — not a licensed media buyer or
            registered investment advisor.
          </p>
        </div>
      </div>
    </footer>
  );
}
