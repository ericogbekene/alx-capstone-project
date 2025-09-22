import './globals.css'
import React from 'react'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Sendex',
  description: 'Location-based errand posting and fulfillment'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
