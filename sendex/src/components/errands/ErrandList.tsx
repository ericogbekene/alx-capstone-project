import ErrandCard from './ErrandCard'

export default function ErrandList({ errands }: { errands: any[] }) {
  if (!errands || errands.length === 0) return <div>No errands yet</div>
  return (
    <div className="space-y-3">
      {errands.map((e) => (
        <ErrandCard key={e.id} title={e.title} description={e.description} />
      ))}
    </div>
  )
}
