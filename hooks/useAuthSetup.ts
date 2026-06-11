import { useEffect, useState } from 'react'

export function useAuthSetup() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setupAuth = async () => {
      try {
        const { supabase } = await import('@/lib/supabase')

        const { data } = await supabase.auth.getSession()
        setLoggedIn(!!data.session)

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setLoggedIn(!!session)
        })

        setLoading(false)
        return () => subscription.unsubscribe()
      } catch (error) {
        console.error('Auth setup error:', error)
        setLoading(false)
      }
    }

    setupAuth()
  }, [])

  const handleAuthButton = async () => {
    if (loggedIn) {
      const { supabase } = await import('@/lib/supabase')
      await supabase.auth.signOut()
      setLoggedIn(false)
      return
    }

    return 'openAuthModal'
  }

  const addProduct = async (product: any) => {
    const { supabase } = await import('@/lib/supabase')
    const { data } = await supabase.auth.getSession()

    if (!data.session) {
      return 'openAuthModal'
    }

    return product
  }

  return {
    loggedIn,
    loading,
    handleAuthButton,
    addProduct,
  }
}
