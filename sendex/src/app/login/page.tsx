import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}
