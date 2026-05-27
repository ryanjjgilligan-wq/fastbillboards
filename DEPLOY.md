# FastBillboards.com — Deployment Guide

## Prerequisites
- Node.js 18+
- npm or yarn
- Accounts: Supabase, Stripe, Resend, Vercel

---

## Step 1: Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Settings → API** and copy:
   - `Project URL` → `SUPABASE_URL`
   - `anon public` key → `SUPABASE_ANON_KEY`
3. Go to **SQL Editor** and run the schema:

```sql
-- Run the contents of supabase/schema.sql
create table leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  company text,
  email text not null,
  phone text,
  budget_range text,
  target_market text,
  billboard_type text,
  campaign_start text,
  existing_quotes text,
  referral_source text,
  status text default 'new'
);
```

4. In **Authentication → Policies**, enable Row Level Security and add an insert policy for the leads table if you want tighter security.

---

## Step 2: Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. In **Dashboard → Developers → API Keys**:
   - Copy `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Copy `Secret key` → `STRIPE_SECRET_KEY`
3. Create a Product:
   - Go to **Products → Add product**
   - Name: "FastBillboards Negotiation Concierge"
   - Price: $1,000 one-time payment
   - Copy the Price ID → `STRIPE_PRICE_ID`
4. Set up a Webhook:
   - Go to **Developers → Webhooks → Add endpoint**
   - Endpoint URL: `https://fastbillboards.com/api/stripe/webhook`
   - Events to listen to: `checkout.session.completed`, `payment_intent.succeeded`, `payment_intent.payment_failed`
   - Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

---

## Step 3: Resend Setup

1. Create an account at [resend.com](https://resend.com)
2. Go to **API Keys → Create API Key**
   - Copy the key → `RESEND_API_KEY`
3. Add and verify your sending domain:
   - Go to **Domains → Add Domain**
   - Add `fastbillboards.com`
   - Add the DNS records shown (SPF, DKIM, DMARC)
   - Set `RESEND_FROM_EMAIL=hello@fastbillboards.com`
4. Set notification destination:
   - `NOTIFICATION_EMAIL=ryan@fastbillboards.com` (or wherever you want lead notifications)

---

## Step 4: Vercel Deployment

1. Push your code to GitHub (already done if following this guide)
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js — confirm settings from `vercel.json`
5. Add Environment Variables (Settings → Environment Variables):

```
NEXT_PUBLIC_SITE_URL=https://fastbillboards.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PRICE_ID=price_...
STRIPE_WEBHOOK_SECRET=whsec_...
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=hello@fastbillboards.com
NOTIFICATION_EMAIL=ryan@fastbillboards.com
```

6. Click **Deploy**

---

## Step 5: Custom Domain Setup

1. In Vercel, go to **Settings → Domains**
2. Add `fastbillboards.com` and `www.fastbillboards.com`
3. Vercel will show you DNS records to add
4. In your domain registrar (GoDaddy, Namecheap, etc.), add:
   - `A` record for `@` pointing to `76.76.19.19` (Vercel IP)
   - `CNAME` record for `www` pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (5 minutes to 48 hours)
6. Vercel will automatically provision an SSL certificate

---

## Step 6: Post-Launch Checklist

### Functionality Tests
- [ ] Home page loads correctly
- [ ] Navigation links work (How It Works, Pricing, Blog, Get Started)
- [ ] Lead form submits successfully → check Supabase `leads` table and email inbox
- [ ] Stripe checkout flow works end-to-end (use test keys first, then live)
- [ ] Blog pages load with correct content
- [ ] Sitemap generated at `/sitemap.xml`
- [ ] Robots.txt at `/robots.txt`

### SEO Checks
- [ ] Title tags and meta descriptions show correctly in browser tab
- [ ] Open Graph image (`/og-image.png`) is in `public/` folder
- [ ] Submit sitemap to Google Search Console
- [ ] Verify structured data with Google's Rich Results Test

### Performance
- [ ] Run Lighthouse on homepage (target 90+ on all scores)
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Confirm all images are optimized (use Next.js `<Image>` component)

### Business Setup
- [ ] Calendly account set up at `calendly.com/fastbillboards/strategy-call`
- [ ] Phone number (800) 555-0199 set up and forwarding correctly
- [ ] `hello@fastbillboards.com` email account active
- [ ] Stripe payments tested with live card

### Monitoring
- [ ] Set up Vercel Analytics (free tier available)
- [ ] Configure error alerting in Vercel project settings
- [ ] Set up Google Analytics or Plausible for traffic tracking

---

## Development Workflow

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (includes sitemap generation)
npm run build

# Start production server
npm start
```

## Environment Variables Reference

Copy `.env.local.example` to `.env.local` and fill in your values for local development. Never commit `.env.local` to version control.
