import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Sendex',
  description: 'Location-based errand posting and fulfillment'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
          {children}
        </div>
      </body>
    </html>
  )
}
