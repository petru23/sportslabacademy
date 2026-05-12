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
  className="fixed bottom-24 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl transition hover:scale-110"
>
  💬
</a>
{/* MOBILE STICKY CTA */}
<div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-[#2563EB] p-4 md:hidden">

  <a
    href="#registration-form"
    className="block rounded-full bg-white py-4 text-center text-lg font-black text-[#2563EB]"
  >
    Join Program →
  </a>

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

    </main>
  );
}