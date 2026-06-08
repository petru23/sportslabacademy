'use client'

import { useEffect, useState } from 'react'
import AuthModal from '@/components/AuthModal'
import { useCart } from '@/context/CartContext'

export default function MultisportCampPage() {

  const [authOpen, setAuthOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const {
    addToCart,
    setCartOpen,
    itemCount,
  } = useCart()

  useEffect(() => {
    const setupAuth = async () => {
      const { supabase } = await import('@/lib/supabase')

      const { data } = await supabase.auth.getSession()

      setLoggedIn(!!data.session)

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setLoggedIn(!!session)
      })

      return () => subscription.unsubscribe()
    }

    setupAuth()
  }, [])

  const handleAuthButton = async () => {

    if (loggedIn) {

      const { supabase } = await import('@/lib/supabase')

      await supabase.auth.signOut()

      setLoggedIn(false)
      setCartOpen(false)

      return
    }

    setAuthOpen(true)
  }

  const addProduct = async (product: any) => {

    const { supabase } = await import('@/lib/supabase')

    const { data } = await supabase.auth.getSession()

    if (!data.session) {
      setAuthOpen(true)
      return
    }

    addToCart(product)
    setCartOpen(true)
  }

  return (
    <main className="bg-[#F5F0E6] text-[#111111]">
        

      {/* NAVBAR */}
<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#2563EB] text-white">
  <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-2">

    {/* MOBILE CART / LOGIN LEFT */}
    <div className="z-10 flex items-center md:hidden">
      {loggedIn ? (
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="relative ml-2 cursor-pointer"
        >
          <span className="text-3xl brightness-0 invert">
            🛒
          </span>

          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white">
              {itemCount}
            </span>
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={handleAuthButton}
          className="text-sm font-black uppercase tracking-wide"
        >
          LOGIN
        </button>
      )}
    </div>

    {/* LOGO */}
    <a
      href="/"
      className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
    >
      <img
        src="/logo1.png"
        alt="SportsLab Academy"
        className="h-24 w-auto object-contain md:h-28"
      />
    </a>

    {/* DESKTOP MENU */}
    <div className="hidden items-center gap-8 md:flex">
      <a
        href="/camp"
        className="font-semibold hover:text-white/70"
      >
        HOLIDAY PROGRAMS
      </a>

      <a
        href="/coaching"
        className="font-semibold hover:text-white/70"
      >
        PRIVATE COACHING
      </a>

      <a
        href="/junior-program"
        className="font-semibold hover:text-white/70"
      >
        JUNIOR PROGRAMS
      </a>

      <a
        href="/team"
        className="font-semibold hover:text-white/70"
      >
        MEET OUR TEAM
      </a>

      {loggedIn && (
        <a
          href="/dashboard"
          className="font-black uppercase tracking-wide hover:text-white/70"
        >
          DASHBOARD
        </a>
      )}

      {loggedIn && (
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="relative cursor-pointer"
        >
          <span className="text-3xl brightness-0 invert">
            🛒
          </span>

          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white">
              {itemCount}
            </span>
          )}
        </button>
      )}

      <button
        type="button"
        onClick={handleAuthButton}
        className="cursor-pointer rounded-full bg-white px-5 py-2 text-sm font-black text-[#2563EB]"
      >
        {loggedIn ? 'LOGOUT' : 'LOGIN'}
      </button>
    </div>

    {/* MOBILE HAMBURGER */}
    <button
      type="button"
      onClick={() => setMenuOpen(true)}
      className="z-10 flex h-10 w-10 items-center justify-center text-3xl font-black md:hidden"
    >
      ☰
    </button>
  </div>
</nav>

