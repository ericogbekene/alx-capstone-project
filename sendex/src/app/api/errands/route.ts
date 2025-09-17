import { NextResponse } from 'next/server'

let MOCK_ERRANDS: any[] = []

export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('q')
  const results = q ? MOCK_ERRANDS.filter((e) => e.title?.includes(q)) : MOCK_ERRANDS
  return NextResponse.json({ ok: true, errands: results })
}

export async function POST(req: Request) {
  const body = await req.json()
  const newErrand = { id: String(Date.now()), ...body, created_at: new Date().toISOString() }
  MOCK_ERRANDS.push(newErrand)
  return NextResponse.json({ ok: true, created: newErrand })
}
