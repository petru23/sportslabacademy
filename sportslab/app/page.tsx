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
<section className="bg-[#0B0F19] px-6 pb-20 pt-32 text-white md:min-h-screen md:pt-40">
  <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

    {/* LEFT */}
    <div>
      <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#2563EB] md:text-sm">
        Brisbane Elite Soccer Academy
      </p>

      <h1 className="mb-6 text-5xl font-black leading-[0.9] md:text-8xl">
        TRAIN.
        <br />
        DEVELOP.
        <br />
        COMPETE.
      </h1>

      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
        Modern football development programs helping young athletes build confidence,
        technical ability, movement quality and game intelligence.
      </p>

      <a
        href="#programs"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-8 py-5 text-lg font-black text-white transition hover:scale-105 md:w-auto"
      >
        Explore Programs →
      </a>
    </div>

    {/* RIGHT IMAGE - DESKTOP ONLY */}
    <div className="hidden md:block">
      <div className="overflow-hidden rounded-[3rem] border border-white/10">
        <img
          src="/hero-soccer.jpg"
          alt="SportsLab Academy football training"
          className="h-[620px] w-full object-cover"
        />
      </div>
    </div>

  </div>
</section>

      {/* PROGRAMS */}
<section id="programs" className="bg-[#0B0F19] px-6 py-24 text-white">

  <div className="mx-auto max-w-7xl">

    <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Our Programs
    </p>

    <h2 className="mb-16 text-5xl font-black leading-none md:text-7xl">
      TRAIN
      <br />
      DEVELOP
      <br />
      COMPETE
    </h2>

    <div className="grid gap-8 md:grid-cols-3">

      <a
        href="/camp"
        className="group overflow-hidden rounded-[2.5rem] border border-[#2563EB]/20 bg-[#10182B]/90 backdrop-blur transition hover:-translate-y-2"
      >
        <img
          src="/multisport-camp.jpg"
          alt="Holiday Camps"
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="p-8">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Holiday Programs
          </p>

          <h3 className="mb-4 text-4xl font-black leading-none">
            MULTISPORT
            <br />
            CAMPS
          </h3>

          <p className="mb-8 text-lg leading-relaxed text-zinc-300">
            Active school holiday programs focused on movement, confidence and fun designed for kids aged 5-14.
          </p>

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 font-black">
            Explore →
          </span>
        </div>
      </a>

      <a
        href="/coaching"
        className="group overflow-hidden rounded-[2.5rem] border border-[#2563EB]/20 bg-[#10182B]/90 backdrop-blur transition hover:-translate-y-2"
      >
        <img
          src="/one-on-one.jpg"
          alt="Private Coaching"
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="p-8">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Elite Coaching
          </p>

          <h3 className="mb-4 text-4xl font-black leading-none">
            PRIVATE
            <br />
            TRAINING
          </h3>

          <p className="mb-8 text-lg leading-relaxed text-zinc-300">
            Individual player development sessions focused on performance and game intelligence.
          </p>

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 font-black">
            Explore →
          </span>
        </div>
      </a>

      <a
        href="/junior-program"
        className="group overflow-hidden rounded-[2.5rem] border border-[#2563EB]/20 bg-[#10182B]/90 backdrop-blur transition hover:-translate-y-2"
      >
        <img
          src="/junior-program.jpg"
          alt="Junior Programs"
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="p-8">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Junior Development
          </p>

          <h3 className="mb-4 text-4xl font-black leading-none">
            JUNIOR
            <br />
            PROGRAMS
          </h3>

         <p className="mb-8 text-lg leading-relaxed text-zinc-300">
  Sessions focused on confidence, coordination and
  technical development for young players.
</p>

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-3 font-black">
            Explore →
          </span>
        </div>
      </a>

    </div>

  </div>

</section>

