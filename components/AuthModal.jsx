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

    const { error } = await supabase.auth.signUp({
  email,
  password,
})

if (error) {
  alert(error.message)
  setLoading(false)
  return
}

await supabase.from('profiles').insert({
  email,
})

alert('Account created.')

onClose()

setLoading(false)
  }

  return (

    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 px-6">

      <div className="w-full max-w-md rounded-[2rem] bg-white p-8">

        <button
          onClick={onClose}
          className="mb-6 text-3xl text-black"
        >
          ×
        </button>

        <h2 className="mb-6 text-4xl font-black text-black">
          {isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}
        </h2>

        <form
          onSubmit={handleAuth}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-4 text-black"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-4 text-black"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#2563EB] py-4 font-black text-white"
          >
            {loading
              ? 'Loading...'
              : isLogin
                ? 'LOGIN'
                : 'CREATE ACCOUNT'}
          </button>

        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-5 text-sm font-bold text-[#2563EB]"
        >
          {isLogin
            ? 'Create account'
            : 'Already have an account? Login'}
        </button>

      </div>

    </div>

  )
}