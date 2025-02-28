import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://akckaqebnrjshudflmgf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrY2thcWVibnJqc2h1ZGZsbWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4OTI1MzQsImV4cCI6MjAzOTQ2ODUzNH0.jdNbRLfBdL1pIUrB2cbTrghn6BU7gbJJo-TkwrGlqoQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
