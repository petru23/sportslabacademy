'use client'

import { useEffect, useState } from 'react'
import AuthModal from '@/components/AuthModal'
import { useCart } from '@/context/CartContext'

export default function EliteSoccerClinicPage() {
  const [authOpen, setAuthOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { addToCart, setCartOpen, itemCount } = useCart()

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
      <section className="px-6 pb-12 pt-20 md:pb-20 md:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              SportsLab Holiday Program
            </p>

            <h1 className="mb-6 text-5xl font-black leading-none tracking-[-0.04em] md:text-7xl lg:text-8xl">
              ELITE
              <br />
              <span className="text-[#2563EB]">SOCCER</span>
              <br />
              CLINIC
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-relaxed text-zinc-700 md:text-xl">
              A high-quality soccer clinic for players aged 10–16, focused on technical development,
              game understanding, speed of play and competitive performance.
            </p>

            <div className="mb-7 grid max-w-xl grid-cols-2 gap-3">
              {[
                ['Ages', '10–16 Years'],
                ['Time', '8am–12.30pm'],
                ['Location', 'Davies Park, West End'],
                ['From', '$50/day'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
                    {label}
                  </p>

                  <p className="mt-1 text-lg font-black">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-full bg-[#2563EB] px-8 py-5 text-center font-black uppercase tracking-wide text-white"
              >
                Register Now →
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-[#2563EB]" />

            <div className="relative h-[700px] overflow-hidden rounded-[2rem] border-4 border-black">
              <div className="absolute inset-0 bg-[url('/elite-soccer-clinic.jpg')] bg-cover bg-center" />
            </div>
          </div>

        </div>
      </section>

      {/* CLINIC DETAILS */}
      <section className="bg-gradient-to-b from-[#111827] to-[#0B1220] px-6 pt-8 pb-10 text-white md:pt-14 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 md:gap-10">

          <div>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-[#60A5FA] md:text-sm">
              Technical, Tactical & Competitive
            </p>

            <h2 className="mb-8 text-4xl font-black leading-none md:mb-10 md:text-6xl">
              BUILT FOR
              <br />
              SERIOUS PLAYERS
            </h2>

            <div className="space-y-3 md:space-y-4">
              {[
                'Technical training under pressure',
                '1v1, 2v2 and small-sided games',
                'Speed of thought and decision making',
                'Finishing, first touch and passing detail',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] bg-white px-5 py-4 shadow-sm md:px-6 md:py-5"
                >
                  <p className="text-sm font-black leading-snug text-black md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#2563EB] bg-white px-6 py-6 text-black md:rounded-[2.5rem] md:p-10">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#2563EB] md:mb-8 md:text-sm">
              Clinic Structure
            </p>

            <div className="space-y-4 md:space-y-7">
              {[
                ['Activation & Ball Mastery', 'Dynamic warm-up, coordination and touches on the ball.'],
                ['Technical Block', 'Passing, receiving, first touch, ball striking and 1v1 detail.'],
                ['Game Understanding', 'Positioning, scanning, movement and decision making.'],
                ['Competitive Games', 'Small-sided games, challenges and tournament-style play.'],
              ].map(([title, text]) => (
                <div key={title} className="border-l-4 border-[#2563EB] pl-4 md:pl-5">
                  <h3 className="text-xl font-black leading-tight md:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-snug text-zinc-600 md:mt-2 md:text-lg md:leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* DATES */}
<section className="bg-[#F5F0E6] px-6 py-8 md:py-12">
  <div className="mx-auto max-w-7xl">
    <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-[#2563EB] md:text-sm">
      Clinic Dates
    </p>

    <h2 className="mb-6 text-4xl font-black leading-none md:mb-8 md:text-6xl">
    CLINIC BLOCKS
      
    </h2>

    <div className="grid gap-4 md:grid-cols-2">
      {[
        ['Week 1', '1st July – 3rd July'],
        ['Week 2', '8th July – 10th July'],
      ].map(([week, dates]) => (
        <div
          key={week}
          className="rounded-[2rem] bg-white p-6 shadow-sm md:p-8"
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#2563EB]">
            {week}
          </p>

          <h3 className="mt-3 text-3xl font-black md:text-4xl">
            {dates}
          </h3>

          <div className="mt-6 grid gap-3">
            <div className="rounded-2xl bg-[#F5F0E6] p-4">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB]">
                Block 1
              </p>

              <p className="mt-1 text-xl font-black">
                ⏰ 8:00am – 10:00am
              </p>

              <p className="mt-1 text-xl font-black">
                🎂 Ages 11–13
              </p>
            </div>

        

            <div className="rounded-2xl bg-[#F5F0E6] p-4">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB]">
                Block 2
              </p>

              <p className="mt-1 text-xl font-black">
                ⏰ 10:30am – 12:30pm
              </p>

              <p className="mt-1 text-xl font-black">
                🎂 Ages 14–16
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* PRICING */}
<section id="pricing" className="bg-[#F5F0E6] px-6 pt-2 pb-10 md:pt-4 md:pb-18">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#0B1220] p-5 shadow-2xl md:rounded-[2.5rem] md:p-10">

          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 md:text-xs">
            Elite Soccer Clinic
          </p>

          <h2 className="text-3xl font-black leading-none tracking-[-0.04em] text-white md:text-5xl">
            CLINIC
            <br />
            PACKAGES
          </h2>

          <div className="mt-5 grid gap-3 md:mt-7 md:grid-cols-3 md:gap-4">

            <div className="rounded-[1.4rem] bg-white/10 p-4 text-white md:rounded-[1.8rem] md:p-7">
              <p className="mb-2 text-[9px] font-black uppercase tracking-[0.28em] text-blue-200 md:text-xs">
                Single Day
              </p>

              <h3 className="text-3xl font-black leading-none md:text-5xl">
                $50
              </h3>

              <p className="mt-2 text-sm font-semibold text-blue-100">
                One clinic day
              </p>

              <button
                type="button"
                onClick={() =>
                  addProduct({
                    id: 'elite-soccer-clinic-single-day',
                    name: 'Elite Soccer Clinic - Single Day',
                    price: 50,
                  })
                }
                className="mt-4 w-full cursor-pointer rounded-full bg-white py-3 text-sm font-black text-[#0B1220] active:scale-95 md:py-4"
              >
                Add to Cart
              </button>
            </div>

            <div className="relative rounded-[1.4rem] bg-[#2563EB] p-4 text-white md:rounded-[1.8rem] md:p-7">
              <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-[#2563EB] md:py-1.5 md:text-[9px]">
                Popular
              </div>

              <p className="mb-2 text-[9px] font-black uppercase tracking-[0.28em] text-blue-100 md:text-xs">
                3-Day Block
              </p>

              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-black leading-none md:text-5xl">
                  $125
                </h3>

                <span className="pb-1 text-sm text-blue-100 line-through md:text-xl">
                  $150
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-blue-100">
                Choose Week 1 or Week 2
              </p>

              <button
                type="button"
                onClick={() =>
                  addProduct({
                    id: 'elite-soccer-clinic-3-day-block',
                    name: 'Elite Soccer Clinic - 3 Day Block',
                    price: 125,
                  })
                }
                className="mt-4 w-full cursor-pointer rounded-full bg-white py-3 text-sm font-black text-[#2563EB] active:scale-95 md:py-4"
              >
                Add to Cart
              </button>
            </div>

            <div className="relative rounded-[1.4rem] bg-[#2563EB] p-4 text-white md:rounded-[1.8rem] md:p-7">
              <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-[#2563EB] md:py-1.5 md:text-[9px]">
                Best Value
              </div>

              <p className="mb-2 text-[9px] font-black uppercase tracking-[0.28em] text-blue-100 md:text-xs">
                Full Clinic
              </p>

              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-black leading-none md:text-5xl">
                  $225
                </h3>

                <span className="pb-1 text-sm text-blue-100 line-through md:text-xl">
                  $300
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-blue-100">
                All 6 clinic days
              </p>

              <button
                type="button"
                onClick={() =>
                  addProduct({
                    id: 'elite-soccer-clinic-full-program',
                    name: 'Elite Soccer Clinic - Full Program',
                    price: 225,
                  })
                }
                className="mt-4 w-full cursor-pointer rounded-full bg-white py-3 text-sm font-black text-[#2563EB] active:scale-95 md:py-4"
              >
                Add to Cart
              </button>
            </div>

          </div>

          <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-white md:mt-5 md:p-5">
            <p className="text-sm leading-relaxed text-zinc-300">
              After adding a clinic package to the cart, parents can complete registration and payment securely online.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F0E6] px-6 pt-0 pb-10 md:pb-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-[#2563EB] md:text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="mb-6 text-4xl font-black leading-none md:mb-12 md:text-7xl">
            EVERYTHING
            <br />
            YOU NEED
          </h2>

          <div className="grid gap-3 md:grid-cols-2 md:gap-6">
            {[
              ['Who is this clinic for?', 'Players aged 10–16 who want a more focused soccer training environment.'],
              ['Does my child need experience?', 'Some soccer experience is required, but players do not need to be elite level.'],
              ['What should players bring?', 'Boots, shin pads, water bottle, hat, snacks and comfortable training clothes.'],
              ['Where is the clinic?', 'Davies Park, West End.'],
              ['Can I book single days?', 'Yes. Single day, 3-day block and full clinic options are available.'],
              ['What is the focus?', 'Technical quality, decision making, 1v1 actions, small-sided games and confidence.'],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-[1.3rem] border-[1.5px] border-black bg-white px-5 py-4 md:rounded-[2rem] md:p-8"
              >
                <h3 className="mb-2 text-xl font-black leading-[1.1] md:mb-4 md:text-2xl">
                  {question}
                </h3>

                <p className="text-sm leading-snug text-zinc-600 md:text-lg md:leading-relaxed">
                  {answer}
                </p>
              </div>
            ))}
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