
import Link from "next/link";

const experiences = [
  {
    number: "01",
    symbol: "✦",
    title: "Learning & Discovery",
    description:
      "A supportive environment where curiosity, knowledge and independent thinking help students move forward.",
    tag: "GROW THROUGH KNOWLEDGE",
  },
  {
    number: "02",
    symbol: "✧",
    title: "Art & Creativity",
    description:
      "A space for imagination, self-expression and discovering creative interests and talents.",
    tag: "EXPRESS YOURSELF",
  },
  {
    number: "03",
    symbol: "❋",
    title: "Sports & Teamwork",
    description:
      "Learning the importance of discipline, cooperation, participation and a positive sporting spirit.",
    tag: "LEARN TOGETHER",
  },
  {
    number: "04",
    symbol: "✺",
    title: "Culture & Celebrations",
    description:
      "Celebrating traditions, special occasions and the many ways students express their abilities.",
    tag: "CELEBRATE EVERY MOMENT",
  },
];

const values = [
  { number: "01", title: "Confidence", text: "Finding the courage to express ideas." },
  { number: "02", title: "Discipline", text: "Building habits that support success." },
  { number: "03", title: "Creativity", text: "Exploring ideas with an open mind." },
];

export default function CampusLifePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6EE] text-[#493126]">

      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden px-6 py-24 md:min-h-[690px]">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_45%,#E8D7B7_0%,#FAF6EE_55%,#F4EBDD_100%)]" />
        <div className="absolute -right-32 top-10 -z-10 h-[480px] w-[480px] rounded-full border border-[#D9BE83]/50" />
        <div className="absolute -right-20 top-20 -z-10 h-[390px] w-[390px] rounded-full border border-[#D9BE83]/40" />
        <div className="absolute -left-28 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#A9B7A1]/15 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#92713F]">
              <span className="h-px w-10 bg-[#B99555]" />
              Life at Our School
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.12] tracking-tight md:text-7xl">
              More Than
              <span className="block italic text-[#A17B48]">A Classroom.</span>
              A Journey.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#78675B] md:text-lg">
              Every school day brings opportunities to learn, discover,
              participate and grow. Explore the experiences that make
              school life meaningful.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="rounded-full bg-[#493126] px-8 py-4 text-sm font-semibold text-[#FAF6EE] shadow-lg shadow-[#493126]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
              >
                Discover Our Events <span className="ml-2">↗</span>
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-[#BCA477] px-8 py-4 text-sm font-semibold text-[#493126] transition duration-300 hover:bg-white/70"
              >
                About Our School
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9BE83] text-xl text-[#A17B48]">
                ✦
              </div>
              <div>
                <p className="text-sm font-semibold">Learn. Participate. Flourish.</p>
                <p className="mt-1 text-xs tracking-wide text-[#927F70]">
                  A meaningful journey beyond textbooks
                </p>
              </div>
            </div>
          </div>

          {/* ABSTRACT CAMPUS LIFE ARTWORK */}
          <div className="relative mx-auto flex h-[430px] w-full max-w-[510px] items-center justify-center md:h-[510px]">
            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#C5A66D]/50 md:h-[460px] md:w-[460px]" />
            <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#B99A65]/50 md:h-[380px] md:w-[380px] animate-[spin_55s_linear_infinite]" />
            <div className="absolute h-[250px] w-[250px] rounded-full bg-[#D9BE83]/20 blur-2xl" />

            <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border border-[#D9BE83] bg-[#493126] text-center text-[#FAF6EE] shadow-2xl shadow-[#493126]/20 md:h-72 md:w-72">
              <span className="text-5xl text-[#D9BE83]">✧</span>
              <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#D9BE83]">
                The School Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">
                Learn
                <span className="block font-serif italic text-[#E5CE9E]">
                  & Grow
                </span>
              </h2>
              <p className="mt-4 max-w-[175px] text-xs leading-6 text-white/65">
                Knowledge, values and experiences for life.
              </p>
            </div>

            <div className="absolute left-0 top-12 rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md animate-pulse">
              <span className="text-2xl text-[#A17B48]">✦</span>
              <p className="mt-2 text-sm font-bold">Creativity</p>
              <p className="text-[10px] text-[#887768]">Imagine & create</p>
            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-white/70 bg-white/85 px-5 py-4 shadow-xl backdrop-blur-md animate-pulse">
              <span className="text-2xl text-[#82917B]">❋</span>
              <p className="mt-2 text-sm font-bold">Teamwork</p>
              <p className="text-[10px] text-[#887768]">Together we grow</p>
            </div>

            <div className="absolute right-4 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#D9BE83] text-2xl text-[#493126] shadow-lg">
              ✧
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
              Beyond Academics
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              Education is an experience, not just a destination.
            </h2>
            <div className="mt-7 h-1 w-20 rounded-full bg-[#D9BE83]" />
            <p className="mt-7 max-w-xl text-base leading-8 text-[#786D63]">
              A student's journey is shaped by lessons inside the classroom
              and experiences beyond it. Participation, friendships,
              creativity and shared responsibilities all contribute to
              personal development.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#786D63]">
              We believe that education should encourage students to
              explore their potential while developing respect, confidence
              and a sense of responsibility.
            </p>
          </div>

          <div className="relative rounded-[2rem] bg-[#493126] p-8 text-[#FAF6EE] md:p-12">
            <div className="absolute right-8 top-5 text-7xl text-[#D9BE83]/25">“</div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9BE83]">
              Our Philosophy
            </p>
            <h3 className="relative mt-9 text-3xl font-medium leading-snug md:text-4xl">
              “Every experience is an opportunity to become a better version
              of ourselves.”
            </h3>
            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-12 bg-[#D9BE83]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D9BE83]">
                Learning for Life
              </span>
            </div>
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-full border border-[#D9BE83]/60" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE CARDS */}
      <section className="relative px-6 py-24">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#D9BE83]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
                Explore & Participate
              </p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Experiences That Matter
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#827366]">
              Different experiences create opportunities to discover
              interests, build confidence and develop essential life skills.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => (
              <article
                key={item.number}
                className="group relative min-h-[300px] overflow-hidden rounded-[1.7rem] border border-[#E7DDCB] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#493126]/10"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D9BE83]/15 transition duration-500 group-hover:scale-150" />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3EBDD] text-3xl text-[#9A7848] transition duration-300 group-hover:rotate-6 group-hover:bg-[#493126] group-hover:text-[#D9BE83]">
                    {item.symbol}
                  </span>
                  <span className="font-serif text-3xl text-[#D3C3A5]">
                    {item.number}
                  </span>
                </div>

                <p className="relative mt-9 text-[9px] font-bold tracking-[0.18em] text-[#A17B48]">
                  {item.tag}
                </p>
                <h3 className="relative mt-3 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-[#817468]">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D9BE83] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#493126] px-6 py-24 text-[#FAF6EE]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9BE83]">
              What We Encourage
            </p>
            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              Growing With Values
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/65">
              Education also means developing the qualities that guide us
              through everyday life.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.number} className="border-t border-[#D9BE83]/40 pt-7">
                <p className="font-serif text-4xl text-[#D9BE83]/70">
                  {value.number}
                </p>
                <h3 className="mt-5 text-2xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {value.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-white/15 pt-10 text-center">
            <p className="font-serif text-2xl italic text-[#E6D3AC] md:text-3xl">
              सेवा परमो धर्मः
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/50">
              Service Before Self
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#EDE3D2] px-8 py-16 text-center md:px-16">
          <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full border border-[#C5A66D]/40" />
          <div className="absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-[#C5A66D]/40" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92713F]">
              Be Part of the Journey
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Every Moment Has a Story.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#78675B]">
              Discover school celebrations, activities and events that
              bring the school community together.
            </p>
            <Link
              href="/events"
              className="mt-9 inline-flex rounded-full bg-[#493126] px-9 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
            >
              Explore School Events <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#302017] px-6 py-10 text-center text-sm text-white/60">
        <p className="font-semibold text-white">
          U.P. Kirana Seva Samiti Balika Vidyalaya
        </p>
        <p className="mt-2">Tatya Tope Nagar, Kanpur, Uttar Pradesh</p>
        <p className="mt-4 font-serif text-lg text-[#D9BE83]">
          सेवा परमो धर्मः
        </p>
        <p className="mt-4 text-xs text-white/40">
          © 2026 U.P. Kirana Seva Samiti Balika Vidyalaya
        </p>
      </footer>
    </main>
  );
}
