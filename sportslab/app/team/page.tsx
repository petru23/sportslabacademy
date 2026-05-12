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
<section className="bg-gradient-to-b from-[#2563EB] to-[#0F172A] px-6 pb-12 pt-32 text-center text-white">

  <div className="mx-auto max-w-5xl">

    <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-white/70">
      
    </p>

    <h1 className="text-4xl font-black md:text-6xl">
      ABOUT US
    </h1>

    <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-white/80">
      Learn more about the coaching philosophy, experience and values behind SportsLab Academy.
    </p>

  </div>

</section>

      {/* STORY CARD */}
<section className="bg-[#F4F1E8] px-6 pb-24 pt-16">

  <div className="mx-auto max-w-6xl rounded-[2.5rem] border-t-8 border-[#2563EB] bg-white p-10 shadow-xl md:p-16">

    <h2 className="mb-10 text-center text-5xl font-black leading-none text-[#0F172A] md:text-6xl">
      OUR STORY
    </h2>

    <div className="mx-auto max-w-4xl space-y-8 text-xl leading-relaxed text-zinc-600">

      <p>
        <span className="font-black tracking-tight text-[#2563EB]">
          SPORTSLAB ACADEMY
        </span>{" "}
        is a private football development academy based in Brisbane, focused on
        helping young players improve through modern coaching, structured
        training and high-performance development methods. 
      </p>

    
      <p>
        What started as small private sessions and local training groups quickly
        grew through word of mouth, family support and a passion for player
        development. Today, SportsLab Academy supports developing footballers through modern
  coaching methods designed to improve technical ability, confidence,
  decision-making and high-performance habits both on and off the pitch.
      </p>

      <p className="font-bold text-[#0F172A]">
  Our mission is to help every player maximise their potential through modern coaching, elite training standards and a positive development environment.
</p>

    </div>

    {/* VALUES */}
<div className="mt-14 grid gap-5 md:grid-cols-3">

  <div className="rounded-[1.5rem] bg-[#EFF6FF] p-6 text-center">
    <div className="mb-3 text-3xl">⚽</div>

    <h3 className="mb-2 text-lg font-black text-[#0F172A]">
      Modern Coaching
    </h3>

    <p className="text-sm leading-relaxed text-zinc-600">
      Structured football sessions focused on long-term player development.
    </p>
  </div>

  <div className="rounded-[1.5rem] bg-[#EFF6FF] p-6 text-center">
    <div className="mb-3 text-3xl">🔥</div>

    <h3 className="mb-2 text-lg font-black text-[#0F172A]">
      Elite Standards
    </h3>

    <p className="text-sm leading-relaxed text-zinc-600">
      High-energy training designed to build confidence and performance.
    </p>
  </div>

  <div className="rounded-[1.5rem] bg-[#EFF6FF] p-6 text-center">
    <div className="mb-3 text-3xl">🤝</div>

    <h3 className="mb-2 text-lg font-black text-[#0F172A]">
      Positive Environment
    </h3>

    <p className="text-sm leading-relaxed text-zinc-600">
      Creating a supportive space where players can enjoy and improve.
    </p>
  </div>

</div>

  </div>

</section>

      {/* MEET TEAM */}
<section className="px-6 pb-24">
  <div className="mx-auto max-w-7xl text-center">
    <h2 className="mb-4 text-5xl font-black">
       MEET OUR COACHES
    </h2>

    <div className="mx-auto mb-10 h-1 w-24 rounded-full bg-[#2563EB]" />

    <p className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed text-zinc-600">
      Professional and passionate coaches dedicated to helping young athletes grow through sport,
      confidence and positive development.
    </p>

    {/* DAVIDE */}
    <div className="overflow-hidden rounded-[2.5rem] bg-white text-left shadow-2xl md:grid md:grid-cols-[380px_1fr]">
      <div className="h-[420px] bg-[url('/davide.jpg')] bg-cover bg-center md:h-full" />

      <div className="p-10 md:p-16">
        <h3 className="mb-3 text-5xl font-black">
          Davide
        </h3>

        <p className="mb-8 text-xl font-semibold text-[#2563EB]">
          Founder & Head Coach
        </p>

        <p className="mb-6 text-lg leading-relaxed text-zinc-600">
          Davide is a C-Licensed coach, holds a Bachelor’s degree in Sport and Exercise Science and a
          Master’s degree in Sport Management. Throughout his career, he has gained coaching experience with clubs
          including Como 1907 in Italy and Brisbane City FC in Australia.
        </p>

        <p className="mb-10 text-lg leading-relaxed text-zinc-600">
          Davide has over 10 years of coaching experience across Italy and Australia.
          He also has more than 5 years of experience delivering 1-to-1 and small group
          training sessions focused on player development, technical skills and game intelligence.
        </p>

        <div className="border-l-4 border-[#2563EB] pl-6">
          <p className="text-xl font-bold italic leading-relaxed text-zinc-700">
            “Great coaching is not only about improving players' skills —
            it’s about helping young athletes believe in themselves.”
          </p>
        </div>
      </div>
    </div>

    {/* CIRO */}
    <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-white text-left shadow-2xl md:grid md:grid-cols-[1fr_380px]">
      <div className="p-10 md:p-16">
        <h3 className="mb-3 text-5xl font-black">
          Ciro Giuseffi
        </h3>

        <p className="mb-8 text-xl font-semibold text-[#2563EB]">
          Coach • Junior Soccer
        </p>

        <p className="mb-6 text-lg leading-relaxed text-zinc-600">
          Ciro has coaching experience in both Italy and Australia, working with
          early age groups, junior soccer schools, and development teams from U8 to U12.
        </p>

        <p className="mb-10 text-lg leading-relaxed text-zinc-600">
          Ciro specialises in building strong technical foundations while helping
          young players develop confidence, coordination, and a genuine love for football.
        </p>

        <div className="border-l-4 border-[#2563EB] pl-6">
          <p className="text-xl font-bold italic leading-relaxed text-zinc-700">
            “The goal is to help young players enjoy the game while developing
            confidence, coordination and strong technical habits.”
          </p>
        </div>
      </div>

      <div className="h-[420px] bg-[url('/ciro.jpg')] bg-cover bg-center md:h-full" />
    </div>
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
    Register Now →
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