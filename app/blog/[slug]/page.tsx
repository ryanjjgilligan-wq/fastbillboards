import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["FastBillboards Team"],
      url: `https://fastbillboards.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: "FastBillboards Team",
      url: "https://fastbillboards.com",
    },
    publisher: {
      "@type": "Organization",
      name: "FastBillboards.com",
      url: "https://fastbillboards.com",
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://fastbillboards.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fastbillboards.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-navy-light border-b border-white/10 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/blog"
              className="hover:text-white/70 transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/60 truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-yellow-accent/60 text-sm">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" · "}
              <span className="text-white/40">FastBillboards Team</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-8 pb-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-yellow-accent
                  prose-p:text-white/70 prose-p:leading-relaxed
                  prose-li:text-white/70
                  prose-strong:text-white
                  prose-a:text-yellow-accent prose-a:no-underline hover:prose-a:text-yellow-light prose-a:font-semibold
                  prose-blockquote:border-yellow-accent/50 prose-blockquote:text-white/60 prose-blockquote:bg-yellow-accent/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1
                  prose-ul:space-y-1
                  prose-ol:space-y-1"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-navy-light border border-yellow-accent/30 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-3 text-base">
                    Ready to Negotiate?
                  </h3>
                  <p className="text-white/60 text-sm mb-5 leading-relaxed">
                    Flat $1,000 fee. No agency markups. 5–7 business day
                    turnaround.
                  </p>
                  <Link
                    href="/get-started"
                    className="block bg-yellow-accent hover:bg-yellow-light text-navy font-bold text-sm px-4 py-3 rounded-lg text-center transition-all"
                  >
                    Get Started →
                  </Link>
                </div>

                {/* Other Posts */}
                <div className="bg-navy-light border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                    More From the Blog
                  </h3>
                  <div className="space-y-3">
                    {getAllBlogPosts()
                      .filter((p) => p.slug !== post.slug)
                      .slice(0, 4)
                      .map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block text-white/60 hover:text-yellow-accent text-xs leading-snug transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-light border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Put This Knowledge to Work
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            FastBillboards negotiates your billboard campaign for a flat $1,000
            fee. No markups, no commissions, no conflicts of interest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 bg-yellow-accent hover:bg-yellow-light text-navy font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              Get Started — $1,000 Flat Fee
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
