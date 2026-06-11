'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useCart } from '@/context/CartContext'
import SessionTimeline from '@/components/SessionTimeline'
import SiteNavbar from '@/components/Navbar'

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
    <SiteNavbar
      loggedIn={loggedIn}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      itemCount={itemCount}
      onCartClick={() => setCartOpen(true)}
      onAuthClick={handleAuthButton}
    />
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