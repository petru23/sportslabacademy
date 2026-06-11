'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useCart } from '@/context/CartContext'
import SessionTimeline from '@/components/SessionTimeline'

export default function DashboardPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { cart, setCartOpen } = useCart()
  const itemCount = cart?.reduce((total, item) => total + item.quantity, 0) || 0
  const isPackage = data?.dashboard_type === 'package'
  const dashboardFocusAreas = Array.isArray(data?.focus_areas)
  ? data.focus_areas
  : typeof data?.focus_areas === 'string'
    ? data.focus_areas.split(',').map((item) => item.trim()).filter(Boolean)
    : []

  const handleAuthButton = async () => {
    if (loggedIn) {
      await supabase.auth.signOut()
      window.location.href = '/'
    } else {
      window.location.href = '/'
    }
  }

  useEffect(() => {
    const fetchDashboard = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        window.location.href = '/'
        return
      }

      setLoggedIn(true)

      const email = session.user.email
      setUserEmail(email)

      const { data, error } = await supabase
        .from('parent_dashboard')
        .select('*')
        .eq('parent_email', email)
        .maybeSingle()

      if (!error && data) {
        setData(data)
      }

      setLoading(false)
    }

    fetchDashboard()
  }, [])

  const Navbar = () => (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#2563EB] text-white">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-2">

          <div className="z-10 flex items-center md:hidden">
            {loggedIn ? (
              <button
                type="button"
                onClick={() => setCartOpen(true)}
                className="relative ml-2 cursor-pointer"
              >
                <span className="text-3xl brightness-0 invert">🛒</span>

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
                <span className="text-3xl brightness-0 invert">🛒</span>

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

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="z-10 flex h-10 w-10 items-center justify-center text-3xl font-black md:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[99999] bg-[#2563EB] text-white md:hidden">
          <div className="relative flex items-center justify-between px-4 py-3">

            <div className="z-10 flex items-center md:hidden">
              {loggedIn ? (
                <button
                  type="button"
                  onClick={() => setCartOpen(true)}
                  className="relative ml-2"
                >
                  <span className="text-3xl brightness-0 invert">🛒</span>

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

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="z-10 flex h-10 w-10 items-center justify-center text-4xl font-light leading-none"
            >
              ×
            </button>
          </div>

          <div className="mt-6 flex flex-col px-8 text-2xl font-light uppercase tracking-tight">
            <a onClick={() => setMenuOpen(false)} href="/" className="whitespace-nowrap border-b border-white/20 py-4">
              HOME
            </a>

            {loggedIn && (
              <a onClick={() => setMenuOpen(false)} href="/dashboard" className="whitespace-nowrap border-b border-white/20 py-4">
                DASHBOARD
              </a>
            )}

            <a onClick={() => setMenuOpen(false)} href="/camp" className="whitespace-nowrap border-b border-white/20 py-4">
              HOLIDAY PROGRAMS
            </a>

            <a onClick={() => setMenuOpen(false)} href="/coaching" className="whitespace-nowrap border-b border-white/20 py-4">
              PRIVATE COACHING
            </a>

            <a onClick={() => setMenuOpen(false)} href="/junior-program" className="whitespace-nowrap border-b border-white/20 py-4">
              JUNIOR PROGRAMS
            </a>

            <a onClick={() => setMenuOpen(false)} href="/team" className="whitespace-nowrap border-b border-white/20 py-4">
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
    </>
  )

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-[#0B0F19] pt-32 text-white">
          <p className="text-2xl font-bold">Loading Dashboard...</p>
        </main>
      </>
    )
  }

  if (!data) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#0B0F19] px-6 pb-16 pt-40 text-white">
          <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/10 bg-[#111827] p-8 text-center shadow-2xl md:p-12">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#60A5FA]">
              SportsLab Dashboard
            </p>

            <h1 className="mb-6 text-4xl font-black leading-none md:text-6xl">
              NO ACTIVE
              <br />
              PROGRAMS YET
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-zinc-300">
              We could not find any active bookings or packages connected to:
              <br />
              <span className="font-black text-white">{userEmail}</span>
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="/camp" className="rounded-full bg-[#2563EB] px-6 py-4 font-black text-white">
                View Holiday Programs →
              </a>

              <a href="/coaching" className="rounded-full bg-[#2563EB] px-6 py-4 font-black text-white">
                View Private Coaching →
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] px-4 pb-8 pt-20 text-white md:px-6 md:pb-12 md:pt-40">
        <div className="mx-auto max-w-7xl">

          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#60A5FA] md:text-xs md:tracking-[0.3em]">
            SportsLab Parent Dashboard
          </p>

          <h1 className="mb-1 text-4xl font-black leading-none md:mb-2 md:text-7xl">
            WELCOME
          </h1>

          <p className="mb-5 text-lg text-zinc-400 md:mb-8 md:text-xl">
            {data.parent_name} — {data.child_name}
          </p>

         <div className="grid gap-3 md:grid-cols-4 md:gap-5">

  <div className="rounded-[1.5rem] border border-white/10 bg-[#111827] p-4 md:rounded-[2rem] md:p-6">
    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#60A5FA] md:text-xs md:tracking-[0.25em]">
      Active Package
    </p>
    <h2 className="text-2xl font-black md:text-3xl">
      {data.active_package || 'No active package'}
    </h2>
  </div>

  <div className="rounded-[1.5rem] border border-white/10 bg-[#111827] p-4 md:rounded-[2rem] md:p-6">
    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#60A5FA] md:text-xs md:tracking-[0.25em]">
      Next Session
    </p>
    <h2 className="text-xl font-black md:text-2xl">
      {data.next_session || 'To be booked'}
    </h2>
  </div>

  {isPackage && (
  <div className="rounded-[1.5rem] border border-white/10 bg-[#111827] p-4 md:col-span-2 md:rounded-[2rem] md:p-6">
    <div className="mb-3 flex items-center justify-between gap-4">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#60A5FA] md:text-xs md:tracking-[0.25em]">
        Training Package Progress
      </p>

      <p className="text-sm font-bold text-zinc-300 md:text-base">
        {data.sessions_left || 0} remaining
      </p>
    </div>

    <div className="mb-3 h-3 overflow-hidden rounded-full bg-[#0B1220] md:h-4">
      <div
        className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
        style={{
          width: `${
            data.sessions_total
              ? ((data.sessions_total - data.sessions_left) /
                  data.sessions_total) *
                100
              : 0
          }%`,
        }}
      />
    </div>

    <div className="flex justify-between text-sm text-zinc-400">
      <span>{data.sessions_total - data.sessions_left} completed</span>
      <span>{data.sessions_left} remaining</span>
    </div>
  </div>
)}

</div>

<div className="mt-4 grid items-stretch gap-4 md:mt-6 md:grid-cols-[1.2fr_0.8fr] md:gap-6">

  {isPackage && (
    <div className="-mx-4 bg-[#F5F0E6] px-4 py-6 md:mx-0 md:h-full md:bg-transparent md:px-0 md:py-0">
      <section className="h-full rounded-[1.75rem] border border-white/10 bg-[#111827] p-4 md:rounded-[2.5rem] md:p-8">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#60A5FA] md:mb-3 md:text-xs md:tracking-[0.3em]">
          Coach Notes
        </p>

        <h2 className="mb-4 text-2xl font-black md:mb-6 md:text-4xl">
          Latest Session Focus
        </h2>

        <div className="rounded-[1.5rem] bg-[#0B1220] p-4 md:rounded-[2rem] md:p-6">
          <p className="mb-4 text-sm leading-6 text-zinc-300 md:mb-6 md:text-lg md:leading-relaxed">
            {data.coach_notes || 'No coach notes yet.'}
          </p>

          {Array.isArray(data.focus_areas) && data.focus_areas.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3">
              {data.focus_areas.map((area, index) => (
                <div
                  key={index}
                  className="rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-2 text-sm font-bold text-[#60A5FA]"
                >
                  ⚽ {area}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )}

  {!isPackage && (
    <div className="-mx-4 bg-[#F5F0E6] px-4 py-6 md:mx-0 md:h-full md:bg-transparent md:px-0 md:py-0">
      <section className="h-full rounded-[1.75rem] border border-white/10 bg-[#111827] p-4 md:rounded-[2.5rem] md:p-8">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#60A5FA] md:mb-3 md:text-xs md:tracking-[0.3em]">
          Upgrade Available
        </p>

        <h2 className="mb-4 text-2xl font-black md:mb-6 md:text-4xl">
          Unlock Full Player Development Tracking
        </h2>

        <p className="text-sm leading-6 text-zinc-300 md:text-lg md:leading-relaxed">
          Upgrade to the 5 Session IDP Package to access detailed coach notes,
          focus areas, progress tracking and a full session timeline.
        </p>

        <a
          href="/coaching"
          className="mt-6 inline-block rounded-full bg-[#2563EB] px-6 py-4 font-black text-white"
        >
          Upgrade to 5 Session Package →
        </a>
      </section>
    </div>
  )}


  <section className="h-full rounded-[1.75rem] border border-white/10 bg-[#111827] p-4 md:rounded-[2.5rem] md:p-8">
    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#60A5FA] md:mb-3 md:text-xs md:tracking-[0.3em]">
      Quick Actions
    </p>

    <h2 className="mb-4 text-2xl font-black md:mb-6 md:text-4xl">
      Manage
    </h2>

    <div className="space-y-3 md:space-y-4">
      <a
        href="https://calendly.com/sportslabacademyau/sportslab-private-coaching"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full bg-[#2563EB] px-5 py-3 text-center text-sm font-black md:px-6 md:py-4 md:text-base"
      >
        Book Next Session →
      </a>

      <a
        href="/camp"
        className="block rounded-full border border-white/20 px-5 py-3 text-center text-sm font-black md:px-6 md:py-4 md:text-base"
      >
        View Holiday Programs →
      </a>

      <a
        href="https://wa.me/61468744194"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-full border border-white/20 px-5 py-3 text-center text-sm font-black md:px-6 md:py-4 md:text-base"
      >
        Message Coach →
      </a>
    </div>
  </section>

</div>

{isPackage && (
  <div className="-mx-4 mt-4 bg-[#F5F0E6] px-4 py-6 md:mx-0 md:mt-6 md:bg-transparent md:px-0 md:py-0">
    <SessionTimeline parentDashboardId={data.parent_email} />
  </div>
)}

</div>
</main>
</>
)
}