
import Link from "next/link";

const highlights = [
  {
    number: "01",
    title: "Academic Excellence",
    description:
      "An environment that encourages curiosity, conceptual learning and intellectual growth.",
    symbol: "✳",
  },
  {
    number: "02",
    title: "Character & Values",
    description:
      "Building confidence, responsibility, respect and a spirit of service.",
    symbol: "✧",
  },
  {
    number: "03",
    title: "Beyond Academics",
    description:
      "Encouraging creativity, participation and opportunities to discover individual strengths.",
    symbol: "◇",
  },
];

const quickLinks = [
  { title: "Our Story", detail: "Discover our institution", href: "/about" },
  { title: "Academics", detail: "Explore learning pathways", href: "/academics" },
  { title: "Campus Life", detail: "Experience school life", href: "/campus-life" },
  { title: "School Events", detail: "Discover celebrations", href: "/events" },
  { title: "Notice Board", detail: "Important school announcements", href: "/notices" },
  { title: "Parents Corner", detail: "Resources for parents", href: "/parents" },
];

const cardEffect =
  "rounded-3xl border border-[#E4DACA] shadow-[0_8px_25px_rgba(48,35,29,0.07)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(48,35,29,0.15)]";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF6EE] text-[#30231D]">

      {/* HERO */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#302017] md:min-h-[700px]">

        <img
          src="/school-campus.jpg"
          alt="U.P. Kirana Seva Samiti Balika Vidyalaya campus"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#21150F]/95 via-[#302017]/85 to-[#302017]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21150F]/80 via-transparent to-[#21150F]/30" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-12 md:px-12 md:py-24">

          <div className="relative z-20 md:col-span-7">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D9BE83]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E9D7B3] sm:text-xs">
                U.P. Kirana Seva Samiti Balika Vidyalaya
              </p>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
              Where
              <span className="block font-serif italic font-normal text-[#E4C995]">
                Knowledge
              </span>
              Meets Possibility.
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/80 sm:text-base md:text-lg">
              A place to learn, discover, build confidence and grow.
              Celebrating the journey of education and the potential
              within every student.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D9BE83] px-6 py-3.5 text-sm font-semibold text-[#30231D] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F0DFC0]"
              >
                Discover Our School
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/academics"
                className="inline-flex items-center rounded-full border border-white/60 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-[#D9BE83] hover:bg-white/10 hover:text-[#E9D7B3]"
              >
                Explore Academics
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/65">
              <span className="h-px w-10 bg-[#D9BE83]" />
              Learning • Values • Growth
            </div>
          </div>

          {/* ANIMATED ORBIT */}
          <div className="relative z-10 mx-auto flex h-[390px] w-full max-w-[440px] items-center justify-center md:col-span-5 md:h-[460px]">

            <div className="absolute h-[340px] w-[340px] animate-[spin_35s_linear_infinite] rounded-full border border-[#D9BE83]/40 motion-reduce:animate-none md:h-[390px] md:w-[390px]">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#E4C995] shadow-[0_0_18px_#E4C995]" />
              <span className="absolute bottom-10 right-8 h-2 w-2 rounded-full bg-[#D9BE83]" />
            </div>

            <div className="absolute h-[270px] w-[270px] animate-[spin_24s_linear_infinite_reverse] rounded-full border border-dashed border-[#E4C995]/50 motion-reduce:animate-none md:h-[315px] md:w-[315px]">
              <span className="absolute bottom-8 left-5 h-3 w-3 rounded-full bg-[#D9BE83] shadow-[0_0_15px_#D9BE83]" />
            </div>

            <div className="absolute h-[210px] w-[210px] animate-[spin_18s_linear_infinite] rounded-full border border-[#D9BE83]/35 motion-reduce:animate-none md:h-[240px] md:w-[240px]" />

            <div className="relative z-10 flex h-[155px] w-[155px] animate-pulse flex-col items-center justify-center rounded-full border border-[#E4C995]/70 bg-[#493126]/90 text-center shadow-[0_0_60px_rgba(217,190,131,0.22)] backdrop-blur-md motion-reduce:animate-none md:h-[175px] md:w-[175px]">
              <span className="text-4xl text-[#E4C995]">✦</span>
              <p className="mt-2 font-serif text-2xl italic text-white">
                Knowledge
              </p>
              <div className="my-2 h-px w-10 bg-[#D9BE83]" />
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#E9D7B3]">
                Inspiring Futures
              </p>
            </div>

            <div className="absolute left-0 top-12 animate-[bounce_6s_ease-in-out_infinite] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl motion-reduce:animate-none">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#E9D7B3]">Discover</p>
              <p className="mt-1 font-serif text-lg text-white">Creativity</p>
            </div>

            <div className="absolute right-0 top-20 animate-[bounce_7s_ease-in-out_infinite] rounded-2xl border border-[#D9BE83]/40 bg-[#493126]/70 px-4 py-3 shadow-xl backdrop-blur-xl motion-reduce:animate-none">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#E9D7B3]">Building</p>
              <p className="mt-1 font-serif text-lg text-white">Confidence</p>
            </div>

            <div className="absolute bottom-9 left-5 animate-[bounce_8s_ease-in-out_infinite] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl motion-reduce:animate-none">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#E9D7B3]">Growing With</p>
              <p className="mt-1 font-serif text-lg text-white">Values</p>
            </div>

            <div className="absolute bottom-3 right-5 font-serif text-4xl italic text-[#E4C995]/80">
              ✧
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#D9BE83] via-[#FAF6EE] to-[#A9B7A1]" />
      </section>

      {/* INTRODUCTION */}
      <section className="relative px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-center">

          <div className="md:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
              An Institution. A Journey.
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Education is the art of
              <span className="italic text-[#94734C]"> becoming.</span>
            </h2>

            <div className="my-7 h-px w-16 bg-[#D9BE83]" />

            <p className="max-w-xl text-sm leading-8 text-[#75675C] md:text-base">
              At U.P. Kirana Seva Samiti Balika Vidyalaya, education
              represents more than academic achievement. It is a journey
              of developing knowledge, character, confidence and values.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#94734C] pb-2 text-sm font-semibold text-[#493126] transition-all hover:gap-5"
            >
              Discover Our Story <span>→</span>
            </Link>
          </div>

          <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#F1E9DC] p-8 md:col-span-6">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D9BE83]/60" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border border-[#D9BE83]/50" />

            <div className="relative z-10 max-w-sm text-center">
              <span className="font-serif text-6xl text-[#C6A66C]">“</span>
              <p className="font-serif text-3xl italic leading-relaxed text-[#493126]">
                सेवा परमो धर्मः
              </p>
              <div className="mx-auto my-5 h-px w-16 bg-[#B99A67]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#94734C]">
                Our Guiding Motto
              </p>
              <p className="mt-4 text-sm leading-7 text-[#75675C]">
                Learning with purpose. Growing with values.
                Moving towards a brighter future.
              </p>
            </div>

            <span className="absolute right-7 top-7 font-serif text-5xl italic text-[#B99A67]/50">
              02
            </span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#493126] px-6 py-20 text-[#FAF6EE] md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9BE83]">
              The Foundation
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              More than education.
              <span className="block italic text-[#D9BE83]">
                A foundation for life.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-[#D9BE83]/25 bg-[#FAF6EE]/[0.07] p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#D9BE83]/70 hover:bg-[#FAF6EE]/[0.12] hover:shadow-2xl md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#D9BE83]">
                    {item.number}
                  </span>
                  <span className="font-serif text-3xl text-[#D9BE83] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
                    {item.symbol}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-xl md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.description}
                </p>
                <div className="mt-7 h-0.5 w-10 rounded-full bg-[#D9BE83] transition-all duration-500 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: LATEST NOTICES PREVIEW */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#D9BE83]/30" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-12 md:items-center">

            <div className="md:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
                Stay Connected
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#493126] md:text-6xl">
                What's happening
                <span className="block italic text-[#94734C]">
                  at our school?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#75675C] md:text-base">
                Find important announcements, examination updates,
                parent communication and official school documents
                through our information centre.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/notices"
                  className="inline-flex items-center gap-3 rounded-full bg-[#493126] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#654737]"
                >
                  Visit Notice Board
                  <span className="text-[#D9BE83]">→</span>
                </Link>

                <Link
                  href="/notices#downloads"
                  className="inline-flex items-center gap-3 rounded-full border border-[#CDB88F] px-7 py-3.5 text-sm font-semibold text-[#493126] transition hover:bg-[#EEE5D8]"
                >
                  Download Centre
                </Link>
              </div>
            </div>

            {/* Information panel */}
            <div className="relative md:col-span-5">
              <div className="rounded-[2rem] border border-[#E4DACA] bg-white/70 p-7 shadow-[0_15px_45px_rgba(48,35,29,0.07)] md:p-9">

                <div className="flex items-center justify-between border-b border-[#E8DDCC] pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
                      Information Desk
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-[#493126]">
                      School Updates
                    </h3>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEE5D8] font-serif text-2xl text-[#94734C]">
                    ✦
                  </span>
                </div>

                <div className="mt-6 space-y-5">

                  {[
                    {
                      icon: "✧",
                      title: "General Announcements",
                      detail: "School circulars and important updates",
                    },
                    {
                      icon: "✎",
                      title: "Examination Updates",
                      detail: "Academic schedules and instructions",
                    },
                    {
                      icon: "◇",
                      title: "Parent Communication",
                      detail: "PTM and parent-related information",
                    },
                    {
                      icon: "▤",
                      title: "Document Library",
                      detail: "Forms, resources and downloads",
                    },
                  ].map((item) => (
                    <Link
                      href="/notices"
                      key={item.title}
                      className="group flex items-center gap-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1E9DC] font-serif text-xl text-[#94734C] transition group-hover:bg-[#493126] group-hover:text-[#D9BE83]">
                        {item.icon}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-[#493126]">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-xs text-[#806F60]">
                          {item.detail}
                        </span>
                      </span>

                      <span className="text-lg text-[#94734C] transition group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-7 rounded-xl bg-[#EEE5D8] px-4 py-3">
                  <p className="text-[10px] leading-5 text-[#806F60]">
                    Official notices will be displayed here after
                    publication by the school administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
                Explore Our World
              </p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">
                Discover more.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#75675C]">
              Every aspect of school life contributes to a meaningful
              educational experience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((item, index) => (
              <Link
                href={item.href}
                key={item.href}
                className={`group flex items-center justify-between bg-white/80 p-7 md:p-9 ${cardEffect} hover:border-[#493126] hover:bg-[#493126] hover:text-white`}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A18865]">
                    Explore / 0{index + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm opacity-65">
                    {item.detail}
                  </p>
                </div>

                <span className="ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9BE83] text-xl transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#D9BE83] group-hover:text-[#30231D]">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden bg-[#EAE0D0] px-6 py-20 text-center md:py-28">
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full border border-[#C6AD84]/50" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#C6AD84]/50" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
            The Journey Begins Here
          </p>

          <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Every great future begins with
            <span className="block italic text-[#94734C]">
              a meaningful education.
            </span>
          </h2>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#493126] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737] hover:shadow-xl"
          >
            Connect With Us <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#302017] px-6 py-12 text-center text-[#FAF6EE] md:px-12">
        <img
          src="/school-logo.webp"
          alt="School logo"
          className="mx-auto h-16 w-16 rounded-full border border-[#D9BE83] object-contain"
        />

        <p className="mt-5 font-serif text-xl">
          U.P. Kirana Seva Samiti Balika Vidyalaya
        </p>

        <p className="mt-3 text-sm text-white/60">
          Tatya Tope Nagar, Kanpur, Uttar Pradesh
        </p>

        <p className="mt-5 text-sm italic text-[#D9BE83]">
          सेवा परमो धर्मः
        </p>

        <div className="mt-8 border-t border-white/15 pt-6 text-xs text-white/45">
          © 2026 U.P. Kirana Seva Samiti Balika Vidyalaya
        </div>
      </footer>

    </main>
  );
}
