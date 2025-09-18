"use client"
import { useEffect, useState, useCallback } from 'react'
import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api'

export function useErrands() {
  const [errands, setErrands] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const fetchErrands = useCallback(async () => {
    setLoading(true)
    try {
      const r = await apiGet('errands')
      setErrands(r.errands || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchErrands()
  }, [fetchErrands])

  async function createErrand(payload: any) {
    const res = await apiPost('errands', payload)
    setErrands((prev) => [res.created, ...prev])
    return res.created
  }

  async function updateErrand(id: string, payload: any) {
    const res = await apiPut('errands', payload, { id })
    setErrands((prev) => prev.map((e) => (String(e.id) === String(id) ? res.updated : e)))
    return res.updated
  }

  async function deleteErrand(id: string) {
    const res = await apiDelete('errands', { id })
    setErrands((prev) => prev.filter((e) => String(e.id) !== String(id)))
    return res.removed
  }

  return { errands, loading, fetchErrands, createErrand, updateErrand, deleteErrand }
}
