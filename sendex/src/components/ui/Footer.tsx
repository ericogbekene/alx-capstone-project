import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Sendex</div>
        <div className="space-x-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
