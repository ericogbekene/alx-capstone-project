import { supabaseClient } from './supabase/client'

export async function uploadImage(file: File, path = 'errands') {
  const fileName = `${Date.now()}-${file.name}`
  const { data, error } = await supabaseClient.storage.from('public').upload(`${path}/${fileName}`, file)
  if (error) throw error
  return data?.path || null
}
