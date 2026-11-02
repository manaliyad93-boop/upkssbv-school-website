
import Link from "next/link";

const programs = [
  {
    number: "01",
    stage: "FOUNDATION",
    title: "Foundational Learning",
    classes: "LKG – Class 5",
    symbol: "✿",
    description:
      "Building strong foundations through curiosity, essential skills and engaging learning experiences.",
    subjects: ["Language", "Mathematics", "Environmental Studies"],
  },
  {
    number: "02",
    stage: "EXPLORATION",
    title: "Middle School",
    classes: "Classes 6 – 8",
    symbol: "✧",
    description:
      "Encouraging conceptual understanding, independent thinking and exploration across subjects.",
    subjects: ["Science", "Mathematics", "Social Studies"],
  },
  {
    number: "03",
    stage: "DEVELOPMENT",
    title: "Secondary School",
    classes: "Classes 9 – 10",
    symbol: "◇",
    description:
      "Strengthening subject knowledge, analytical skills and preparation for board examinations.",
    subjects: ["Core Subjects", "Practical Learning", "Assessment"],
  },
  {
    number: "04",
    stage: "SPECIALISATION",
    title: "Senior Secondary",
    classes: "Classes 11 – 12",
    symbol: "✦",
    description:
      "Supporting students as they explore academic interests and prepare for future studies.",
    subjects: ["Science", "Commerce", "Career Preparation"],
  },
];

const streams = [
  {
    number: "01",
    symbol: "⚛",
    title: "Science — PCM",
    detail: "Physics • Chemistry • Mathematics",
    description:
      "For students interested in mathematics, engineering, technology and related fields.",
    accent: "bg-[#EAE0D0]",
  },
  {
    number: "02",
    symbol: "❋",
    title: "Science — PCB",
    detail: "Physics • Chemistry • Biology",
    description:
      "For students interested in biology, life sciences, healthcare and related fields.",
    accent: "bg-[#E8EBDD]",
  },
  {
    number: "03",
    symbol: "◈",
    title: "Commerce",
    detail: "Commerce-related subjects",
    description:
      "For students interested in business, finance, accounting and management.",
    accent: "bg-[#F0E7DB]",
  },
];

