"use client"

import React, { useState } from 'react'
import { useErrands } from '@/hooks/use-errands'
import ErrandList from '@/components/errands/ErrandList'
import ErrandForm from '@/components/errands/ErrandForm'

export default function DashboardPage() {
  const { errands, loading, deleteErrand } = useErrands()
  const [selected, setSelected] = useState<any | null>(null)

  function handleEdit(e: any) {
    setSelected(e)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this errand?')) return
    await deleteErrand(id)
    if (selected?.id === id) setSelected(null)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {loading ? <div>Loading…</div> : <ErrandList errands={errands} onEdit={handleEdit} onDelete={handleDelete} />}
        </div>
        <aside className="md:col-span-1">
          <ErrandForm initial={selected} onDone={() => setSelected(null)} />
        </aside>
      </div>
    </div>
  )
}