{/* MOBILE MENU */}
{menuOpen && (
  <div className="fixed inset-0 z-[99999] bg-[#2563EB] text-white md:hidden">

    {/* TOP BAR */}
    <div className="relative flex items-center justify-between px-4 py-3">

      <div className="z-10 flex items-center md:hidden">
        {loggedIn ? (
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative ml-2"
          >
            <span className="text-3xl brightness-0 invert">
              🛒
            </span>

            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black text-white">
                {itemCount}
              </span>
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleAuthButton}
            className="text-sm font-black uppercase tracking-wide"
          >
            LOGIN
          </button>
        )}
      </div>

      {/* LOGO */}
      <a
        href="/"
        onClick={() => setMenuOpen(false)}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <img
          src="/logo1.png"
          alt="SportsLab Academy"
          className="h-24 w-auto object-contain"
        />
      </a>

      {/* CLOSE */}
      <button
        type="button"
        onClick={() => setMenuOpen(false)}
        className="z-10 flex h-10 w-10 items-center justify-center text-4xl font-light leading-none"
      >
        ×
      </button>
    </div>

    {/* MENU LINKS */}
    <div className="mt-6 flex flex-col px-8 text-2xl font-light uppercase tracking-tight">
      <a
        onClick={() => setMenuOpen(false)}
        href="/"
        className="whitespace-nowrap border-b border-white/20 py-4"
      >
        HOME
      </a>

      {loggedIn && (
        <a
          onClick={() => setMenuOpen(false)}
          href="/dashboard"
          className="whitespace-nowrap border-b border-white/20 py-4"
        >
          DASHBOARD
        </a>
      )}

      <a
        onClick={() => setMenuOpen(false)}
        href="/camp"
        className="whitespace-nowrap border-b border-white/20 py-4"
      >
        HOLIDAY PROGRAMS
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="/coaching"
        className="whitespace-nowrap border-b border-white/20 py-4"
      >
        PRIVATE COACHING
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="/junior-program"
        className="whitespace-nowrap border-b border-white/20 py-4"
      >
        JUNIOR PROGRAMS
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="/team"
        className="whitespace-nowrap border-b border-white/20 py-4"
      >
        MEET OUR TEAM
      </a>

      <button
        type="button"
        onClick={handleAuthButton}
        className="mt-8 text-left text-lg font-black uppercase tracking-wide text-white/70"
      >
        {loggedIn ? 'LOGOUT' : 'LOGIN'}
      </button>
    </div>
  </div>
)}

      {/* HOLIDAY PROGRAMS PAGE */}
      <section className="min-h-screen bg-[#F4F1E8] px-6 pb-16 pt-24 text-[#0F172A] md:pt-36">
        <div className="mx-auto max-w-7xl">

          {/* PAGE INTRO */}
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              SportsLab Academy
            </p>

            <h1 className="text-5xl font-black leading-none tracking-[-0.04em] md:text-7xl">
              HOLIDAY
            
              PROGRAMS
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Choose your preferred holiday program and find the camp that best fits your child.
            </p>
          </div>

          {/* PROGRAM CARDS */}
          <div
            id="programs"
            className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
          >

            {/* MULTISPORT CAMP */}
<a
  href="/multisport-camp"
  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition hover:-translate-y-2"
>

  {/* IMAGE */}
  <div className="relative h-[260px] overflow-hidden rounded-t-[2rem]">

    <div className="absolute inset-0 bg-[url('/multisport-camp.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105" />

    <div className="absolute left-4 top-4 rounded-full bg-[#2563EB] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
      Available Now
    </div>

  </div>

  {/* BLUE TITLE BOX */}
  <div className="-mt-1 relative z-10 mb-6">
    <div className="w-full bg-[#2563EB] px-6 py-6 shadow-xl">

      <h2 className="text-center text-4xl font-black leading-none tracking-[-0.03em] text-white">
          MULTISPORT
        <br />
        FULL DAY CAMP
      </h2>

    </div>
  </div>

  {/* CONTENT */}
  <div className="px-6 pb-6">

    <div className="mb-4 rounded-2xl bg-[#F4F1E8] p-4">

      <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
        Location
      </p>

      <p className="text-lg font-black">
        📍 Davies Park, West End
      </p>

    </div>

    <div className="mb-4 rounded-2xl bg-[#F4F1E8] p-4">

      <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
        Ages & Time
      </p>

      <p className="text-lg font-black leading-relaxed">
        🎂 5–12 Years
        <br />
        ⏰ 8am–4pm
      </p>

    </div>

    <div className="mb-6 rounded-2xl bg-[#F4F1E8] p-4">

      <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
        Dates
      </p>

      <p className="text-lg font-black leading-relaxed">
        📆 1st July – 3rd July
        <br />
        📆 9th July – 10th July
      </p>

    </div>

    <div className="flex items-center justify-between">

      <div>

        <p className="text-xs font-semibold text-slate-500">
          from
        </p>

        <p className="text-3xl font-black">
          $80
        </p>

        <p className="text-sm text-slate-500">
          per day
        </p>

      </div>

      <span className="rounded-full bg-[#2563EB] px-5 py-3 text-sm font-black text-white">
        View →
      </span>

    </div>

  </div>

