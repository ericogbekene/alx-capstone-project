"use client"
import { useEffect, useState, useCallback } from 'react'
import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api'
import type { Errand } from '@/types/errand'

export function useErrands() {
  const [errands, setErrands] = useState<Errand[]>([])
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

  async function createErrand(payload: Partial<Errand>) {
    const res = await apiPost('errands', payload)
    const created: Errand = res.created
    setErrands((prev) => [created, ...prev])
    return created
  }

  async function updateErrand(id: string, payload: Partial<Errand>) {
    const res = await apiPut('errands', payload, { id })
    const updated: Errand = res.updated
    setErrands((prev) => prev.map((e) => (String(e.id) === String(id) ? updated : e)))
    return updated
  }

  async function deleteErrand(id: string) {
    const res = await apiDelete('errands', { id })
    const removed: Errand = res.removed
    setErrands((prev) => prev.filter((e) => String(e.id) !== String(id)))
    return removed
  }

  return { errands, loading, fetchErrands, createErrand, updateErrand, deleteErrand }
}
