import { NextResponse } from 'next/server'
import { supabaseServer, hasServerSupabase } from '@/lib/supabase/server'

// In-memory store for scaffold fallback. Replace entirely with database calls in production.
let MOCK_ERRANDS: any[] = []

function findIndexById(id: string) {
  return MOCK_ERRANDS.findIndex((e) => String(e.id) === String(id))
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const q = url.searchParams.get('q')

    if (hasServerSupabase() && supabaseServer) {
      const { data, error } = await supabaseServer.from('errands').select('*').order('created_at', { ascending: false })
      if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
      const results = q ? (data || []).filter((e: any) => e.title?.toLowerCase().includes(q.toLowerCase())) : data
      return NextResponse.json({ ok: true, errands: results })
    }

    const results = q ? MOCK_ERRANDS.filter((e) => e.title?.toLowerCase().includes(q.toLowerCase())) : MOCK_ERRANDS
    return NextResponse.json({ ok: true, errands: results })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const newErrand = { id: String(Date.now()), ...body, status: body.status ?? 'posted', created_at: new Date().toISOString() }

    if (hasServerSupabase() && supabaseServer) {
      const { data, error } = await supabaseServer.from('errands').insert({ ...newErrand }).select().single()
      if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
      return NextResponse.json({ ok: true, created: data })
    }

    MOCK_ERRANDS.unshift(newErrand)
    return NextResponse.json({ ok: true, created: newErrand })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url)
    const id = url.searchParams.get('id')
    if (!id) return NextResponse.json({ ok: false, error: 'Missing id' }, { status: 400 })
    const body = await req.json()

    if (hasServerSupabase() && supabaseServer) {
      const { data, error } = await supabaseServer.from('errands').update({ ...body, updated_at: new Date().toISOString() }).eq('id', id).select().single()
      if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
      return NextResponse.json({ ok: true, updated: data })
    }

    const idx = findIndexById(id)
    if (idx === -1) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    MOCK_ERRANDS[idx] = { ...MOCK_ERRANDS[idx], ...body, updated_at: new Date().toISOString() }
    return NextResponse.json({ ok: true, updated: MOCK_ERRANDS[idx] })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url)
    const id = url.searchParams.get('id')
    if (!id) return NextResponse.json({ ok: false, error: 'Missing id' }, { status: 400 })

    if (hasServerSupabase() && supabaseServer) {
      const { data, error } = await supabaseServer.from('errands').delete().eq('id', id).select().single()
      if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
      return NextResponse.json({ ok: true, removed: data })
    }

    const idx = findIndexById(id)
    if (idx === -1) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 })
    const removed = MOCK_ERRANDS.splice(idx, 1)
    return NextResponse.json({ ok: true, removed: removed[0] })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err?.message || err) }, { status: 500 })
  }
}