{/* TESTIMONIALS */}
<section className="bg-[#F4F1E8] px-6 py-20 text-[#0F172A] md:py-24">

  <div className="mx-auto max-w-7xl">

    <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Testimonials
    </p>

    <h2 className="mb-12 text-4xl font-black leading-none md:mb-16 md:text-7xl">
      TRUSTED BY
      <br />
      PLAYERS &
      <br />
      FAMILIES.
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      {[
        [
          "The sessions helped me improve my shooting, game awareness and speed of decision-making. The BlazePod methodology makes every drill intense and realistic.",
          "Tommaso Rio • FQPL Player",
        ],
        [
          "Jayde absolutely loves the sessions. The environment is positive, challenging and has really helped her confidence and development.",
          "Jayde’s Mum • Academy Parent",
        ],
        [
          "The junior program has been fantastic for Emma. She’s become more confident, coordinated and excited about football every week.",
          "Emma F. • Junior Program Parent",
        ],
      ].map(([quote, name]) => (
        <div
          key={name}
          className="rounded-[2rem] border border-[#2563EB]/10 bg-white p-6 shadow-xl md:p-8"
        >
          <div className="mb-4 text-[#FBBF24]">
            ★★★★★
          </div>

          <p className="mb-6 text-base leading-relaxed text-zinc-600 md:text-lg">
            “{quote}”
          </p>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-sm font-black text-white">
              {name.split(" ")[0][0]}
              {name.split(" ")[1][0]}
            </div>

            <p className="text-sm font-black text-[#0F172A] md:text-base">
              {name}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>

</section>

{/* FINAL CTA */}
<section className="bg-[#0B0F19] px-6 pt-24 text-white">
  <div className="mx-auto max-w-7xl rounded-[3rem] border border-[#2563EB]/20 bg-[#0F172A] p-10 text-center md:p-16">
    <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Start Your Journey
    </p>

    <h2 className="mb-8 text-5xl font-black leading-none md:text-7xl">
      READY TO
      <br />
      TRAIN WITH US?
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-zinc-300">
      Tell us what you’re looking for and we’ll help you find the right SportsLab program.
    </p>

    <a
      href="#enquire"
      className="inline-flex rounded-full bg-[#2563EB] px-8 py-5 text-lg font-black text-white transition hover:scale-105"
    >
      Enquire Now →
    </a>
  </div>
</section>

{/* ENQUIRE NOW */}
<section id="enquire" className="bg-[#F4F1E8] px-6 py-24 text-[#0F172A]">
  <div className="mx-auto max-w-4xl rounded-[3rem] border border-[#2563EB]/10 bg-[#0F172A] p-10 text-white shadow-2xl md:p-14">
    <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Contact Us
    </p>

    <h2 className="mb-10 text-5xl font-black leading-none md:text-7xl">
      ENQUIRE
      <br />
      NOW
    </h2>

    <form
  action="https://formsubmit.co/sportslabacademyau@gmail.com"
  method="POST"
  className="grid gap-5"
>

  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New SportsLab Homepage Enquiry!" />

  <input
    name="parent_name"
    type="text"
    placeholder="Parent Name"
    className="rounded-xl border border-white/10 bg-[#10182B] px-5 py-4 text-white outline-none placeholder:text-zinc-500"
  />

  <input
    name="child_name"
    type="text"
    placeholder="Child Name"
    className="rounded-xl border border-white/10 bg-[#10182B] px-5 py-4 text-white outline-none placeholder:text-zinc-500"
  />

  <input
    name="date_of_birth"
    type="text"
    placeholder="Date of Birth"
    className="rounded-xl border border-white/10 bg-[#10182B] px-5 py-4 text-white outline-none placeholder:text-zinc-500"
  />

  <input
    name="phone_number"
    type="text"
    placeholder="Parent Mobile Number"
    className="rounded-xl border border-white/10 bg-[#10182B] px-5 py-4 text-white outline-none placeholder:text-zinc-500"
  />

  <input
    name="email"
    type="email"
    placeholder="Email Address"
    className="rounded-xl border border-white/10 bg-[#10182B] px-5 py-4 text-white outline-none placeholder:text-zinc-500"
  />

  <select
    name="program_interest"
    className="rounded-xl border border-white/10 bg-[#10182B] px-5 py-4 text-white outline-none"
  >
    <option>Program Interest</option>
    <option>Private Coaching</option>
    <option>Holiday Camps</option>
    <option>Junior Programs</option>
  </select>

  <textarea
    name="message"
    placeholder="Message"
    rows={5}
    className="rounded-xl border border-white/10 bg-[#10182B] px-5 py-4 text-white outline-none placeholder:text-zinc-500"
  />

  <button
    type="submit"
    className="rounded-full bg-[#2563EB] px-8 py-5 text-lg font-black text-white transition hover:scale-105"
  >
    Submit Enquiry →
  </button>

</form>
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
                Holiday Camps
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