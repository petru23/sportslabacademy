'use client'

import { useEffect, useState } from 'react'
import AuthModal from '@/components/AuthModal'
import { useCart } from '@/context/CartContext'

export default function MultisportCampPage() {
  const [authOpen, setAuthOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

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

    return () => {
      subscription.unsubscribe()
    }
  }

  setupAuth()
}, [])

  const handleAuthButton = async () => {
    if (loggedIn) {
      const { supabase } = await import('@/lib/supabase')
      await supabase.auth.signOut()
      setLoggedIn(false)
      window.location.reload()
      return
    }

    setAuthOpen(true)
  }

  const addProduct = async (product: {
    id: string
    name: string
    price: number
  }) => {
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

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">

          <a href="/" className="relative z-[9999] flex shrink-0 items-center">
          <a href="/" className="flex shrink-0 items-center justify-center">
  <img
    src="/sportslab-logo.png"
    alt="SportsLab Academy"
    className="block h-14 w-14 object-contain md:h-20 md:w-20"
  />
</a>
  
</a>

          <div className="hidden items-center gap-8 md:flex">

            <a href="/camp" className="font-semibold hover:text-white/70">
              HOLIDAY PROGRAMS
            </a>

            <a href="/coaching" className="font-semibold hover:text-white/70">
              PRIVATE COACHING
            </a>

            <a href="/junior-program" className="font-semibold hover:text-white/70">
              JUNIOR PROGRAMS
            </a>

            <a href="/team" className="font-semibold hover:text-white/70">
              MEET OUR TEAM
            </a>

          </div>

          <button
  type="button"
  onClick={handleAuthButton}
  className="rounded-full bg-white px-5 py-2 text-sm font-black text-[#2563EB]"
>
  {loggedIn ? 'LOGOUT' : 'LOGIN'}
</button>

        </div>

      </nav>

      {/* HERO */}
      <section className="px-6 pb-12 pt-28 md:pb-20 md:pt-40">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              SportsLab Holiday Program
            </p>

            <h1 className="mb-6 text-5xl font-black leading-none tracking-[-0.04em] md:text-7xl lg:text-8xl">
              MULTISPORT
              <br />
              <span className="text-[#2563EB]">FULL DAY</span>
              <br />
              CAMP
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-relaxed text-zinc-700 md:text-xl">
              A full-day holiday camp combining soccer, multisport games,
              movement skills, teamwork and confidence-building for active kids.
            </p>

            <div className="mb-7 grid max-w-xl grid-cols-2 gap-3">

              {[
                ['Ages', '5–12 Years'],
                ['Time', '8am–4pm'],
                ['Location', 'West End'],
                ['From', '$100/day'],
              ].map(([label, value]) => (

                <div
                  key={label}
                  className="rounded-2xl bg-white p-4 shadow-sm"
                >

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

              <a
                href="#pricing"
                className="rounded-full border-2 border-black px-8 py-5 text-center font-black uppercase tracking-wide"
              >
                View Pricing
              </a>

            </div>

          </div>

          {/* DESKTOP IMAGE */}
          <div className="relative hidden md:block">

            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-[#2563EB]" />

            <div className="relative h-[600px] overflow-hidden rounded-[2rem] border-4 border-black">

              <div className="absolute inset-0 bg-[url('/multisport-camp.jpg')] bg-cover bg-center" />

            </div>

          </div>

        </div>

      </section>

      {/* DAILY EXPERIENCE */}
      <section className="bg-gradient-to-b from-[#111827] to-[#0B1220] px-6 pt-14 pb-20 text-white md:py-24">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">

          <div>

            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#2563EB] md:text-sm">
              Sport, Movement & Fun
            </p>

            <h2 className="mb-14 text-4xl font-black leading-none md:mb-10 md:text-6xl">
              MORE THAN
              <br />
              JUST A CAMP
            </h2>

            <div className="space-y-4">

              {[
                'Multisport activities & team games',
                'Movement exercises adapted by age',
                'Confidence and social development',
                'Experienced coaches and educators',
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-[1.5rem] bg-white px-6 py-5 shadow-sm md:p-6"
                >

                  <p className="text-base font-black leading-snug text-black md:text-lg">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-[2rem] border border-[#2563EB] bg-white px-7 py-8 text-black md:rounded-[2.5rem] md:p-10">

            <p className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-[#2563EB] md:text-sm">
              Typical Day
            </p>

            <div className="space-y-7">

              {[
                ['Morning Welcome', 'Light activities and team warm-up to start the day.'],
                ['Sports & Games', 'Organized multisport sessions and competitions.'],
                ['Lunch & Recovery', 'Relaxation, hydration and social time.'],
                ['Afternoon Challenges', 'Fun competitions and end-of-day games.'],
              ].map(([title, text]) => (

                <div
                  key={title}
                  className="border-l-4 border-[#2563EB] pl-5"
                >

                  <h3 className="text-2xl font-black leading-tight">
                    {title}
                  </h3>

                  <p className="mt-2 text-base leading-relaxed text-zinc-600 md:text-lg">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="bg-[#F5F0E6] px-6 py-14 md:py-24"
      >

        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#0B1220] p-6 shadow-2xl md:rounded-[2.5rem] md:p-10">

          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 md:text-xs">
            Flexible Pricing
          </p>

          <h2 className="text-4xl font-black leading-none tracking-[-0.04em] text-white md:text-5xl">
            CAMP
            <br />
            PACKAGES
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">

            {/* SINGLE DAY */}
            <div className="rounded-[1.4rem] bg-white/10 p-5 text-white md:rounded-[1.8rem] md:p-7">

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-blue-200 md:text-xs">
                Single Day
              </p>

              <h3 className="text-4xl font-black leading-none md:text-5xl">
                $100
              </h3>

              <button
                type="button"
                onClick={() =>
                  addProduct({
                    id: 'camp-single-day',
                    name: 'Single Day Camp',
                    price: 100,
                  })
                }
                className="mt-5 w-full rounded-full bg-white py-4 text-sm font-black text-[#0B1220] active:scale-95"
              >
                Add to Cart
              </button>

            </div>

            {/* FULL WEEK */}
            <div className="relative rounded-[1.4rem] bg-[#2563EB] p-5 text-white md:rounded-[1.8rem] md:p-7">

              <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#2563EB]">
                Limited
              </div>

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-blue-100 md:text-xs">
                Full Week
              </p>

              <div className="flex items-end gap-3">

                <h3 className="text-4xl font-black leading-none md:text-5xl">
                  $350
                </h3>

                <span className="pb-1 text-base text-blue-100 line-through md:text-xl">
                  $400
                </span>

              </div>

              <p className="mt-3 text-sm font-semibold text-blue-100">
                First 20 registrations only
              </p>

              <button
                type="button"
                onClick={() =>
                  addProduct({
                    id: 'camp-full-week',
                    name: 'Full Week Camp',
                    price: 350,
                  })
                }
                className="mt-5 w-full rounded-full bg-white py-4 text-sm font-black text-[#2563EB] active:scale-95"
              >
                Add to Cart
              </button>

            </div>

            {/* 2 WEEKS */}
            <div className="relative rounded-[1.4rem] bg-[#2563EB] p-5 text-white md:rounded-[1.8rem] md:p-7">

              <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#2563EB]">
                Best Value
              </div>

              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-blue-100 md:text-xs">
                2 Weeks
              </p>

              <div className="flex items-end gap-3">

                <h3 className="text-4xl font-black leading-none md:text-5xl">
                  $700
                </h3>

                <span className="pb-1 text-base text-blue-100 line-through md:text-xl">
                  $800
                </span>

              </div>

              <p className="mt-3 text-sm font-semibold text-blue-100">
                Limited early bird offer
              </p>

              <button
                type="button"
                onClick={() =>
                  addProduct({
                    id: 'camp-two-weeks',
                    name: '2 Weeks Camp',
                    price: 700,
                  })
                }
                className="mt-5 w-full rounded-full bg-white py-4 text-sm font-black text-[#2563EB] active:scale-95"
              >
                Add to Cart
              </button>

            </div>

          </div>

          {/* LATE PICKUP */}
          <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-white">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>

                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-200">
                  Add-on
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Late Pick-Up
                </h3>

                <p className="mt-1 text-sm text-zinc-300">
                  Extended care until 5:00pm.
                </p>

              </div>

              <div className="flex items-center gap-4">

                <p className="text-3xl font-black">
                  $10/day
                </p>

                <button
                  type="button"
                  onClick={() =>
                    addProduct({
                      id: 'late-pickup',
                      name: 'Late Pick-Up',
                      price: 10,
                    })
                  }
                  className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#2563EB] active:scale-95"
                >
                  Add
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="bg-[#F5F0E6] px-6 pt-0 pb-28 md:pb-24">

        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Frequently Asked Questions
          </p>

          <h2 className="mb-8 text-5xl font-black leading-none md:mb-12 md:text-7xl">
            EVERYTHING
            <br />
            YOU NEED
          </h2>

          <div className="grid gap-4 md:grid-cols-2 md:gap-6">

            {[
              [
                'What ages is the camp for?',
                'The camp is designed for boys and girls aged 5–12 years.',
              ],
              [
                'Does my child need sports experience?',
                'No. The camp is open to all experience levels.',
              ],
              [
                'What sports are included?',
                'Soccer, basketball, rugby, AFL, movement games and team activities.',
              ],
              [
                'What should children bring?',
                'Lunch, snacks, water bottle, hat and sports clothes.',
              ],
              [
                'Are the children supervised all day?',
                'Yes. Coaches supervise the full program.',
              ],
              [
                'Can I book single days only?',
                'Yes. Single days, full weeks and two-week packages are available.',
              ],
              [
                'Is late pick-up available?',
                'Yes. Extended care until 5pm is available for $10/day.',
              ],
              [
                'How many spots are available?',
                'Places are limited to maintain quality coaching.',
              ],
            ].map(([question, answer]) => (

              <div
                key={question}
                className="rounded-[1.6rem] border-[1.5px] border-black bg-white px-5 py-5 md:rounded-[2rem] md:p-8"
              >

                <h3 className="mb-3 text-2xl font-black leading-tight md:mb-4 md:text-2xl">
                  {question}
                </h3>

                <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
                  {answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-[#2563EB] p-4 md:hidden">

        <button
          type="button"
          onClick={() => {
            document.getElementById('pricing')?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
          className="block w-full rounded-full bg-white py-4 text-center text-lg font-black text-[#2563EB]"
        >
          {itemCount > 0
            ? `View Cart (${itemCount})`
            : 'Register Now →'}
        </button>

      </div>

      {/* FOOTER */}
      <footer className="bg-black px-6 py-16 text-white">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <h3 className="mb-5 text-3xl font-black">
              SPORTSLAB ACADEMY
            </h3>

            <p className="max-w-sm text-lg leading-relaxed text-zinc-400">
              Premium multisport programs helping young athletes develop confidence,
              movement, teamwork and performance.
            </p>

          </div>

          <div>

            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
              Programs
            </p>

            <div className="space-y-3 text-lg">

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

          <div>

            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
              Contact
            </p>

            <div className="space-y-3 text-lg text-zinc-300">

              <p>Davide: 0468744194</p>

              <p>📧 sportslabacademyau@gmail.com</p>

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