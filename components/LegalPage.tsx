'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import AuthModal from '@/components/AuthModal'
import { useCart } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import { useAuthSetup } from '@/hooks/useAuthSetup'

export default function LegalPage({ html }: { html: string }) {
  const [authOpen, setAuthOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { setCartOpen, itemCount } = useCart()

  const { loggedIn, handleAuthButton: performAuthAction } = useAuthSetup()

  const handleAuthClick = async () => {
    const result = await performAuthAction()
    if (result === 'openAuthModal') setAuthOpen(true)
    else if (loggedIn) {
      setCartOpen(false)
    }
  }

  return (
    <main className="overflow-x-hidden bg-white text-[#111111]">

      <Navbar
        loggedIn={loggedIn}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        itemCount={itemCount}
        onCartClick={() => setCartOpen(true)}
        onAuthClick={handleAuthClick}
      />

      <section className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:pt-40">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>

      <Footer />

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthSuccess={() => setAuthOpen(false)}
      />

    </main>
  )
}
