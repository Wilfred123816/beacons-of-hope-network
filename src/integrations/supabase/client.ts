import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://njluclrqzetglishwclt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qbHVjbHJxemV0Z2xpc2h3Y2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNTY3NTQsImV4cCI6MjA4NTkzMjc1NH0.2l_Z5xRXxF5mq5_xAJnF5sFwkGvSm6CfwkgwIX5P5XQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
