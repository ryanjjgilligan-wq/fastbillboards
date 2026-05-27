import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Billboard Advertising Blog — Tips, Costs & Insider Guides",
  description:
    "Insider guides on billboard advertising costs, negotiation tactics, and how to get the most from your OOH budget. From the team at FastBillboards.com.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,214,10,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,10,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-accent/10 border border-yellow-accent/30 rounded-full px-4 py-2 mb-8">
            <span className="text-yellow-accent text-sm font-semibold">
              Insider Knowledge
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Billboard Advertising Blog
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Real guides from a 10-year outdoor advertising industry insider.
            Learn how billboard pricing works, how to negotiate, and how to stop
            overpaying.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-navy-light pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-navy border border-white/10 rounded-2xl p-7 hover:border-yellow-accent/30 transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-accent/60 text-xs font-medium">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-3 leading-snug flex-grow">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-yellow-accent transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-yellow-accent hover:text-yellow-light text-sm font-semibold transition-colors"
                  >
                    Read More
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Put This Knowledge to Work?
          </h2>
          <p className="text-white/60 mb-8">
            Let FastBillboards negotiate your next campaign. Flat $1,000. No
            markups.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-light text-navy font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Get Started — $1,000 Flat Fee
          </Link>
        </div>
      </section>
    </>
  );
}
