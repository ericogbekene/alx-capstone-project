import { NextResponse } from 'next/server'

// In-memory store for scaffold. Replace with database calls (Supabase) in production.
let MOCK_ERRANDS: any[] = []

function findIndexById(id: string) {
  return MOCK_ERRANDS.findIndex((e) => String(e.id) === String(id))
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('q')
  const results = q ? MOCK_ERRANDS.filter((e) => e.title?.toLowerCase().includes(q.toLowerCase())) : MOCK_ERRANDS
  return NextResponse.json({ ok: true, errands: results })
}

export async function POST(req: Request) {
  const body = await req.json()
  const newErrand = { id: String(Date.now()), ...body, status: body.status ?? 'posted', created_at: new Date().toISOString() }
  MOCK_ERRANDS.unshift(newErrand)
  return NextResponse.json({ ok: true, created: newErrand })
}

export async function PUT(req: Request) {
  const url = new URL(req.url)
  const id = url.searchParams.get('id')
  if (!id) return NextResponse.json({ ok: false, error: 'Missing id' }, { status: 400 })
  const body = await req.json()
  const idx = findIndexById(id)
  if (idx === -1) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
  MOCK_ERRANDS[idx] = { ...MOCK_ERRANDS[idx], ...body, updated_at: new Date().toISOString() }
  return NextResponse.json({ ok: true, updated: MOCK_ERRANDS[idx] })
}

export async function DELETE(req: Request) {
  const url = new URL(req.url)
  const id = url.searchParams.get('id')
  if (!id) return NextResponse.json({ ok: false, error: 'Missing id' }, { status: 400 })
  const idx = findIndexById(id)
  if (idx === -1) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
  const removed = MOCK_ERRANDS.splice(idx, 1)
  return NextResponse.json({ ok: true, removed: removed[0] })
}

