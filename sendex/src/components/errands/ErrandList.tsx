/* eslint-disable no-unused-vars */
import React from 'react'
import ErrandCard from './ErrandCard'
import type { Errand } from '@/types/errand'

type Props = {
  errands: Errand[]
  onEdit?: (errand: Errand) => void
  onDelete?: (id: string) => void
}

export default function ErrandList({ errands, onEdit, onDelete }: Props) {
  if (!errands || errands.length === 0) return <div>No errands yet</div>
  return (
    <div className="space-y-3">
      {errands.map((e) => (
        <div key={e.id} className="flex items-start justify-between">
          <ErrandCard item={e} onClick={() => onEdit?.(e)} />
          <div className="ml-3 flex flex-col gap-2">
            <button onClick={() => onEdit?.(e)} className="text-sm text-blue-600">Edit</button>
            <button onClick={() => e.id && onDelete?.(String(e.id))} className="text-sm text-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
