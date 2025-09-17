export default function ErrandDetails({ errand }: { errand: any }) {
  if (!errand) return null
  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold">{errand.title}</h2>
      <p className="text-sm text-slate-600">{errand.description}</p>
    </div>
  )
}
