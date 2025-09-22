import type { NextRequest } from 'next/server'
import { GET as listErrands } from '../route'

// Returns all errands (no search filter)
export async function GET(_req: NextRequest) {
  const req = new Request('http://localhost/api/errands')
  return listErrands(req)
}


