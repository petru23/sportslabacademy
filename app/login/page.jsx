'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {

  const [isLogin, setIsLogin] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const handleAuth = async (e) => {
    e.preventDefault()

    setLoading(true)

    if (isLogin) {

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        alert(error.message)
      } else {
        window.location.href = '/multisport-camp/checkout'
      }

    } else {

      const { error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        alert(error.message)
      } else {
        alert('Account created successfully!')
        window.location.href = '/multisport-camp/checkout'
      }

    }

    setLoading(false)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F0E6] px-6 py-20">

      <div className="w-full max-w-md rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#2563EB]">
          SportsLab Academy
        </p>

        <h1 className="mb-8 text-5xl font-black leading-none text-black">
          {isLogin ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
        </h1>

        <form
          onSubmit={handleAuth}
          className="space-y-5"
        >

          <input
  type="email"
  placeholder="Email Address"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-2xl border border-zinc-200 p-5 text-lg text-black outline-none placeholder:text-zinc-400"
/>

         <input
  type="password"
  placeholder="Password"
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-2xl border border-zinc-200 p-5 text-lg text-black outline-none placeholder:text-zinc-400"
/>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#2563EB] py-5 text-lg font-black text-white transition hover:scale-[1.02]"
          >
            {loading
              ? 'Loading...'
              : isLogin
              ? 'Login'
              : 'Create Account'}
          </button>

        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 text-sm font-bold text-[#2563EB]"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : 'Already have an account? Login'}
        </button>

      </div>

    </main>
  )
}