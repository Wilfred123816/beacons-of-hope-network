import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://pkffjpwsktxizhgkxmtk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrZmZqcHdza3R4aXpoZ2t4bXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzODg3MzQsImV4cCI6MjA4Mzk2NDczNH0.83CjyOjQP7SRPUVk0_rT3AyD_8C8gI5z5W5XJfDrCWo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
