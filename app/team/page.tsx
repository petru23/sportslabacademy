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

      {/* HERO */}


      {/* STORY CARD */}
<section className="bg-[#F4F1E8] px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-40">
  <div className="mx-auto max-w-6xl rounded-[2rem] border-t-8 border-[#2563EB] bg-white px-6 py-10 shadow-xl md:rounded-[2.5rem] md:p-10">
    
    <h2 className="mb-8 text-center text-4xl font-black leading-[0.9] text-[#0F172A] md:mb-10 md:text-6xl">
      OUR
      <br className="md:hidden" />
      <span className="md:ml-3">STORY</span>
    </h2>

    <div className="mx-auto max-w-4xl space-y-6 text-[22px] leading-[1.45] text-zinc-600 md:space-y-8 md:text-xl md:leading-relaxed">
      
      <p>
        <span className="font-black tracking-tight text-[#2563EB]">
          SPORTSLAB ACADEMY
        </span>{' '}
        is a private football development academy based in Brisbane, focused on
        helping young players improve through modern coaching and structured
        training.
      </p>

      <p className="hidden md:block">
        What started as small private sessions and local training groups quickly
        grew through word of mouth, family support and a passion for player
        development. Today, SportsLab Academy supports developing footballers
        through modern coaching methods designed to improve technical ability,
        confidence, decision-making and high-performance habits both on and off
        the pitch.
      </p>

      <p className="font-black text-[#0F172A] md:block">
        Our mission is to help every player maximise their potential through
        modern coaching, elite training standards and a positive development
        environment.
      </p>

    </div>

    {/* DESKTOP ONLY BOXES */}
    <div className="mt-10 hidden grid-cols-3 gap-6 md:grid">
      
      <div className="rounded-[2rem] bg-[#F4F7FB] p-6 text-center">
        <p className="mb-3 text-3xl">⚽</p>
        <h3 className="mb-2 text-xl font-black text-[#0F172A]">
          Modern Coaching
        </h3>
        <p className="text-zinc-500">
          Structured football sessions focused on long-term player development.
        </p>
      </div>

      <div className="rounded-[2rem] bg-[#F4F7FB] p-6 text-center">
        <p className="mb-3 text-3xl">🔥</p>
        <h3 className="mb-2 text-xl font-black text-[#0F172A]">
          Elite Standards
        </h3>
        <p className="text-zinc-500">
          High-energy training designed to build confidence and performance.
        </p>
      </div>

      <div className="rounded-[2rem] bg-[#F4F7FB] p-6 text-center">
        <p className="mb-3 text-3xl">🤝</p>
        <h3 className="mb-2 text-xl font-black text-[#0F172A]">
          Positive Environment
        </h3>
        <p className="text-zinc-500">
          Creating a supportive space where players can enjoy and improve.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* MEET TEAM */}
<section className="px-6 pb-24">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="mb-4 text-5xl font-black">
       MEET OUR COACHES
    </h2>

    <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-[#2563EB]" />

    <p className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed text-zinc-600">
      Professional and passionate coaches dedicated to helping young athletes grow through sport,
      confidence and positive development.
    </p>

    {/* DAVIDE */}
    <div className="overflow-hidden rounded-[2.5rem] bg-white text-left shadow-2xl md:grid md:grid-cols-[380px_1fr]">
      <div className="h-[420px] bg-[url('/davide.jpg')] bg-cover bg-center md:h-full" />

      <div className="p-10 md:p-16">
        <h3 className="mb-3 text-5xl font-black">
          Davide
        </h3>

        <p className="mb-8 text-xl font-semibold text-[#2563EB]">
          Founder & Head Coach
        </p>

        <p className="mb-6 text-lg leading-relaxed text-zinc-600">
          Davide is a C-Licensed coach, holds a Bachelor’s degree in Sport and Exercise Science and a
          Master’s degree in Sport Management. Throughout his career, he has gained coaching experience with clubs
          including Como 1907 in Italy and Brisbane City FC in Australia.
        </p>

        <p className="mb-10 text-lg leading-relaxed text-zinc-600">
          Davide has over 10 years of coaching experience across Italy and Australia.
          He also has more than 5 years of experience delivering 1-to-1 and small group
          training sessions focused on player development, technical skills and game intelligence.
        </p>

        <div className="border-l-4 border-[#2563EB] pl-6">
          <p className="text-xl font-bold italic leading-relaxed text-zinc-700">
            “Great coaching is not only about improving players' skills —
            it’s about helping young athletes believe in themselves.”
          </p>
        </div>
      </div>
    </div>

    {/* CIRO */}
    <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-white text-left shadow-2xl md:grid md:grid-cols-[1fr_380px]">
      <div className="p-10 md:p-16">
        <h3 className="mb-3 text-5xl font-black">
          Ciro Giuseffi
        </h3>

        <p className="mb-8 text-xl font-semibold text-[#2563EB]">
          Coach • Junior Soccer
        </p>

        <p className="mb-6 text-lg leading-relaxed text-zinc-600">
          Ciro has coaching experience in both Italy and Australia, working with
          early age groups, junior soccer schools, and development teams from U8 to U12.
        </p>

        <p className="mb-10 text-lg leading-relaxed text-zinc-600">
          Ciro specialises in building strong technical foundations while helping
          young players develop confidence, coordination, and a genuine love for football.
        </p>

        <div className="border-l-4 border-[#2563EB] pl-6">
          <p className="text-xl font-bold italic leading-relaxed text-zinc-700">
            “The goal is to help young players enjoy the game while developing
            confidence, coordination and strong technical habits.”
          </p>
        </div>
      </div>

      <div className="h-[420px] bg-[url('/ciro.jpg')] bg-cover bg-center md:h-full" />
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