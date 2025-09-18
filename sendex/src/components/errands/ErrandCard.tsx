/* eslint-disable no-unused-vars */
import React from 'react'

export type Errand = {
  id?: string
  title: string
  description?: string
  date?: string
  status?: string
}

type Props = {
  item: Errand
  onClick?: (item: Errand) => void
}

const ErrandCard: React.FC<Props> = (props) => {
  const { item, onClick } = props

  return (
    <div
      role="button"
      tabIndex={0}
  onClick={() => onClick && onClick(item)}
  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick && onClick(item)}
      className="p-4 border rounded-md hover:shadow cursor-pointer bg-white dark:bg-slate-800"
    >
      <h3 className="font-semibold text-lg">{item.title}</h3>
      {item.description && <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{item.description}</p>}
      <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
        <span>{item.date ?? ''}</span>
        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700">{item.status ?? 'posted'}</span>
      </div>
    </div>
  )
}

export default ErrandCard