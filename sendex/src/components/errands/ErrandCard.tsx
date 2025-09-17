import React from 'react'

export type Errand = {
  id?: string
  title: string
  description?: string
  date?: string
  status?: string
}

type Props = {
  errand: Errand
  onClick?: (errand: Errand) => void
}

const ErrandCard: React.FC<Props> = ({ errand, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick && onClick(errand)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick && onClick(errand)}
      className="p-4 border rounded-md hover:shadow cursor-pointer bg-white dark:bg-slate-800"
    >
      <h3 className="font-semibold text-lg">{errand.title}</h3>
      {errand.description && <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{errand.description}</p>}
      <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
        <span>{errand.date ?? ''}</span>
        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700">{errand.status ?? 'posted'}</span>
      </div>
    </div>
  )
}

export default ErrandCard