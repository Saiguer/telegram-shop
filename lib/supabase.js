import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kiqujrydkbmjxdabffhb.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcXVqcnlka2JtanhkYWJmZmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NDg4OTMsImV4cCI6MjA5NTAyNDg5M30.g6nlnsMQOLMs3rS7R0xTF0tYZYZMvlJEG9TWBEBZwJY";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);