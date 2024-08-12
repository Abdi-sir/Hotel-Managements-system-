

import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://fezjbylufawlxzvpphqz.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlempieWx1ZmF3bHh6dnBwaHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2NDAzMDMsImV4cCI6MjAzNjIxNjMwM30.NNJ6IQOSiihkq301RrBbQpaugxXB9mkgsrs-O1-Qsh0'

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;