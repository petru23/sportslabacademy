'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import FormInput from './FormInput'

interface AuthFormProps {
  variant?: 'modal' | 'page'
  defaultIsLogin?: boolean
  onAuthSuccess?: () => void
  onRedirect?: (path: string) => void
}

export default function AuthForm({
  variant = 'page',
  defaultIsLogin = false,
  onAuthSuccess,
  onRedirect,
}: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(defaultIsLogin)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (isLogin) {
        const { error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (authError) {
          setError(authError.message)
          setLoading(false)
          return
        }

        if (onAuthSuccess) {
          onAuthSuccess()
        } else if (onRedirect) {
          onRedirect('/dashboard')
        }
      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        })

        if (signUpError) {
          setError(signUpError.message)
          setLoading(false)
          return
        }

        await supabase.from('profiles').insert({
          email,
        })

        setError(null)
        alert('Account created successfully! Check your email to verify.')

        if (onAuthSuccess) {
          onAuthSuccess()
        } else if (onRedirect) {
          onRedirect('/dashboard')
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (variant === 'modal') {
    return (
      <form onSubmit={handleAuth} className="space-y-4">
        <FormInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          className="w-full rounded-xl border p-4 text-black"
        />

        <FormInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
          className="w-full rounded-xl border p-4 text-black"
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#2563EB] py-4 font-black text-white disabled:opacity-70"
        >
          {loading ? 'Loading...' : isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleAuth} className="space-y-5">
      <FormInput
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />

      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#2563EB] py-5 text-lg font-black text-white transition hover:scale-[1.02] disabled:opacity-70"
      >
        {loading ? 'Loading...' : isLogin ? 'Login' : 'Create Account'}
      </button>
    </form>
  )
}
