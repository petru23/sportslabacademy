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
      <section className="px-6 pb-12 pt-24 md:pt-40">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>

            <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              BRISBANE ELITE SOCCER
            </p>

            <h1 className="mb-6 text-6xl font-black leading-none tracking-[-0.04em] md:text-8xl">
  TRAIN
  <br />
  DEVELOP
  <br />
  SUCCEED
</h1>

            <p className="mb-6 max-w-xl text-xl leading-relaxed text-slate-700">
              Elite football development programs designed to improve technical ability, game intelligence, confidence and high-performance habits for ambitious athletes.
            </p>

            <div className="mt-12">

  <a
    href="#programs"
    className="inline-flex rounded-full bg-[#2563EB] px-8 py-5 text-lg font-black text-white transition hover:scale-105"
  >
    Explore Programs →
  </a>
  

</div>

          </div>

          <div className="relative">

            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-[#2563EB]" />

            <div className="relative h-[400px] overflow-hidden rounded-[2rem] border-4 border-black md:h-[600px]">
              <div className="absolute inset-0 bg-[url('/hero-soccer.jpg')] bg-cover bg-center" />
            </div>

          </div>

        </div>

      </section>

      {/* PROGRAMS */}
<section id="programs" className="bg-[#0B0F19] px-4 py-8 text-white md:py-18">

  <div className="mx-auto max-w-7xl">

    <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
    Our Programs
    </p>

    <h2 className="mb-10 text-5xl font-black leading-none md:text-7xl">
      ELITE
      <br />
      SOCCER
      <br />
      PROGRAMS
    </h2>

    <div className="grid gap-8 md:grid-cols-3">


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
            1 ON 1
            <br />
            SMALL GROUP
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
            DEVELOPMENT CAMPS
          </p>

          <h3 className="mb-4 text-4xl font-black leading-none">
            SCHOOL HOLIDAY
            <br />
            PROGRAMS
          </h3>

          <p className="mb-8 text-lg leading-relaxed text-zinc-300">
            Elite holiday camps combining soccer development, multisport activities and high-performance coaching.
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
<section className="bg-[#F5F0E6] px-6 py-8 md:py-16">

  <div className="mx-auto max-w-7xl">

    <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Testimonials
    </p>

    <h2 className="mb-8 text-5xl font-black leading-none md:text-7xl">
      TRUSTED BY
      <br />
      PLAYERS &
      <br />
      FAMILIES
    </h2>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {[
        [
  "The sessions helped me improve my shooting, game awareness and speed of decision-making. The BlazePod methodology makes every drill intense, realistic and focused on match situations.",
  "Tommaso Rio • FQPL Player",
],
[
    "The junior program has been fantastic for Hudson. He’s become more confident, coordinated and excited about football every week.",
    "Emma F. • Junior Program Parent",
  ],

  [
    "My child has grown so much in confidence since joining SportsLab. The coaching is energetic, professional and positive.",
    "Sarah M. • Parent",
  ],
  [
    "The 1-to-1 sessions helped me improve my touch, speed and decision-making. Every session feels intense and specific.",
    "Maria S. • Academy Player",
  ],
  [
    "The holiday camp was extremely well organised. The kids were active, engaged and came home smiling every day.",
    "Cam T. • Camp Parent",
  ],
  
  [
    "Jayde absolutely loves the sessions. The coaching environment is positive, challenging and has really helped her confidence and development.",
    "Jayde’s Mum • Academy Parent",
  ],
  

].map(([quote, name]) => (
        <div
          key={name}
          className="rounded-[2rem] border border-[#2563EB]/10 bg-white p-8 shadow-xl"
        >

          <div className="mb-5 text-[#FBBF24]">
            ★★★★★
          </div>

          <p className="mb-8 text-lg leading-relaxed text-zinc-600">
            “{quote}”
          </p>

          <div className="flex items-center gap-4">

  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-[#2563EB] text-base font-black text-white">
    {name.split(" ")[0][0]}
    {name.split(" ")[1][0]}
  </div>

  <p className="font-black text-[#0F172A]">
    {name}
  </p>

</div>

        </div>
      ))}

    </div>

  </div>

</section>

{/* FINAL CTA */}
<section className="bg-[#0B0F19] px-6 py-10 text-white md:py-16">
  <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#2563EB]/20 bg-[#0F172A] px-6 py-10 text-center md:rounded-[3rem] md:p-10">
    <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
      Start Your Journey
    </p>

    <h2 className="mb-6 text-4xl font-black leading-none md:mb-8 md:text-7xl">
      READY TO
      <br />
      TRAIN WITH US?
    </h2>

    <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-zinc-300 md:mb-12 md:text-xl">
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
<section id="enquire" className="bg-[#F4F1E8] px-6 py-12 text-[#0F172A]">
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