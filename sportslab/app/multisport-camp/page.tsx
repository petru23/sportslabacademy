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
      <section className="px-6 pb-24 pt-40">

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          <div>

            <p className="mb-5 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              SportsLab Academy
            </p>

            <h1 className="mb-8 text-5xl font-black leading-none md:text-7xl lg:text-8xl">
              WEST END
              <br />
              HOLIDAY
              <br />
              CAMP
            </h1>

            <p className="mb-10 max-w-xl text-xl leading-relaxed text-zinc-700">
              A high-energy multisport experience for kids aged 6–14, built around sport,
              movement, teamwork, confidence and fun.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#registration-form"
                className="rounded-sm bg-[#2563EB] px-8 py-5 font-black uppercase tracking-wide text-white"
              >
                Register Now →
              </a>

              <a
                href="#sports"
                className="rounded-sm border-2 border-black px-8 py-5 font-black uppercase tracking-wide"
              >
                View Sports
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-[#2563EB]" />

            <div className="relative h-[320px] overflow-hidden rounded-[2rem] border-4 border-black md:h-[650px]">
              <div className="absolute inset-0 bg-[url('/multisport-camp.jpg')] bg-cover bg-center" />
            </div>

          </div>

        </div>

      </section>

      {/* INFO */}
      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">

          {[
            ["Ages", "6 – 14 Years"],
            ["Week 1", "29th June – 3rd July"],
            ["Week 2", "6th July – 10th July"],
            ["Time & Location", "8am – 4pm Davies Park"],
          ].map(([label, value]) => (

            <div
              key={label}
              className="rounded-[2rem] border-2 border-black bg-white p-8"
            >

              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#2563EB]">
                {label}
              </p>

              <h3 className="text-3xl font-black">
                {value}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* SPORTS */}
      <section id="sports" className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Multisport Experience
          </p>

          <h2 className="mb-14 text-5xl font-black leading-none md:text-7xl">
            PLAY
            <br />
            COMPETE
            <br />
            DEVELOP
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              "Soccer",
              "Basketball",
              "Rugby",
              "Volleyball",
              "Cricket",
              "AFL",
            ].map((sport) => (

              <div
                key={sport}
                className="rounded-[2rem] border-2 border-black bg-white p-10 text-center"
              >

                <h3 className="text-3xl font-black">
                  {sport}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              What’s Included
            </p>

            <h2 className="mb-8 text-5xl font-black leading-none md:text-7xl">
              BUILT FOR
              <br />
              ACTIVE KIDS
            </h2>

            <p className="mb-10 max-w-xl text-xl leading-relaxed text-zinc-700">
              Every day combines sport, movement and teamwork in a safe,
              high-energy environment led by experienced coaches.
            </p>

            <div className="space-y-5 text-xl font-semibold">

              <div>✔ Technical Training</div>
              <div>✔ Small-Sided Games</div>
              <div>✔ Agility & Movement</div>
              <div>✔ Team Competitions</div>
              <div>✔ Confidence Building</div>

            </div>

          </div>

          <div className="rounded-[3rem] bg-[#0F172A] p-12 text-white">

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
              Early Bird Pricing
            </p>

            <div className="mb-6 flex items-end gap-4">

              <h3 className="text-6xl font-black md:text-7xl">
                $350
              </h3>

              <p className="pb-3 text-zinc-400">
                per week
              </p>

            </div>

            <p className="mb-10 text-lg leading-relaxed text-blue-100/70">
              Standard pricing is $400 per week. Early bird day rate from $70.
            </p>

            <div className="mb-10 space-y-4 text-lg">

              <div>✔ Full Day Access: 8AM – 4PM</div>
              <div>✔ Multisport Activities</div>
              <div>✔ Licensed Coaches</div>
              <div>✔ Limited Spots Available</div>

            </div>

            <a
              href="#registration-form"
              className="block w-full rounded-full bg-[#2563EB] py-6 text-center text-xl font-black text-white"
            >
              Secure Your Spot
            </a>

          </div>

        </div>

      </section>

      {/* DAILY EXPERIENCE */}
      <section className="bg-[#EEF2FF] px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">

          <div>

            <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              Sport, Movement & Fun
            </p>

            <h2 className="mb-10 text-5xl font-black leading-none md:text-6xl">
              MORE THAN
              <br />
              JUST A CAMP
            </h2>

            <div className="space-y-5">

              {[
                "Multisport activities & team games",
                "Movement exercises adapted by age",
                "Confidence and social development",
                "Experienced coaches and educators",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-[1.5rem] bg-white p-6 shadow-sm"
                >

                  <p className="text-lg font-semibold">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          <div className="rounded-[2.5rem] border-2 border-[#2563EB] bg-white p-10">

            <p className="mb-8 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
              Typical Day
            </p>

            <div className="space-y-8">

              {[
                ["Morning Welcome", "Light activities and team warm-up to start the day."],
                ["Sports & Games", "Organized multisport sessions and competitions."],
                ["Lunch & Recovery", "Relaxation, hydration and social time."],
                ["Afternoon Challenges", "Fun competitions and end-of-day games."],
              ].map(([title, text]) => (

                <div
                  key={title}
                  className="border-l-4 border-[#2563EB] pl-5"
                >

                  <h3 className="text-2xl font-black">
                    {title}
                  </h3>

                  <p className="mt-2 text-lg text-zinc-600">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F8F5EE] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Parent Feedback
          </p>

          <h2 className="mb-14 text-5xl font-black leading-none md:text-7xl">
            TRUSTED BY
            <br />
            FAMILIES
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              ["Such an amazing environment. Hudson came home every day excited and confident.", "Hudson’s Mum"],
              ["The organization and communication were incredible.", "Parent of Ava (9)"],
              ["My son absolutely loved every day.", "Ethan’s Dad"],
              ["The multisport format kept the kids engaged all day.", "Charlotte’s Mum"],
              ["Best holiday camp experience for our family.", "Parent of Leo (11)"],
              ["Already booking again for next holidays.", "Mia’s Mum"],
            ].map(([quote, name]) => (

              <div
                key={name}
                className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm"
              >

                <div className="mb-5 text-[#FBBF24]">
                  ★★★★★
                </div>

                <p className="mb-8 text-lg leading-relaxed text-zinc-700">
                  “{quote}”
                </p>

                <p className="font-black">
                  {name}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#2563EB]">
            Frequently Asked Questions
          </p>

          <h2 className="mb-14 text-5xl font-black leading-none md:text-7xl">
            EVERYTHING
            <br />
            YOU NEED
          </h2>

          <div className="space-y-6">

            {[
              [
                "What should players bring?",
                "Players should bring water, lunch, hat, sunscreen and sports clothes.",
              ],
              [
                "Can players attend both weeks?",
                "Yes. Players can register for one or both camp weeks.",
              ],
              [
                "Is this only soccer?",
                "No. This is a multisport holiday camp with soccer, basketball, rugby and more.",
              ],
              [
                "Are all skill levels welcome?",
                "Yes. The camp is designed for all experience levels.",
              ],
            ].map(([question, answer]) => (

              <div
                key={question}
                className="rounded-[2rem] border-2 border-black bg-white p-8"
              >

                <h3 className="mb-4 text-2xl font-black">
                  {question}
                </h3>

                <p className="text-lg leading-relaxed text-zinc-700">
                  {answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FORM */}
      <section
        id="registration-form"
        className="bg-[#0F172A] px-6 py-24 text-white"
      >

        <div className="mx-auto max-w-4xl">

          <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-blue-300">
            Register Interest
          </p>

          <h2 className="mb-10 text-5xl font-black leading-none md:text-7xl">
            SAVE YOUR
            <br />
            SPOT
          </h2>

          <form
            action="https://formsubmit.co/sportslabacademyau@gmail.com"
            method="POST"
            className="space-y-6"
          >

            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_subject"
              value="New SportsLab Camp Registration!"
            />

            <input
              name="parent_name"
              type="text"
              placeholder="Parent Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-lg outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-lg outline-none"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-lg outline-none"
            />

            <input
              name="player_name"
              type="text"
              placeholder="Player Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-lg outline-none"
            />

            <input
              name="date_of_birth"
              type="date"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-lg outline-none"
            />

            <select
              name="camp_week"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-lg outline-none"
            >

              <option>Select Camp Week</option>
              <option>Week 1 — 29 Jun to 3 Jul</option>
              <option>Week 2 — 6 Jul to 10 Jul</option>
              <option>Both Weeks</option>

            </select>

            <textarea
              name="notes"
              placeholder="Additional Notes"
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-lg outline-none"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#2563EB] py-6 text-xl font-black transition hover:scale-[1.02]"
            >
              Submit Registration →
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