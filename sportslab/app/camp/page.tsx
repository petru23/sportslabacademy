"use client"

import { useState } from "react"

export default function MultisportCampPage() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="bg-[#F5F0E6] text-[#111111]">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#2563EB]/95 text-white backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="flex items-center gap-4">

   <img
      src="/logo1.png"
      alt="SportsLab Academy"
      className="h-20 w-20 rounded-full object-cover"
    />


  <div className="leading-none text-white">

    <p className="text-3xl font-black tracking-wide">
      SPORTSLAB ACADEMY
    </p>

  </div>

</a>
          <div className="flex items-center gap-4">

            {/* DESKTOP */}
            <div className="hidden items-center gap-8 md:flex">

              <a href="/camp" className="font-semibold hover:text-[#2563EB]">
                HOLIDAY CAMPS
              </a>

              <a href="/coaching" className="font-semibold hover:text-[#2563EB]">
                PRIVATE COACHING
              </a>

              <a href="/junior-program" className="font-semibold hover:text-[#2563EB]">
                JUNIOR PROGRAMS
              </a>

              <a href="/team" className="font-semibold hover:text-[#2563EB]">
              MEET OUR TEAM
              </a>

            </div>

            {/* MOBILE */}
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-full bg-[#2563EB] px-4 py-2 text-2xl font-black text-white md:hidden"
            >
              ☰
            </button>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="fixed inset-0 z-[100] bg-[#2563EB] text-white">

          <div className="flex items-center justify-between px-6 py-6">

  <div className="flex items-center gap-4">

    <img
      src="/logo1.png"
      alt="SportsLab Academy"
      className="h-20 w-20 rounded-full object-cover"
    />

    <div>

      <h2 className="text-3xl font-black leading-none">
        SPORTSLAB ACADEMY
      </h2>


    </div>

  </div>

  <button
    onClick={() => setMenuOpen(false)}
    className="text-5xl font-light"
  >
    ×
  </button>

</div>

          <div className="mt-8 flex flex-col px-8 text-3xl font-light uppercase">

            <a href="/" className="border-b border-white/20 py-6">
              HOME
            </a>

            <a href="/camp" className="border-b border-white/20 py-6">
              HOLIDAY CAMPS
            </a>

            <a href="/coaching" className="border-b border-white/20 py-6">
              PRIVATE COACHING
            </a>

            <a href="/junior-program" className="border-b border-white/20 py-6">
              JUNIOR PROGRAMS
            </a>

            <a href="/junior-program" className="border-b border-white/20 py-6">
            MEET OUR TEAM
            </a>

          </div>

        </div>

      )}

      <main className="min-h-screen bg-[#F4F1E8] px-6 py-16 pt-36 text-[#0F172A]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
           

            <h1 className="text-5xl font-black leading-none md:text-7xl">
              MULTISPORT HOLIDAY PROGRAMS
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Premium school holiday programs designed for active kids, movement,
              confidence and multisport development.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <a
              href="/multisport-camp"
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl transition hover:-translate-y-2"
            >
              <div className="relative h-[300px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/multisport-camp.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105" />

                <div className="absolute left-5 top-5 rounded-full bg-[#2563EB] px-5 py-2 text-sm font-black uppercase tracking-wide text-white">
                  Early Bird Available
                </div>
              </div>

              <div className="p-8">
                <h2 className="mb-3 text-4xl font-black leading-none">
                  WEST END
                  <br />
                  HOLIDAY PROGRAM
                </h2>

                <p className="mb-6 text-lg font-semibold text-slate-500">
                  📍 Davies Park
                </p>

                <div className="mb-6 grid gap-4">
                  <div className="rounded-2xl bg-[#F4F1E8] p-5">
                    <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
                      Dates
                    </p>
                    <p className="text-lg font-black">
                      Week 1: 29th June – 3rd July
                      <br />
                      Week 2: 6th July – 10th July
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F4F1E8] p-5">
                    <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#2563EB]">
                      Ages & Time
                    </p>
                    <p className="text-lg font-black">
                      6–14 Years • 8am–4pm
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      from
                    </p>
                    <h3 className="text-5xl font-black">$70</h3>
                    <p className="text-sm text-slate-500">per day</p>
                  </div>

                  <span className="rounded-full bg-[#2563EB] px-6 py-3 font-black text-white">
                    Learn More →
                  </span>
                </div>
              </div>
            </a>

            <div className="flex items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-white/50 p-10 text-center">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
                  Coming Soon
                </p>
                <h2 className="text-4xl font-black">
                  More Camps
                  <br />
                  Coming Soon
                </h2>
              </div>
            </div>
          </div>
        </div> 
      {/* WHATSAPP BUTTON */}
<a
  href="https://wa.me/61468744194"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:scale-110"
>
  💬
</a>
</main>
      
 {/* FOOTER */}
      <footer className="bg-black px-6 py-16 text-white">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <h3 className="mb-5 text-3xl font-black">
              SPORTSLAB ACADEMY
            </h3>

            <p className="max-w-sm text-lg leading-relaxed text-zinc-400">
              Premium sports development programs helping young athletes build
              confidence, movement and performance.
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

              <p>📞 Davide: 0468744194</p>

              <p>📧 sportslabacademyau@gmail.com</p>

              <p>Brisbane, QLD</p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}