export default function AcademicsPage() {
  return (
    <main className="overflow-hidden bg-[#FAF6EE] text-[#30231D]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FAF6EE] px-6 py-16 md:px-12 md:py-20">

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#D9BE83]/40" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border border-[#D9BE83]/30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12">

          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#94734C]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#94734C]">
                Learning • Discovery • Growth
              </p>
            </div>

            <h1 className="font-serif text-4xl leading-[1.15] text-[#493126] sm:text-5xl md:text-6xl">
              Every Step of Learning,
              <span className="mt-2 block italic font-normal text-[#A17D49]">
                A Brighter Future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#75675C] md:text-base">
              Explore our academic stages and discover how learning
              can help students build knowledge, confidence and
              skills for the future.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full bg-[#493126] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
              >
                ← Back to Home
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#B99A67] px-6 py-3.5 text-sm font-semibold text-[#493126] transition duration-300 hover:-translate-y-1 hover:bg-[#EAE0D0]"
              >
                Get in Touch →
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#D9BE83]" />
              <span className="text-[10px] font-semibold tracking-[0.18em] text-[#94734C]">
                EXPLORE • UNDERSTAND • EXCEL
              </span>
            </div>
          </div>

          {/* ACADEMIC ORBIT */}
          <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#F1E9DC] md:col-span-5">

            <div className="absolute h-[280px] w-[280px] rounded-full border border-[#D9BE83]/50 animate-[spin_35s_linear_infinite] motion-reduce:animate-none" />

            <div className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-[#B99A67]/50 animate-[spin_25s_linear_infinite_reverse] motion-reduce:animate-none" />

            <div className="absolute h-[160px] w-[160px] rounded-full border border-[#D9BE83]/60" />

            <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#493126] text-center text-white shadow-[0_15px_40px_rgba(73,49,38,0.25)]">
              <span className="text-3xl text-[#D9BE83]">✦</span>
              <p className="mt-2 font-serif text-xl italic">Learning</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#E9D7B3]">
                For Life
              </p>
            </div>

            <div className="absolute left-5 top-12 rounded-2xl border border-[#E3D2B2] bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#94734C]">
                Discover
              </p>
              <p className="font-serif text-lg text-[#493126]">
                Knowledge
              </p>
            </div>

            <div className="absolute bottom-12 right-4 rounded-2xl border border-[#E3D2B2] bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#94734C]">
                Develop
              </p>
              <p className="font-serif text-lg text-[#493126]">
                Potential
              </p>
            </div>

            <span className="absolute right-8 top-8 font-serif text-4xl italic text-[#B99A67]/70">
              01
            </span>
          </div>
        </div>
      </section>

      {/* ACADEMIC JOURNEY */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
                Academic Journey
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Learning at every stage.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#75675C]">
              Every stage brings new ideas, new challenges and
              opportunities to discover one's potential.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">

            {programs.map((program) => (
              <article
                key={program.number}
                className="group relative overflow-hidden rounded-3xl border border-[#E4DACA] bg-white p-7 shadow-[0_8px_25px_rgba(48,35,29,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C6A66C] hover:shadow-[0_20px_40px_rgba(48,35,29,0.13)] md:p-9"
              >
                <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-[#F1E9DC] transition-transform duration-700 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#94734C]">
                      {program.number}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1E9DC] font-serif text-2xl text-[#94734C] transition-all duration-500 group-hover:rotate-12 group-hover:bg-[#493126] group-hover:text-[#D9BE83]">
                      {program.symbol}
                    </span>
                  </div>

                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A18865]">
                    {program.stage}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#493126] md:text-3xl">
                    {program.title}
                  </h3>

                  <span className="mt-4 inline-flex rounded-full bg-[#F1E9DC] px-4 py-2 text-xs font-semibold text-[#725025]">
                    {program.classes}
                  </span>

                  <p className="mt-5 text-sm leading-7 text-[#75675C]">
                    {program.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {program.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-[#E4DACA] bg-[#FAF6EE] px-3 py-2 text-[11px] text-[#75675C]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 h-0.5 w-10 rounded-full bg-[#D9BE83] transition-all duration-500 group-hover:w-20" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SENIOR SECONDARY STREAMS */}
      <section className="bg-[#493126] px-6 py-20 text-[#FAF6EE] md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9BE83]">
              Senior Secondary
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Discover your interests.
              <span className="mt-2 block italic text-[#D9BE83]">
                Choose your direction.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
              Students can explore different academic pathways
              according to their interests, strengths and future goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {streams.map((stream) => (
              <article
                key={stream.number}
                className="group rounded-3xl border border-[#D9BE83]/25 bg-[#FAF6EE] p-7 text-[#493126] shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:p-8"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stream.accent} font-serif text-3xl text-[#94734C] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                  {stream.symbol}
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
                  Pathway {stream.number}
                </p>

                <h3 className="mt-2 font-serif text-2xl">
                  {stream.title}
                </h3>

                <p className="mt-3 text-xs font-semibold leading-6 text-[#94734C]">
                  {stream.detail}
                </p>

                <div className="my-5 h-px w-full bg-[#E4DACA]" />

                <p className="text-sm leading-7 text-[#75675C]">
                  {stream.description}
                </p>

                <div className="mt-7 h-0.5 w-10 rounded-full bg-[#D9BE83] transition-all duration-500 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND THE CLASSROOM */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#EAE0D0] px-7 py-12 md:px-14 md:py-16">

          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C6AD84]/50" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#94734C]">
              Beyond the Classroom
            </p>

            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Education is more than
              <span className="block italic text-[#94734C]">
                textbooks.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#75675C] md:text-base">
              Academic learning is most meaningful when students also
              have opportunities to ask questions, develop practical
              skills, collaborate and discover their interests.
            </p>

            <Link
              href="/campus-life"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#493126] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
            >
              Explore Campus Life →
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
