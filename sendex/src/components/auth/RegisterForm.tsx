
import React, { useState } from 'react'
import { signUpWithEmail } from '@/lib/supabase/client'

export function RegisterForm() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { data, error } = await signUpWithEmail(email, password, fullName)
    setLoading(false)
    if (error) setError(error.message)
    else console.log('Registered', data)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} name="email" type="email" placeholder="Email" required />
      <input value={fullName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)} name="full_name" placeholder="Full name" required />
      <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" required />
      <button disabled={loading} type="submit" className="w-full">{loading ? 'Creating…' : 'Create account'}</button>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  )
}
