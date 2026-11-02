
import Link from "next/link";

const schoolName = "U.P. Kirana Seva Samiti Balika Vidyalaya";

const values = [
  {
    number: "01",
    icon: "✦",
    title: "Our Vision",
    description:
      "To nurture confident, thoughtful and capable young women who are prepared to contribute positively to society.",
  },
  {
    number: "02",
    icon: "✧",
    title: "Our Mission",
    description:
      "To encourage academic learning, independent thinking, responsible behaviour and the holistic development of students.",
  },
  {
    number: "03",
    icon: "❋",
    title: "Our Motto",
    description:
      "सेवा परमो धर्मः — Service is the highest duty. A guiding principle that places values and service at the heart of education.",
  },
];

const management = [
  { name: "Shri Madan Chand Kapoor", role: "President", type: "leadership" },
  { name: "Shri Badri Prasad Gupta", role: "Vice-President", type: "leadership" },
  { name: "Shri Girish Bhatia", role: "General Secretary", type: "office" },
  { name: "Shri Alok Krishna Gupta", role: "Treasurer", type: "office" },
  { name: "Shri Vijay Agarwal", role: "Manager", type: "office" },
  { name: "Shri Nishant Agarwal", role: "Co-Manager", type: "office" },
  { name: "Shri Rakesh Kumar Agarwal", role: "Member", type: "member" },
  { name: "Shri Amar Nath Gupta", role: "Member", type: "member" },
  { name: "Shri Raj Kumar Newatia", role: "Member", type: "member" },
  { name: "Shri Brij Mohan Gupta", role: "Member", type: "member" },
  { name: "Shri Awadhesh Kumar Bajpai", role: "Member", type: "member" },
  { name: "Shri Gautam Khanna", role: "Member", type: "member" },
  { name: "Shri Arvind Gupta", role: "Member", type: "member" },
  { name: "Shri Sudeep Goenka", role: "Member", type: "member" },
  { name: "Shri Bobby Chhabra", role: "Member", type: "member" },
  { name: "Smt. Usha Sengar", role: "Principal Ex-Officio", type: "principal" },
];

