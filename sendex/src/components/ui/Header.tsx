"use client"
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[--brand] text-gray-500 shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl tracking-tight">Sendex</Link>
        <nav className="space-x-6 flex items-center">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/docs" className="hover:underline">Docs</Link>
          <Link href="/login" className="ml-4 inline-block rounded-md bg-white text-[--brand] px-3 py-1 text-sm font-medium">Sign in</Link>
        </nav>
      </div>
    </header>
  )
}
