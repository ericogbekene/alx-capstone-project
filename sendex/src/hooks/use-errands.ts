"use client"
import { useEffect, useState } from 'react'
import { apiGet } from '@/lib/api'

export function useErrands() {
  const [errands, setErrands] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    apiGet('errands')
      .then((r) => setErrands(r.errands || []))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return { errands, loading }
}