export default function AboutPage() {
  const leadership = management.filter((person) => person.type === "leadership");
  const officeBearers = management.filter((person) => person.type === "office");
  const members = management.filter((person) => person.type === "member");
  const principal = management.find((person) => person.type === "principal");

  return (
    <main className="overflow-hidden bg-[#FAF6EE] text-[#30231D]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FAF6EE] px-6 py-16 md:px-12 md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#D9BE83]/40" />
        <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-[#D9BE83]/30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12">

          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#94734C]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#94734C]">
                Welcome to Our School
              </p>
            </div>

            <h1 className="font-serif text-4xl leading-[1.15] text-[#493126] sm:text-5xl md:text-6xl">
              Shaping Young Minds,
              <span className="mt-2 block italic font-normal text-[#A17D49]">
                Inspiring Bright Futures.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#75675C] md:text-base">
              Discover a learning community committed to knowledge,
              character, confidence and the all-round development
              of every girl.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full bg-[#493126] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
              >
                ← Back to Home
              </Link>

              <Link
                href="/academics"
                className="inline-flex items-center gap-3 rounded-full border border-[#B99A67] px-6 py-3.5 text-sm font-semibold text-[#493126] transition duration-300 hover:-translate-y-1 hover:bg-[#EAE0D0]"
              >
                Explore Academics →
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#D9BE83]" />
              <span className="text-[10px] font-semibold tracking-[0.18em] text-[#94734C]">
                LEARNING • VALUES • GROWTH
              </span>
            </div>
          </div>

          {/* DECORATIVE EMBLEM */}
          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#F1E9DC] px-5 py-10 md:col-span-5">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#D9BE83]/50" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-[#D9BE83]/40" />

            <div className="absolute left-[18%] top-[18%] h-2 w-2 rounded-full bg-[#B99A67]" />
            <div className="absolute bottom-[20%] right-[16%] h-2.5 w-2.5 rounded-full bg-[#B99A67]" />

            <div className="relative flex h-[255px] w-[255px] shrink-0 items-center justify-center rounded-full border border-[#C9A96E]/60 shadow-[0_20px_45px_rgba(73,49,38,0.10)]">
              <div className="absolute inset-3 rounded-full border border-[#C9A96E]/50" />
              <div className="absolute inset-7 rounded-full border border-dashed border-[#B99A67]/50" />

              <div className="relative flex h-[190px] w-[190px] flex-col items-center justify-center rounded-full border-[5px] border-[#E4C995] bg-[#493126] text-center text-[#FAF6EE] shadow-xl">
                <span className="text-3xl text-[#D9BE83]">✦</span>
                <p className="mt-3 font-serif text-2xl italic">Our Values</p>
                <div className="my-3 h-px w-12 bg-[#D9BE83]" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E9D7B3]">
                  Knowledge • Service
                </p>
                <p className="mt-3 font-serif text-lg text-[#E4C995]">
                  सेवा परमो धर्मः
                </p>
              </div>
            </div>

            <div className="absolute left-3 top-10 rounded-2xl border border-[#E3D2B2] bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:left-5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#94734C]">
                Established
              </p>
              <p className="mt-1 font-serif text-xl text-[#493126]">2013</p>
            </div>

            <div className="absolute bottom-10 right-3 rounded-2xl border border-[#E3D2B2] bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:right-5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#94734C]">
                Our Guiding Principle
              </p>
              <p className="mt-1 font-serif text-lg italic text-[#493126]">
                Service & Values
              </p>
            </div>

            <span className="absolute right-7 top-10 font-serif text-4xl italic text-[#B99A67]/80">
              01
            </span>

            <span className="absolute bottom-7 left-7 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#94734C]">
              Learning • Character • Growth
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT OUR INSTITUTION */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
              About Our Institution
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              A place where education meets
              <span className="italic text-[#94734C]"> values.</span>
            </h2>

            <div className="my-7 h-px w-16 bg-[#D9BE83]" />

            <div className="space-y-5 text-sm leading-8 text-[#75675C] md:text-base">
              <p>
                {schoolName}, located in Tatya Tope Nagar, Kanpur, is a girls'
                senior secondary school dedicated to creating a supportive
                environment for learning and personal growth.
              </p>

              <p>
                We believe education goes beyond textbooks. Curiosity,
                discipline, creativity, respect and confidence are important
                parts of a meaningful educational journey.
              </p>
            </div>

            <Link
              href="/academics"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#94734C] pb-2 text-sm font-semibold text-[#493126] transition-all hover:gap-5"
            >
              Explore Academics <span>→</span>
            </Link>
          </div>

          <div className="relative rounded-3xl border border-[#E4DACA] bg-white p-8 shadow-[0_12px_35px_rgba(48,35,29,0.07)] md:p-10">
            <span className="font-serif text-5xl text-[#D9BE83]">“</span>
            <p className="font-serif text-2xl italic leading-relaxed text-[#493126]">
              Education is not just about learning facts; it is about
              developing the confidence to shape the future.
            </p>
            <div className="mt-7 h-1 w-14 rounded-full bg-[#D9BE83]" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#94734C]">
              Learning • Character • Growth
            </p>
          </div>
        </div>
      </section>

      {/* VISION, MISSION & MOTTO */}
      <section className="bg-[#493126] px-6 py-20 text-[#FAF6EE] md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9BE83]">
              Our Foundation
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">
              What Guides Us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
              The principles that shape our approach to education and
              personal development.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-[#D9BE83]/25 bg-[#FAF6EE]/[0.07] p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D9BE83]/70 hover:bg-[#FAF6EE]/[0.12] hover:shadow-2xl md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#D9BE83]">
                    {item.number}
                  </span>
                  <span className="font-serif text-3xl text-[#D9BE83] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
                    {item.icon}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.description}
                </p>
                <div className="mt-7 h-0.5 w-10 rounded-full bg-[#D9BE83] transition-all duration-500 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD OF MANAGEMENT */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full border border-[#D9BE83]/30" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full border border-[#D9BE83]/30" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#94734C]">
              Leadership & Governance
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#493126] sm:text-5xl md:text-6xl">
              Board of <span className="italic text-[#A17D49]">Management</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#75675C] md:text-base">
              The distinguished management committee guiding the institution
              with leadership, responsibility and a commitment to education.
            </p>

            <div className="mx-auto mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#D9BE83]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#94734C]">
                16 MEMBERS
              </span>
              <span className="h-px w-12 bg-[#D9BE83]" />
            </div>
          </div>

          {/* PRESIDENT & VICE-PRESIDENT */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {leadership.map((person, index) => (
              <article
                key={person.name}
                className="group relative overflow-hidden rounded-[2rem] border border-[#D9BE83]/60 bg-white p-7 shadow-[0_15px_40px_rgba(73,49,38,0.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(73,49,38,0.13)] md:p-9"
              >
                <span className="absolute -right-5 -top-10 font-serif text-9xl text-[#F1E9DC] transition-transform duration-500 group-hover:scale-110">
                  0{index + 1}
                </span>

                <div className="relative">
                  <span className="inline-flex rounded-full bg-[#F1E9DC] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
                    {person.role}
                  </span>

                  <h3 className="mt-7 max-w-md font-serif text-2xl leading-snug text-[#493126] md:text-3xl">
                    {person.name}
                  </h3>

                  <div className="mt-6 h-1 w-12 rounded-full bg-[#D9BE83] transition-all duration-500 group-hover:w-24" />
                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#94734C]">
                    Board of Management
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* OFFICE BEARERS */}
          <div className="mt-16">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#D9BE83]/60" />
              <h3 className="font-serif text-2xl text-[#493126] md:text-3xl">
                Office Bearers
              </h3>
              <span className="h-px flex-1 bg-[#D9BE83]/60" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {officeBearers.map((person, index) => (
                <article
                  key={person.name}
                  className="group rounded-2xl border border-[#E4DACA] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D9BE83] hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-[#D9BE83]">
                      0{index + 3}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#A9B7A1]" />
                  </div>

                  <h4 className="mt-6 font-serif text-xl leading-snug text-[#493126]">
                    {person.name}
                  </h4>

                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.15em] text-[#94734C]">
                    {person.role}
                  </p>

                  <div className="mt-5 h-px w-full bg-[#EAE0D0]" />
                </article>
              ))}
            </div>
          </div>

          {/* COMMITTEE MEMBERS */}
          <div className="mt-16">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#D9BE83]/60" />
              <h3 className="font-serif text-2xl text-[#493126] md:text-3xl">
                Committee Members
              </h3>
              <span className="h-px flex-1 bg-[#D9BE83]/60" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((person, index) => (
                <article
                  key={person.name}
                  className="group flex items-center gap-4 rounded-2xl border border-[#E4DACA] bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D9BE83] hover:bg-white hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9BE83]/60 bg-[#F1E9DC] font-serif text-sm text-[#94734C] transition-colors group-hover:bg-[#493126] group-hover:text-[#FAF6EE]">
                    {String(index + 7).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h4 className="font-serif text-lg leading-snug text-[#493126]">
                      {person.name}
                    </h4>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
                      {person.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* PRINCIPAL */}
          {principal && (
            <div className="mt-12">
              <article className="relative overflow-hidden rounded-[2rem] border border-[#D9BE83] bg-[#493126] p-7 text-[#FAF6EE] shadow-xl md:flex md:items-center md:justify-between md:px-10 md:py-9">
                <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#D9BE83]/25" />

                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D9BE83]">
                    Institutional Leadership
                  </p>
                  <h3 className="mt-4 font-serif text-2xl md:text-3xl">
                    {principal.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#E4C995]">
                    {principal.role}
                  </p>
                </div>

                <div className="relative mt-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#D9BE83]/60 font-serif text-2xl text-[#D9BE83] md:mt-0">
                  ✦
                </div>
              </article>
            </div>
          )}

          <p className="mt-8 text-center text-xs leading-6 text-[#94734C]">
            Board of Management details as provided in the school's management
            record.
          </p>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#EAE0D0] px-7 py-12 md:px-14 md:py-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C6AD84]/50" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
              Our Commitment
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Every student deserves the opportunity to
              <span className="italic text-[#94734C]">
                {" "}learn, grow and thrive.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#75675C] md:text-base">
              Our goal is to support students through meaningful learning
              experiences, a culture of respect and opportunities to discover
              their strengths.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#493126] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737] hover:shadow-xl"
            >
              Connect With Us <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#302017] px-6 py-12 text-center text-[#FAF6EE] md:px-12">
        <img
          src="/school-logo.webp"
          alt="School logo"
          className="mx-auto h-16 w-16 rounded-full border border-[#D9BE83] bg-white object-contain"
        />

        <p className="mt-5 font-serif text-xl">{schoolName}</p>

        <p className="mt-3 text-sm text-white/60">
          Tatya Tope Nagar, Kanpur, Uttar Pradesh
        </p>

        <p className="mt-5 text-sm italic text-[#D9BE83]">
          सेवा परमो धर्मः
        </p>

        <div className="mt-8 border-t border-white/15 pt-6 text-xs text-white/45">
          © 2026 {schoolName}
        </div>
      </footer>
    </main>
  );
}
