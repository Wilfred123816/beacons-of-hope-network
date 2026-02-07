
-- Create donations table to store donation records
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  amount NUMERIC(10, 2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  payment_method TEXT NOT NULL DEFAULT 'card',
  is_recurring BOOLEAN NOT NULL DEFAULT false,
  donor_pays_costs BOOLEAN NOT NULL DEFAULT false,
  tribute_type TEXT DEFAULT 'none',
  tribute_name TEXT,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  state TEXT,
  postal_code TEXT,
  country TEXT DEFAULT 'Kenya',
  newsletter_opt_in BOOLEAN NOT NULL DEFAULT false,
  sms_consent BOOLEAN NOT NULL DEFAULT false,
  stripe_payment_method_id TEXT,
  status TEXT NOT NULL DEFAULT 'completed'
);

-- Enable RLS
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (donations from website visitors)
CREATE POLICY "Anyone can submit a donation"
ON public.donations
FOR INSERT
WITH CHECK (true);
