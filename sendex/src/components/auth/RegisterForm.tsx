import React, { useState } from 'react'
import { signUpWithEmail } from '@/lib/supabase/client'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { data, error } = await signUpWithEmail(email, password)
    setLoading(false)
    if (error) setError(error.message)
    else console.log('Registered', data)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
      <input value={fullName} onChange={(e) => setFullName(e.target.value)} name="full_name" placeholder="Full name" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
      <button disabled={loading} type="submit">{loading ? 'Creating…' : 'Create account'}</button>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  )
}
