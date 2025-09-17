import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Placeholder: protect routes under /dashboard
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/dashboard')) {
    // Here you would check auth cookie/session
    // For scaffold, allow access
  }
  return NextResponse.next()
}
