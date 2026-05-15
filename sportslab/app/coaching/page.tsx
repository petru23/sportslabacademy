'use client'

export default function MultisportCampPage() {
  return (
    <main className="bg-[#F5F0E6] text-[#111111]">

      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#2563EB] text-white">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">

          {/* MOBILE LOGIN */}
          <a
            href="/login"
            className="text-sm font-bold uppercase tracking-wide md:hidden"
          >
            LOGIN
          </a>

          {/* LOGO */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          >
            <img
              src="/logo1.png"
              alt="SportsLab Academy"
              className="h-30 w-30 rounded-full object-contain md:h-22 md:w-22"
            />
          </a>

          {/* DESKTOP MENU */}
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

          {/* MOBILE TOGGLE */}
          <input
            id="mobile-menu-toggle"
            type="checkbox"
            className="peer hidden"
          />

          {/* HAMBURGER */}
          <label
  htmlFor="mobile-menu-toggle"
  className="relative z-[100000] flex h-10 w-10 cursor-pointer items-center justify-center text-3xl font-black text-white peer-checked:hidden md:hidden"
>
  ☰
</label>

          {/* MOBILE MENU */}
          <div className="fixed inset-0 z-[99999] translate-x-full bg-[#2563EB] text-white transition-transform duration-300 peer-checked:translate-x-0 md:hidden">

            <div className="flex items-center justify-between px-6 py-5">

              <a
                href="/login"
                className="text-sm font-bold uppercase tracking-wide"
              >
                LOGIN
              </a>

              <a href="/" className="flex items-center justify-center overflow-visible">
  <img
    src="/logo1.png"
    alt="SportsLab Academy"
    className="h-24 w-auto object-contain max-w-none"
  />
</a>

              <label
                htmlFor="mobile-menu-toggle"
                className="cursor-pointer text-5xl font-light leading-none"
              >
                ×
              </label>

            </div>

            <div className="mt-2 flex flex-col px-8 text-3xl font-light uppercase">
              <a href="/" className="border-b border-white/20 py-5">
                HOME
              </a>

              <a href="/camp" className="border-b border-white/20 py-5">
                HOLIDAY PROGRAMS
              </a>

              <a href="/coaching" className="border-b border-white/20 py-5">
                PRIVATE COACHING
              </a>

              <a href="/junior-program" className="border-b border-white/20 py-5">
                JUNIOR PROGRAMS
              </a>

              <a href="/team" className="border-b border-white/20 py-5">
                MEET OUR TEAM
              </a>
            </div>

          </div>

        </div>
      </nav>

      {/* HERO */}
<section className="min-h-screen bg-[#0B0F19] px-6 pb-16 pt-40 text-white">
  <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

    {/* LEFT */}
    <div>

      <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#2563EB]">
        Private Coaching
      </p>

      <h1 className="mb-6 text-5xl font-black leading-[0.9] md:text-7xl">
        ELITE
        <br />
        COACHING
      </h1>

      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
        Elite football coaching focused on technical excellence, game intelligence,
        position-specific development and high-performance player growth.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">

        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-[#2563EB]">
            Format
          </p>

          <p className="text-2xl font-black">
            1-on-1
            <br />
            Small Groups
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-[#2563EB]">
            Players
          </p>

          <p className="text-2xl font-black">
            Academy &
            <br />
            Elite
          </p>
        </div>

      </div>

      <a
  href="#book"
  className="inline-flex rounded-full bg-[#2563EB] px-8 py-5 text-lg font-black text-white transition hover:scale-105"
>
  Book a Session →
</a>

    </div>

    {/* RIGHT */}
    <div className="relative hidden md:block">

      <div className="relative overflow-hidden rounded-[3rem] border border-white/10">
        <img
          src="/one-on-one.jpg"
          alt="Private Coaching"
          className="h-[560px] w-full object-cover"
        />
      </div>

    </div>

  </div>

</section>

      {/* SESSIONS DESIGNED FOR */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/5 p-10 md:p-16">

          <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Athlete Pathways
          </p>

          <h2 className="mb-14 text-5xl font-black leading-none md:text-7xl">
            SESSIONS
            <br />
            DESIGNED FOR
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8">

              <h3 className="mb-6 text-3xl font-black">
                Academy Players 
              </h3>

             <div className="space-y-4 text-lg text-zinc-300">

  <div>✔ Junior & academy footballers</div>

  <div>✔ Technical skill development</div>

  <div>✔ Confidence & game understanding</div>

  <div>✔ Long-term player development</div>

</div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-8">

              <h3 className="mb-6 text-3xl font-black">
                Elite Players
              </h3>

              <div className="space-y-4 text-lg text-zinc-300">

  <div>✔ FQPL level players</div>

  <div>✔ Elite girls pathway athletes</div>

  <div>✔ Position-specific training</div>

  <div>✔ Game intelligence & performance coaching</div>

</div>

            </div>

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
{/* METHODOLOGY */}
<section className="px-6 pb-24">
  <div className="mx-auto max-w-7xl">
    <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Coaching Philosophy
    </p>

    <h2 className="mb-16 text-5xl font-black leading-none md:text-7xl">
      OUR
      <br />
      METHODOLOGY
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {/* TECHNICAL */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="text-5xl">⚽</div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#2563EB]">
                Technical Training
              </p>

              <h3 className="text-3xl font-black">
                Technical Development
              </h3>
            </div>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-zinc-300">
            Sessions focused on first touch, ball mastery, passing quality,
            finishing and technical repetition under pressure.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              ⚽ Ball Mastery
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              🎯 Finishing
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              👟 First Touch
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              🔄 Passing Quality
            </div>
          </div>
        </div>
      </div>

      {/* BLAZEPOD */}
      <div className="relative overflow-hidden rounded-[2rem] border border-[#2563EB]/40 bg-[#2563EB]/10 p-8">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#2563EB]/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="text-5xl">⚡</div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#2563EB]">
                Performance Technology
              </p>

              <h3 className="text-3xl font-black">
                BlazePod Training
              </h3>
            </div>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-zinc-300">
            Advanced reaction-based training using BlazePod technology to improve
            coordination, scanning, acceleration, footwork and decision-making speed.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              ⚡ Reaction Speed
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              👀 Scanning
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              🏃 Footwork
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              🧠 Decision Making
            </div>
          </div>
        </div>
      </div>

      {/* PERFORMANCE */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="text-5xl">🏃</div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#2563EB]">
                Athletic Development
              </p>

              <h3 className="text-3xl font-black">
                Speed & Agility
              </h3>
            </div>
          </div>

          <p className="mb-8 text-lg leading-relaxed text-zinc-300">
            Developing coordination, footwork, agility, acceleration and explosive
            movement to improve athletic performance and technical execution.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              🏃 Acceleration
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              ⚡ Explosiveness
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              👣 Footwork
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm font-semibold">
              🔥 Agility
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VIDEO SECTION */}
<section className="px-6 pb-24">
  <div className="mx-auto max-w-7xl">

    <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Training In Action
    </p>

    <h2 className="mb-16 text-5xl font-black leading-none md:text-7xl">
      SEE THE
      <br />
      STANDARD
    </h2>

    <div className="grid gap-8 md:grid-cols-[0.8fr_1.7fr]">

      {/* LEFT VERTICAL VIDEO */}
      <div className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
        <video
          src="/training-1.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-8">

        {/* HORIZONTAL VIDEO */}
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
          <video
            src="/training-2.mp4"
           className="h-[320px] w-full object-cover object-top"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* BLAZEPOD INFO */}
        <div className="rounded-[2rem] border border-[#2563EB]/30 bg-[#2563EB]/10 p-8">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Performance Technology
          </p>

          <h3 className="mb-6 text-4xl font-black">
            BlazePod Reaction Training
          </h3>

          <p className="mb-8 text-lg leading-relaxed text-zinc-300">
            BlazePods are elite performance training tools used to develop
            reaction speed, coordination, footwork, scanning and fast
            decision-making under pressure.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-semibold">
              ⚡ Reaction Speed
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-semibold">
              👀 Scanning
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-semibold">
              🏃 Footwork
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-semibold">
              🧠 Decision Making
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

{/* PACKAGES */}
<section
  id="book"
  className="bg-[#0B0F19] px-6 pb-24 pt-0 text-white"
>

  <div className="mx-auto max-w-6xl">

    <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Coaching Options
    </p>

    <h2 className="mb-16 text-5xl font-black leading-none md:text-7xl">
      CHOOSE YOUR
      <br />
      TRAINING PLAN
    </h2>

    <div className="grid gap-8 md:grid-cols-2">

      {/* SINGLE SESSION */}
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10">

        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#2563EB]">
          STARTER
        </p>

        <h3 className="mb-4 text-4xl font-black">
          Single Session
        </h3>

        <p className="mb-6 text-6xl font-black">
          $100
        </p>

        <p className="mb-8 text-lg leading-relaxed text-zinc-400">
          Ideal for players wanting an individual training session focused on
          technical development, confidence and game understanding.
        </p>

        <div className="mb-10 space-y-4 text-lg font-semibold text-zinc-300">
          <p>✔ 1x one-on-one session</p>
          <p>✔ Technical & position-specific coaching</p>
          <p>✔ Individual player feedback</p>
        </div>

        <a
          href="/booking"
          className="inline-flex rounded-full bg-[#2563EB] px-8 py-5 text-lg font-black text-white transition hover:scale-105"
        >
          Book Your Session →
        </a>

      </div>

      {/* DEVELOPMENT PACK */}
      <div className="relative rounded-[2.5rem] border border-[#2563EB]/40 bg-[#2563EB]/10 p-10">

        <div className="absolute right-6 top-6 rounded-full bg-[#2563EB] px-4 py-2 text-xs font-black uppercase text-white">
          MOST POPULAR
        </div>

        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#2563EB]">
          ELITE
        </p>

        <h3 className="mb-4 text-4xl font-black">
          5 Session Pack
        </h3>

        <p className="mb-6 text-6xl font-black">
          $450
        </p>

        <p className="mb-8 text-lg leading-relaxed text-zinc-300">
          Designed for committed players looking to build consistency,
          improve performance and maximise long-term development.
        </p>

        <div className="mb-10 space-y-4 text-lg font-semibold text-zinc-300">
          <p>✔ 5x progressive one-on-one sessions</p>
          <p>✔ BlazePod & game intelligence training</p>
          <p>✔ End-of-program IDP review meeting</p>
          
        </div>

        <a
          href="#enquire"
          className="inline-flex rounded-full bg-[#2563EB] px-8 py-5 text-lg font-black text-white transition hover:scale-105"
        >
          Book Your Session →
        </a>

      </div>

    </div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-16 text-white">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <h3 className="mb-5 text-3xl font-black">
              SPORTSLAB ACADEMY
            </h3>

            <p className="max-w-sm text-lg leading-relaxed text-zinc-400">
              Premium sports development programs helping athletes build
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

  )
}