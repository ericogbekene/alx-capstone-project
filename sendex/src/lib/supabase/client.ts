import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

export async function signUpWithEmail(email: string, password: string, fullName: string) {
	const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });
	return { data, error }
}

export async function signInWithEmail(email: string, password: string) {
	const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password })
	return { data, error }
}

