'use client'

import AuthForm from '@/components/AuthForm'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F0E6] px-6 py-20">
      <div className="w-full max-w-md rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#2563EB]">
          SportsLab Academy
        </p>

        <h1 className="mb-8 text-5xl font-black leading-none text-black">
          WELCOME BACK
        </h1>

        <AuthForm
          variant="page"
          defaultIsLogin={true}
          onRedirect={(path) => (window.location.href = path)}
        />

        <div className="mt-6 text-center">
          <p className="text-sm text-zinc-600">
            Don't have an account?{' '}
            <button
              onClick={() => (window.location.href = '/signup')}
              className="font-bold text-[#2563EB] hover:underline"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </main>
  )
}
