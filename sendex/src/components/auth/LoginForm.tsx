import React, { useState } from 'react'
import { signInWithEmail } from '@/lib/supabase/client'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { data, error } = await signInWithEmail(email, password)
    setLoading(false)
    if (error) setError(error.message)
    else console.log('Signed in', data)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
      <button disabled={loading} type="submit">{loading ? 'Signing in…' : 'Sign in'}</button>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  )
}
