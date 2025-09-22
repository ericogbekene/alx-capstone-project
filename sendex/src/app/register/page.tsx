import { RegisterForm } from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center">Create an account</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