</a>

            {/* ELITE SOCCER CLINIC */}
<a
  href="/elite-soccer-clinic"
  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition hover:-translate-y-2"
>

  {/* IMAGE */}
  <div className="relative h-[260px] overflow-hidden rounded-t-[2rem]">

    <div className="absolute inset-0 bg-[url('/elite-soccer-clinic.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105" />

    <div className="absolute left-4 top-4 rounded-full bg-[#2563EB] px-4 py-2 text-xs font-black uppercase tracking-wide text-white">
      Available Now
    </div>

  </div>

  {/* BLUE TITLE BOX */}
  <div className="-mt-1 relative z-10 mb-6">
    <div className="w-full bg-[#2563EB] px-6 py-6 shadow-xl">

      <h2 className="text-center text-4xl font-black leading-none tracking-[-0.03em] text-white">
        ELITE SOCCER
        <br />
        CLINIC
      </h2>

    </div>
  </div>

  {/* CONTENT */}
  <div className="px-6 pb-6">

    {/* LOCATION */}
    <div className="mb-4 rounded-2xl bg-[#F4F1E8] p-4">

      <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
        Location
      </p>

      <p className="text-lg font-black">
        📍 Davies Park, West End
      </p>

    </div>

    {/* AGES & TIME */}
    <div className="mb-4 rounded-2xl bg-[#F4F1E8] p-4">

      <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
        Ages & Time
      </p>

      <p className="text-lg font-black leading-relaxed">
        🎂 10–16 Years
        <br />
        ⏰  8am–12pm
      </p>

    </div>

    {/* DATES */}
    <div className="mb-6 rounded-2xl bg-[#F4F1E8] p-4">

      <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
        Dates
      </p>

      <p className="text-lg font-black leading-relaxed">
        📆 1st July – 3rd July
        <br />
        📆 8th July – 10th July
      </p>

    </div>

    {/* PRICE */}
    <div className="flex items-center justify-between">

      <div>

        <p className="text-xs font-semibold text-slate-500">
          from
        </p>

        <p className="text-3xl font-black">
          $50
        </p>

        <p className="text-sm text-slate-500">
          per day
        </p>

      </div>

      <span className="rounded-full bg-[#2563EB] px-5 py-3 text-sm font-black text-white">
        View →
      </span>

    </div>

  </div>

</a>

          </div>
        </div>

    
      </section>

      {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/61468744194"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-24 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:scale-110"
            >
              💬
            </a>
      
            {/* FOOTER */}
      <footer className="bg-black px-6 py-10 text-white md:px-6 md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:grid md:grid-cols-3 md:gap-12">
      
          {/* BRAND */}
          <div>
            <h3 className="mb-3 text-2xl font-black md:mb-5 md:text-3xl">
              SPORTSLAB ACADEMY
            </h3>
      
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400 md:text-lg">
              Elite soccer programs helping young athletes develop confidence,
              technique and performance.
            </p>
          </div>
      
          {/* PROGRAMS */}
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 md:mb-5 md:text-sm">
              Programs
            </p>
      
            <div className="space-y-2 text-sm md:space-y-3 md:text-lg">
              <a href="/camp" className="block hover:text-blue-300">
                Holiday Programs
              </a>
      
              <a href="/coaching" className="block hover:text-blue-300">
                Private Coaching
              </a>
      
              <a href="/junior-program" className="block hover:text-blue-300">
                Junior Programs
              </a>
            </div>
          </div>
      
          {/* CONTACT */}
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 md:mb-5 md:text-sm">
              Contact
            </p>
      
            <div className="space-y-2 text-sm text-zinc-300 md:space-y-3 md:text-lg">
              <p>Davide: 0468744194</p>
              <p>sportslabacademyau@gmail.com</p>
              <p>Brisbane, QLD</p>
            </div>
          </div>
      
        </div>
      </footer>
      
            <AuthModal
              isOpen={authOpen}
              onClose={() => setAuthOpen(false)}
              onAuthSuccess={() => setLoggedIn(true)}
            />
      
          </main>
        )
      }