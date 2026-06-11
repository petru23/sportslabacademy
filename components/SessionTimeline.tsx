'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type SessionNote = {
  id: string
  parent_email?: string
  session_date: string
  title: string
  notes: string
  focus_areas: string[] | string | null
}

export default function SessionTimeline({
  parentDashboardId,
}: {
  parentDashboardId: string
}) {
  const [sessions, setSessions] = useState<SessionNote[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!parentDashboardId) return

    const fetchSessions = async () => {
      setLoading(true)

      const { data, error } = await supabase
        .from('session_notes')
        .select('*')
        .eq('parent_email', parentDashboardId)
        .order('session_date', { ascending: false })

      if (error) {
        console.error('Error fetching session notes:', error)
        setSessions([])
      } else {
        setSessions(data || [])
      }

      setLoading(false)
    }

    fetchSessions()
  }, [parentDashboardId])

  if (loading) {
    return (
      <section className="rounded-[2.5rem] border border-white/10 bg-[#111827] p-6 md:p-8">
        <p className="text-sm font-semibold text-zinc-400">
          Loading session timeline...
        </p>
      </section>
    )
  }

  if (sessions.length === 0) {
    return (
      <section className="rounded-[2.5rem] border border-white/10 bg-[#111827] p-6 md:p-8">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#60A5FA]">
          Development Journey
        </p>

        <h2 className="text-4xl font-black text-white">
          Session Timeline
        </h2>

        <p className="mt-4 text-zinc-400">
          No session notes have been added yet.
        </p>
      </section>
    )
  }

  return (
    <section className="rounded-[2.5rem] border border-white/10 bg-[#111827] p-6 md:p-8">
      <div className="mb-8">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#60A5FA]">
          Development Journey
        </p>

        <h2 className="text-4xl font-black text-white">
          Session Timeline
        </h2>

        <p className="mt-3 text-zinc-400">
          Previous sessions, coaching focus and development tracking.
        </p>
      </div>

      <div className="space-y-5">
        {sessions.map((session, index) => {
          const focusAreas = Array.isArray(session.focus_areas)
            ? session.focus_areas
            : typeof session.focus_areas === 'string'
              ? session.focus_areas.split(',').map((item) => item.trim())
              : []

          return (
            <div
              key={session.id}
              className="rounded-[2rem] border border-white/10 bg-[#0B1220] p-5 md:p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#60A5FA]">
                Session #{sessions.length - index}
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                {session.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-zinc-400">
                {new Date(session.session_date).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>

              {session.notes && (
                <p className="mt-5 text-base leading-7 text-zinc-300">
                  {session.notes}
                </p>
              )}

              {focusAreas.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {focusAreas.map((area, i) => (
                    <div
                      key={i}
                      className="rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-2 text-sm font-bold text-[#60A5FA]"
                    >
                      ⚽ {area}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}