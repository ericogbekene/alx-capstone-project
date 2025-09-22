import { Button } from '@/components/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card'
import { Input } from '@/components/input'
import { RegisterForm } from '@/components/auth/RegisterForm'
import LoginForm from '@/components/auth/LoginForm'



import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-50">
              Local errands, solved faster
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Post and fulfill errands nearby with ease. Built for speed, reliability and community.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-x-6">
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
              <Button variant="outline">Live Demo</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gray-200 rounded-lg dark:bg-gray-700 flex items-center justify-center">
              <p className="text-gray-500">[Illustrative Asset Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Nearby-first</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Find errands in your area with location-aware listings and filters.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Secure by default</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Designed to work with Supabase and Row Level Security (RLS) for private data.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fast workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Post, accept, and complete errands quickly with a simple UI and real-time updates.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
