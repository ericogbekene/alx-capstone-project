export async function apiGet(path: string) {
  const res = await fetch(`/api/${path}`)
  if (!res.ok) throw new Error('API error')
  return res.json()
}

export async function apiPost(path: string, body: any) {
  const res = await fetch(`/api/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (!res.ok) throw new Error('API error')
  return res.json()
}

export async function apiPut(path: string, body: any, query?: Record<string, string>) {
  const q = query ? '?' + new URLSearchParams(query).toString() : ''
  const res = await fetch(`/api/${path}${q}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (!res.ok) throw new Error('API error')
  return res.json()
}

export async function apiDelete(path: string, query?: Record<string, string>) {
  const q = query ? '?' + new URLSearchParams(query).toString() : ''
  const res = await fetch(`/api/${path}${q}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('API error')
  return res.json()
}
