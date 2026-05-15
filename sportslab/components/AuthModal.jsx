'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthModal({
  isOpen,
  onClose,
  onAuthSuccess,
}) {

  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleAuth = async (e) => {

    e.preventDefault()

    setLoading(true)

    // LOGIN
    if (isLogin) {

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        alert(error.message)
        setLoading(false)
        return
      }

      onAuthSuccess?.()

      onClose()

      setLoading(false)

      return
    }

    // SIGNUP
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          'https://sportslab-academy.vercel.app/multisport-camp',
      },
    })

    if (error) {
      alert(error.message)
      setLoading(false)
      return
    }

    alert(
      'Account created. Please check your email to confirm your account.'
    )

    onClose()

    setLoading(false)
  }

  return (

    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">

      <div className="relative w-full max-w-md rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        {/* CLOSE */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-3xl font-light text-black"
        >
          ×
        </button>

        {/* HEADER */}
        <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#2563EB]">
          SportsLab Academy
        </p>

        <h2 className="mb-8 text-5xl font-black leading-none text-black">
          {isLogin ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
        </h2>

        {/* FORM */}
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

        {/* SWITCH */}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="mt-6 text-sm font-bold text-[#2563EB]"
        >
          {isLogin
            ? "Don't have an account? Sign up"
            : 'Already have an account? Login'}
        </button>

      </div>

    </div>

  )
}