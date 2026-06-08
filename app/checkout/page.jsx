'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const { cart, total } = useCart()

  const hasFullWeekCamp = cart.some((item) => item.id === 'camp-full-week')
  const hasSingleDayCamp = cart.some((item) => item.id === 'camp-single-day')
  const hasTwoWeeksCamp = cart.some((item) => item.id === 'camp-two-weeks')

  const requiresClinicWeekSelection = cart.some(
    (item) => item.id === 'elite-soccer-clinic-3-day-block'
  )

  const requiresClinicSingleDayNotes = cart.some(
    (item) => item.id === 'elite-soccer-clinic-single-day'
  )

  const hasFullClinic = cart.some(
    (item) => item.id === 'elite-soccer-clinic-full-program'
  )

  const [form, setForm] = useState({
    parentName: '',
    parentLastName: '',
    email: '',
    phone: '',
    childName: '',
    childDob: '',
    campWeek: '',
    clinicWeek: '',
    notes: '',
  })

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckout = async (e) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert('Your cart is empty.')
      return
    }

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart, form }),
    })

    const data = await res.json()

    if (data.url) {
      window.location.href = data.url
      return
    }

    alert(data.error || 'Something went wrong.')
  }

  return (
    <main className="min-h-screen bg-[#F5F0E6] px-4 py-8 text-white md:px-6 md:py-12">
      <form
        onSubmit={handleCheckout}
        className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_420px]"
      >

        {/* FORM CARD */}
        <section className="mx-auto w-full max-w-[430px] rounded-[2rem] bg-[#0B1220] p-5 shadow-2xl md:max-w-none md:p-10">

          <p className="mb-2 pl-1 text-xs font-black uppercase tracking-[0.28em] text-[#60A5FA]">
            SportsLab Registration
          </p>

          <h1 className="mb-7 text-4xl font-black leading-[0.9] text-white md:text-5xl">
            COMPLETE
            <br />
            REGISTRATION
          </h1>

          <div className="space-y-4">

            <input
              name="parentName"
              required
              placeholder="Parent Name"
              value={form.parentName}
              onChange={updateForm}
              className="h-[64px] w-full rounded-2xl border border-white/25 bg-transparent px-5 text-white outline-none placeholder:text-white/45"
            />

            <input
              name="parentLastName"
              required
              placeholder="Parent Last Name"
              value={form.parentLastName}
              onChange={updateForm}
              className="h-[64px] w-full rounded-2xl border border-white/25 bg-transparent px-5 text-white outline-none placeholder:text-white/45"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              value={form.email}
              onChange={updateForm}
              className="h-[64px] w-full rounded-2xl border border-white/25 bg-transparent px-5 text-white outline-none placeholder:text-white/45"
            />

            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              value={form.phone}
              onChange={updateForm}
              className="h-[64px] w-full rounded-2xl border border-white/25 bg-transparent px-5 text-white outline-none placeholder:text-white/45"
            />

            <input
              name="childName"
              required
              placeholder="Child Name"
              value={form.childName}
              onChange={updateForm}
              className="h-[64px] w-full rounded-2xl border border-white/25 bg-transparent px-5 text-white outline-none placeholder:text-white/45"
            />

            <div className="relative h-[64px] w-full overflow-hidden rounded-2xl border border-white/25 bg-transparent">


              <input
  name="childDob"
  type={form.childDob ? "date" : "text"}
  placeholder="Child Date of Birth"
  required
  value={form.childDob}
  onFocus={(e) => (e.target.type = "date")}
  onChange={updateForm}
  className="h-full w-full appearance-none bg-transparent px-5 ..."
/>

            </div>

            {/* MULTISPORT CAMP WEEK */}
            {hasFullWeekCamp && (
              <select
                name="campWeek"
                required
                value={form.campWeek}
                onChange={updateForm}
                className="h-[64px] w-full rounded-2xl border border-white/25 bg-[#0B1220] px-5 text-white outline-none"
              >
                <option value="">Select Camp Week</option>


                <option value="Week 1 — 1st July to 3rd July">
                  5 Days Camp — 1st-3rd July & 9th-10th July
                </option>

               
              </select>
            )}

            

            {/* ELITE CLINIC 3 DAY BLOCK */}
            {requiresClinicWeekSelection && (
              <select
                name="clinicWeek"
                required
                value={form.clinicWeek}
                onChange={updateForm}
                className="h-[64px] w-full rounded-2xl border border-white/25 bg-[#0B1220] px-5 text-white outline-none"
              >
                <option value="">Select Soccer Clinic Week</option>

                <option value="Week 1 — 1st July to 3rd July">
                  Week 1 — 1st July to 3rd July
                </option>

                <option value="Week 2 — 8th July to 10th July">
                  Week 2 — 8th July to 10th July
                </option>

              </select>
            )}

            {/* CAMP SINGLE DAY */}
            {hasSingleDayCamp && (
              <div className="rounded-2xl border border-white/25 bg-white/5 p-5">

                <p className="text-sm font-bold text-white">
                  Single Day Booking
                </p>

                <p className="mt-1 text-sm leading-relaxed text-white/55">
                  Please write the selected camp day(s) in the notes below.
                </p>

              </div>
            )}

            {/* CLINIC SINGLE DAY */}
            {requiresClinicSingleDayNotes && (
              <div className="rounded-2xl border border-white/25 bg-white/5 p-5">

                <p className="text-sm font-bold text-white">
                  Elite Soccer Clinic Single Day
                </p>

                <p className="mt-1 text-sm leading-relaxed text-white/55">
                  Please write which clinic day(s) your child will attend in the notes below.
                </p>

              </div>
            )}

            {/* FULL CLINIC */}
            {hasFullClinic && (
              <div className="rounded-2xl border border-[#2563EB]/60 bg-[#2563EB]/15 p-5">

                <p className="text-sm font-bold text-white">
                  Full 6-Day Clinic Selected
                </p>

                <p className="mt-1 text-sm leading-relaxed text-white/60">
                  No extra day selection required.
                </p>

              </div>
            )}

            <textarea
              name="notes"
              placeholder={
                hasSingleDayCamp || requiresClinicSingleDayNotes
                  ? 'Confirm selected day(s), notes, allergies or medical information'
                  : 'Notes / Allergies / Medical Information'
              }
              rows={5}
              value={form.notes}
              onChange={updateForm}
              className="w-full rounded-2xl border border-white/25 bg-transparent p-5 text-white outline-none placeholder:text-white/45"
            />

          </div>
        </section>

        {/* ORDER SUMMARY */}
        <aside className="mx-auto h-fit w-full max-w-[430px] rounded-[2rem] bg-[#0B1220] p-5 text-white shadow-2xl md:max-w-none md:p-6">

          <h2 className="mb-6 text-3xl font-black">
            Order Summary
          </h2>

          <div className="space-y-4">

            {cart.length === 0 && (
              <p className="text-white/50">
                Your cart is empty.
              </p>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b border-white/10 pb-4"
              >

                <div>
                  <p className="font-black">{item.name}</p>

                  <p className="text-sm text-white/50">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="font-black">
                  ${item.price * item.quantity}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-6 flex justify-between text-3xl font-black">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#2563EB] py-5 text-lg font-black text-white transition active:scale-95"
          >
            Pay & Register →
          </button>

        </aside>

      </form>
    </main>
  )
}