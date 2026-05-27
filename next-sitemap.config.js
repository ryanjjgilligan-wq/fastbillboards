/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://fastbillboards.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => {
    const blogSlugs = [
      'how-much-does-billboard-advertising-cost-2026',
      'how-to-negotiate-billboard-rates',
      'what-marketing-agencies-dont-tell-you-about-billboard-markups',
      'how-to-get-billboard-remnant-inventory-at-50-off',
      'complete-guide-digital-billboard-advertising-costs-2026',
      'billboard-advertising-vs-digital-ads-roi',
      'how-to-plan-billboard-campaign-without-marketing-agency',
      'billboard-advertising-small-businesses',
    ];
    return blogSlugs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.8,
    }));
  },
};
