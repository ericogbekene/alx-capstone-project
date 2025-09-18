import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY || ''

export const supabaseServer = supabaseUrl && supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null

export function hasServerSupabase() {
  return !!supabaseServer
}
