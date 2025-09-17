import React from 'react'
import { useErrands } from '@/hooks/use-errands'
import ErrandList from '@/components/errands/ErrandList'
import ErrandForm from '@/components/errands/ErrandForm'

export default function DashboardPage() {
  const { errands, loading } = useErrands()
  //console.log('Errands:', errands)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {loading ? <div>Loading…</div> : <ErrandList errands={errands} />}
        </div>
        <aside className="md:col-span-1">
          <ErrandForm />
        </aside>
      </div>
    </div>
  )
}
