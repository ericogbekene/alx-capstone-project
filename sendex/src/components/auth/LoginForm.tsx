"use client"

import React, { useState } from 'react'
import { signInWithEmail } from '@/lib/supabase/client'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

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
      <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
      <Button disabled={loading} type="submit" className="w-full">{loading ? 'Signing in…' : 'Sign in'}</Button>
      {error && <div className="text-red-600">{error}</div>}
    </form>
  )
}
