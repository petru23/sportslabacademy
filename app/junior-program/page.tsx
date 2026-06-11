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
      <section className="mx-auto grid max-w-7xl items-center gap-16 pt-22 md:grid-cols-2">

        <div className="pt-16 md:pt-20">

          <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Junior Development
          </p>

          <h1 className="mb-8 text-6xl font-black leading-none md:text-8xl">
            JUNIOR
            <br />
            SOCCER
            <br />
            PROGRAM
          </h1>

          <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-700">
            Weekly development sessions helping young athletes build technical
            foundations, confidence and love for the game.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
                Ages
              </p>

              <h3 className="text-3xl font-black">
                5 – 12 Years
              </h3>

            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
                Sessions
              </p>

              <h3 className="text-3xl font-black">
                Thursday Sunday
              </h3>

            </div>

          </div>

          <a
            href="#"
            className="inline-block rounded-full bg-[#2563EB] px-8 py-5 font-black text-white"
          >
            Join Program →
          </a>

        </div>

        <div className="relative">

          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-[#2563EB]" />

          <div className="relative h-[750px] overflow-hidden rounded-[2rem] border-4 border-black md:h-[650px]">

           <div className="absolute inset-0 bg-[url('/junior-program.jpg')] bg-cover bg-[center_25%] md:bg-center" />
          </div>

        </div>

      </section>

      {/* INFO */}
      <section className="mx-auto mt-24 max-w-7xl">

        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
          Weekly Development
        </p>

        <h2 className="mb-14 text-5xl font-black leading-none md:text-7xl">
          BUILDING
          <br />
          CONFIDENT
          <br />
          PLAYERS
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {[
            [
              "Technical Training",
              "Ball mastery, passing, dribbling, first touch and finishing.",
            ],
            [
              "Game Understanding",
              "Positioning, awareness, movement and decision-making.",
            ],
            [
              "Confidence & Fun",
              "Positive coaching environment helping players enjoy football.",
            ],
          ].map(([title, text]) => (

            <div
              key={title}
              className="rounded-[2rem] bg-white p-8 shadow-sm"
            >

              <h3 className="mb-4 text-3xl font-black">
                {title}
              </h3>

              <p className="text-lg leading-relaxed text-zinc-600">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl py-24">

        <div className="rounded-[3rem] bg-[#0F172A] p-12 text-white">

          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
            Join The Program
          </p>

          <h2 className="mb-8 text-5xl font-black md:text-7xl">
            READY TO
            <br />
            DEVELOP?
          </h2>

          <p className="mb-10 max-w-2xl text-xl leading-relaxed text-zinc-300">
            Weekly sessions designed to help young athletes improve technically,
            build confidence and enjoy the game.
          </p>

          <a
            href="mailto:sportslabacademyau@gmail.com"
            className="inline-block rounded-full bg-[#2563EB] px-10 py-5 text-xl font-black text-white"
          >
            Enquire Now →
          </a>

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