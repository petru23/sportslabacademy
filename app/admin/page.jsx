'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminPage() {
  const ADMIN_EMAIL = 'sportslabacademyau@gmail.com'

  const [records, setRecords] = useState([])
  const [profiles, setProfiles] = useState([])
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({})
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const [sessionDate, setSessionDate] = useState('')
  const [sessionTitle, setSessionTitle] = useState('')
  const [sessionNotes, setSessionNotes] = useState('')
  const [sessionFocus, setSessionFocus] = useState('')
  const [sessionHistory, setSessionHistory] = useState([])
  const [editingSessionId, setEditingSessionId] = useState(null)

  const [newParentEmail, setNewParentEmail] = useState('')
  const [newParentName, setNewParentName] = useState('')
  const [newChildName, setNewChildName] = useState('')
  const [newPackage, setNewPackage] = useState('No active package')
  const [newSessionsTotal, setNewSessionsTotal] = useState(0)
  const [newSessionsLeft, setNewSessionsLeft] = useState(0)

  useEffect(() => {
    fetchRecords()
  }, [])

  const fetchRecords = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session || session.user.email !== ADMIN_EMAIL) {
      window.location.href = '/'
      return
    }

    const { data, error } = await supabase
      .from('parent_dashboard')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) setRecords(data)

    const { data: profilesData } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (profilesData) setProfiles(profilesData)

    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const fetchSessionHistory = async (parentEmail) => {
  const { data, error } = await supabase
    .from('session_notes')
    .select('*')
    .eq('parent_email', parentEmail)
    .order('session_date', { ascending: false })

  if (!error && data) {
    setSessionHistory(data)
  }
}

  const selectRecord = async (record) => {
  setSelected(record)

  setForm({
    ...record,
    focus_areas_string: Array.isArray(record.focus_areas)
      ? record.focus_areas.join(', ')
      : '',
  })

  const { data } = await supabase
    .from('session_notes')
    .select('*')
    .eq('parent_email', record.parent_email)
    .order('session_date', { ascending: false })

  setSessionHistory(data || [])
}

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const saveRecord = async () => {
    const focusArray = form.focus_areas_string
      ? form.focus_areas_string.split(',').map((item) => item.trim()).filter(Boolean)
      : null

    const { error } = await supabase
      .from('parent_dashboard')
      .update({
        parent_name: form.parent_name,
        child_name: form.child_name,
        active_package: form.active_package,
        sessions_total: Number(form.sessions_total),
        sessions_left: Number(form.sessions_left),
        next_session: form.next_session,
        active_program: form.active_program,
        program_start: form.program_start,
        coach_notes: form.coach_notes,
        focus_areas: focusArray,
      })
      .eq('id', form.id)

    if (error) {
      alert(error.message)
      return
    }

    alert('Dashboard updated!')
    fetchRecords()
  }

  const addSessionNote = async () => {
  if (!selected) return

  if (!sessionDate || !sessionTitle || !sessionNotes) {
    alert('Please complete date, title and notes.')
    return
  }

  const focusArray = sessionFocus
    ? sessionFocus.split(',').map((item) => item.trim()).filter(Boolean)
    : []

  if (editingSessionId) {
    const { error } = await supabase
      .from('session_notes')
      .update({
        session_date: sessionDate,
        title: sessionTitle,
        notes: sessionNotes,
        focus_areas: focusArray,
      })
      .eq('id', editingSessionId)

    if (error) {
      alert(error.message)
      return
    }
  } else {
    const { error } = await supabase
      .from('session_notes')
      .insert({
        parent_email: selected.parent_email,
        session_date: sessionDate,
        title: sessionTitle,
        notes: sessionNotes,
        focus_areas: focusArray,
      })

    if (error) {
      alert(error.message)
      return
    }
  }

  const { data: allSessions, error: fetchError } = await supabase
    .from('session_notes')
    .select('*')
    .eq('parent_email', selected.parent_email)
    .order('session_date', { ascending: false })

  if (fetchError) {
    alert(fetchError.message)
    return
  }

  const latestSession = allSessions?.[0]
  const completedSessions = allSessions?.length || 0
  const totalSessions = Number(selected.sessions_total || 0)
  const newSessionsLeft = Math.max(totalSessions - completedSessions, 0)

  const { error: updateError } = await supabase
    .from('parent_dashboard')
    .update({
      sessions_left: newSessionsLeft,
      coach_notes: latestSession?.notes || '',
      focus_areas: latestSession?.focus_areas || null,
    })
    .eq('id', selected.id)

  if (updateError) {
    alert(updateError.message)
    return
  }

  setSelected({
    ...selected,
    sessions_left: newSessionsLeft,
    coach_notes: latestSession?.notes || '',
    focus_areas: latestSession?.focus_areas || null,
  })

  setForm({
    ...form,
    sessions_left: newSessionsLeft,
    coach_notes: latestSession?.notes || '',
    focus_areas: latestSession?.focus_areas || null,
    focus_areas_string: Array.isArray(latestSession?.focus_areas)
      ? latestSession.focus_areas.join(', ')
      : '',
  })

  setSessionHistory(allSessions || [])

  setSessionDate('')
  setSessionTitle('')
  setSessionNotes('')
  setSessionFocus('')
  setEditingSessionId(null)

  fetchRecords()

  alert(editingSessionId ? 'Session updated!' : 'Session added and dashboard updated!')
}
const deleteSessionNote = async (sessionId) => {
  if (!selected) return

  const confirmDelete = window.confirm(
    'Are you sure you want to delete this session note?'
  )

  if (!confirmDelete) return

  const { error } = await supabase
    .from('session_notes')
    .delete()
    .eq('id', sessionId)

  if (error) {
    alert(error.message)
    return
  }

  const { data: allSessions } = await supabase
    .from('session_notes')
    .select('*')
    .eq('parent_email', selected.parent_email)
    .order('session_date', { ascending: false })

  const completedSessions = allSessions?.length || 0
  const totalSessions = Number(selected.sessions_total || 0)

  const newSessionsLeft = Math.max(
    totalSessions - completedSessions,
    0
  )

  const latestNote = allSessions?.[0]?.notes || ''
  const latestFocusAreas = allSessions?.[0]?.focus_areas || null

  await supabase
    .from('parent_dashboard')
    .update({
  sessions_left: newSessionsLeft,
  coach_notes: latestNote,
  focus_areas: latestFocusAreas,
})
    .eq('id', selected.id)

  const updatedRecord = {
    ...selected,
    sessions_left: newSessionsLeft,
    coach_notes: latestNote,
  }

  setSelected(updatedRecord)

  setForm({
    ...form,
    sessions_left: newSessionsLeft,
    coach_notes: latestNote,
  })

  setSessionHistory(allSessions || [])

  alert('Session deleted successfully!')
}
  const createParentDashboard = async () => {
    if (!newParentEmail) {
      alert('Parent email is required')
      return
    }

    const { error } = await supabase
      .from('parent_dashboard')
      .insert({
        parent_email: newParentEmail,
        parent_name: newParentName,
        child_name: newChildName,
        active_package: newPackage,
        sessions_total: Number(newSessionsTotal),
        sessions_left: Number(newSessionsLeft),
        next_session: 'To be booked',
        active_program: 'No active camp',
        program_start: '',
        coach_notes: '',
        focus_areas: null,
      })

    if (error) {
      alert(error.message)
      return
    }

    alert('Parent dashboard created!')

    setNewParentEmail('')
    setNewParentName('')
    setNewChildName('')
    setNewPackage('No active package')
    setNewSessionsTotal(0)
    setNewSessionsLeft(0)

    fetchRecords()
  }

  const Navbar = () => (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#2563EB] text-white">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-2">
          <div className="z-10 flex items-center md:hidden">
            <a href="/admin" className="text-sm font-black uppercase tracking-wide">
              Admin
            </a>
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
            <a href="/admin" className="font-black uppercase tracking-wide hover:text-white/70">
              ADMIN
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="cursor-pointer rounded-full bg-white px-5 py-2 text-sm font-black text-[#2563EB]"
            >
              LOGOUT
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
            <a
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="z-10 text-sm font-black uppercase tracking-wide"
            >
              Admin
            </a>

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

            <a onClick={() => setMenuOpen(false)} href="/admin" className="whitespace-nowrap border-b border-white/20 py-4">
              ADMIN
            </a>

            <a onClick={() => setMenuOpen(false)} href="/dashboard" className="whitespace-nowrap border-b border-white/20 py-4">
              DASHBOARD
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-8 text-left text-lg font-black uppercase tracking-wide text-white/70"
            >
              LOGOUT
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
        <main className="flex min-h-screen items-center justify-center bg-[#0B0F19] pt-28 text-white">
          <p className="text-2xl font-black">Loading Admin...</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] px-4 pb-8 pt-36 text-white md:px-6 md:pb-12 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-[#60A5FA]">
            SportsLab Admin
          </p>

          <h1 className="mb-8 text-5xl font-black leading-none md:text-7xl">
            PARENT
            <br />
            DASHBOARDS
          </h1>

          <div className="grid gap-6 md:grid-cols-[420px_1fr]">
            <section className="rounded-[2rem] bg-[#111827] p-5">
              <h2 className="mb-5 text-2xl font-black">Parents</h2>

              <div className="mb-6 rounded-2xl border border-white/10 bg-[#0B1220] p-4">
                <p className="mb-4 text-sm font-black uppercase tracking-wide text-[#60A5FA]">
                  Create Parent Dashboard
                </p>

                <div className="space-y-3">
                  <input value={newParentEmail} onChange={(e) => setNewParentEmail(e.target.value)} placeholder="Parent Email" className="h-[52px] w-full rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />
                  <input value={newParentName} onChange={(e) => setNewParentName(e.target.value)} placeholder="Parent Name" className="h-[52px] w-full rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />
                  <input value={newChildName} onChange={(e) => setNewChildName(e.target.value)} placeholder="Child Name" className="h-[52px] w-full rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />
                  <input value={newPackage} onChange={(e) => setNewPackage(e.target.value)} placeholder="Package" className="h-[52px] w-full rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />

                  <div className="grid grid-cols-2 gap-3">
                    <input type="number" value={newSessionsTotal} onChange={(e) => setNewSessionsTotal(e.target.value)} placeholder="Total" className="h-[52px] rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />
                    <input type="number" value={newSessionsLeft} onChange={(e) => setNewSessionsLeft(e.target.value)} placeholder="Left" className="h-[52px] rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />
                  </div>

                  <button
                    type="button"
                    onClick={createParentDashboard}
                    className="w-full rounded-full bg-[#2563EB] px-6 py-4 font-black text-white"
                  >
                    Create Dashboard →
                  </button>
                </div>
              </div>

              <div className="mb-6 rounded-2xl border border-white/10 bg-[#0B1220] p-4">
                <p className="mb-3 text-sm font-black uppercase tracking-wide text-[#60A5FA]">
                  Registered Users
                </p>

                <div className="max-h-[280px] space-y-2 overflow-y-auto pr-1">
                  {profiles.length > 0 ? (
                    profiles.map((profile) => (
                      <button
                        key={profile.id}
                        type="button"
                        onClick={() => {
                          setNewParentEmail(profile.email)
                          setNewParentName(profile.full_name || '')
                        }}
                        className="w-full rounded-xl border border-white/10 bg-[#111827] p-3 text-left transition hover:border-[#2563EB]"
                      >
                        <p className="font-semibold">{profile.email}</p>
                        <p className="text-xs text-zinc-400">
                          {new Date(profile.created_at).toLocaleDateString()}
                        </p>
                      </button>
                    ))
                  ) : (
                    <p className="text-sm text-zinc-400">No registered users yet.</p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {records.map((record) => (
                  <button
                    key={record.id}
                    type="button"
                    onClick={() => selectRecord(record)}
                    className="w-full rounded-2xl border border-white/10 bg-[#0B1220] p-4 text-left transition hover:border-[#2563EB]"
                  >
                    <p className="font-black">{record.child_name}</p>
                    <p className="text-sm text-zinc-400">{record.parent_email}</p>
                    <p className="mt-1 text-xs text-zinc-500">
                      {record.sessions_left || 0} / {record.sessions_total || 0} sessions left
                    </p>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] bg-[#111827] p-5 md:p-8">
              {!selected ? (
                <p className="text-zinc-400">
                  Select a parent to edit dashboard details.
                </p>
              ) : (
                <div>
                  <h2 className="mb-6 text-3xl font-black">
                    Edit {form.child_name}
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input name="parent_name" value={form.parent_name || ''} onChange={updateForm} placeholder="Parent Name" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                    <input name="child_name" value={form.child_name || ''} onChange={updateForm} placeholder="Child Name" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                    <input name="active_package" value={form.active_package || ''} onChange={updateForm} placeholder="Active Package" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                    <input name="next_session" value={form.next_session || ''} onChange={updateForm} placeholder="Next Session" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                    <input name="sessions_total" type="number" value={form.sessions_total || 0} onChange={updateForm} placeholder="Sessions Total" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                    <input name="sessions_left" type="number" value={form.sessions_left || 0} onChange={updateForm} placeholder="Sessions Left" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                    <input name="active_program" value={form.active_program || ''} onChange={updateForm} placeholder="Active Camp / Clinic" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                    <input name="program_start" value={form.program_start || ''} onChange={updateForm} placeholder="Program Start" className="h-[56px] rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none" />
                  </div>

                  <textarea
                    name="coach_notes"
                    value={form.coach_notes || ''}
                    onChange={updateForm}
                    placeholder="Coach Notes"
                    rows={5}
                    className="mt-4 w-full rounded-2xl border border-white/20 bg-[#0B1220] p-4 text-white outline-none"
                  />

                  <input
                    name="focus_areas_string"
                    value={form.focus_areas_string || ''}
                    onChange={updateForm}
                    placeholder="Optional focus areas, separated by commas"
                    className="mt-4 h-[56px] w-full rounded-2xl border border-white/20 bg-[#0B1220] px-4 text-white outline-none"
                  />

                  <button
                    type="button"
                    onClick={saveRecord}
                    className="mt-6 rounded-full bg-[#2563EB] px-8 py-4 font-black text-white transition active:scale-95"
                  >
                    Save Changes →
                  </button>

                  <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#0B1220] p-6">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.3em] text-[#60A5FA]">
                      Add Session Timeline Entry
                    </p>

                    <h3 className="mb-6 text-3xl font-black">
                      New Session Note
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                      <input value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} placeholder="Session Date e.g. 2026-05-29" className="h-[56px] rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />
                      <input value={sessionTitle} onChange={(e) => setSessionTitle(e.target.value)} placeholder="Session Title" className="h-[56px] rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none" />
                    </div>

                    <textarea
                      value={sessionNotes}
                      onChange={(e) => setSessionNotes(e.target.value)}
                      placeholder="Session Notes"
                      rows={5}
                      className="mt-4 w-full rounded-2xl border border-white/20 bg-[#111827] p-4 text-white outline-none"
                    />

                    <input
                      value={sessionFocus}
                      onChange={(e) => setSessionFocus(e.target.value)}
                      placeholder="Focus Areas separated by commas"
                      className="mt-4 h-[56px] w-full rounded-2xl border border-white/20 bg-[#111827] px-4 text-white outline-none"
                    />

                   <div className="mt-6 flex flex-wrap gap-3">
  <button
    type="button"
    onClick={addSessionNote}
    className="rounded-full bg-[#2563EB] px-8 py-4 font-black text-white"
  >
    {editingSessionId ? 'Save Session Changes →' : 'Add Session Note →'}
  </button>

  {editingSessionId && (
    <button
      type="button"
      onClick={() => {
        setEditingSessionId(null)
        setSessionDate('')
        setSessionTitle('')
        setSessionNotes('')
        setSessionFocus('')
      }}
      className="rounded-full border border-white/20 px-8 py-4 font-black text-white"
    >
      Cancel Edit
    </button>
  )}
</div>

<div className="mt-10">
  <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#60A5FA]">
    Session History
  </p>

  <div className="space-y-3">
    {sessionHistory.length > 0 ? (
      sessionHistory.map((session) => (
        <div
          key={session.id}
          className="rounded-2xl border border-white/10 bg-[#111827] p-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-white">
                {session.title}
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                {session.session_date}
              </p>
            </div>

            <div className="flex gap-2">
  <button
    type="button"
    onClick={() => {
      setEditingSessionId(session.id)
      setSessionDate(session.session_date || '')
      setSessionTitle(session.title || '')
      setSessionNotes(session.notes || '')
      setSessionFocus(
        Array.isArray(session.focus_areas)
          ? session.focus_areas.join(', ')
          : ''
      )
    }}
    className="rounded-full bg-[#2563EB] px-4 py-2 text-xs font-black text-white"
  >
    Edit
  </button>

  <button
    type="button"
    onClick={() => deleteSessionNote(session.id)}
    className="rounded-full border border-red-500/40 px-4 py-2 text-xs font-black text-red-300"
  >
    Delete
  </button>
</div>
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-300">
            {session.notes}
          </p>
        </div>
      ))
    ) : (
      <p className="text-sm text-zinc-400">
        No session notes yet.
      </p>
    )}
  </div>
</div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  )
}