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
