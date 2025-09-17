import { NextResponse } from 'next/server'

let MOCK_MESSAGES: any[] = []

export async function GET() {
  return NextResponse.json({ ok: true, messages: MOCK_MESSAGES })
}

export async function POST(req: Request) {
  const body = await req.json()
  const m = { id: String(Date.now()), ...body, created_at: new Date().toISOString() }
  MOCK_MESSAGES.push(m)
  return NextResponse.json({ ok: true, created: m })
}
