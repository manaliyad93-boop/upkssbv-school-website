
import Link from "next/link";

const eventCategories = [
  {
    number: "01",
    icon: "✦",
    title: "Cultural Celebrations",
    description:
      "Celebrating traditions, creativity, special occasions and the spirit of togetherness.",
    label: "CULTURE & TRADITIONS",
    items: [
      "Cultural Celebrations",
      "Special Occasions",
      "School Assemblies",
    ],
  },
  {
    number: "02",
    icon: "✧",
    title: "Academic Activities",
    description:
      "Learning beyond textbooks through mathematics, environmental initiatives, competitions and educational experiences.",
    label: "KNOWLEDGE & LEARNING",
    featured: true,
    items: [
      "Numeromania – Mathematics Festival",
      "Earth Day & Environmental Initiatives",
      "Academic Competitions",
      "Educational Exhibitions",
      "Creative & Learning Activities",
      "Special Assemblies",
      "Tests & Assessments",
      "Parent–Teacher Meetings (PTMs)",
    ],
  },
  {
    number: "03",
    icon: "❋",
    title: "Competitions",
    description:
      "Opportunities to participate, showcase talents, challenge ideas and develop confidence.",
    label: "TALENT & PARTICIPATION",
    items: [
      "Academic Competitions",
      "Creative Activities",
      "Student Participation",
    ],
  },
  {
    number: "04",
    icon: "✺",
    title: "School Activities",
    description:
      "Activities that encourage awareness, responsibility, discipline and a sense of community.",
    label: "VALUES & COMMUNITY",
    items: [
      "Environmental Initiatives",
      "Special Assemblies",
      "Class Activities",
    ],
  },
];

const highlights = [
  {
    number: "01",
    title: "Discover",
    text: "Explore new interests and opportunities.",
  },
  {
    number: "02",
    title: "Participate",
    text: "Become an active part of school life.",
  },
  {
    number: "03",
    title: "Celebrate",
    text: "Share memorable moments together.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6EE] text-[#493126]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_80%_35%,#E8D7B7_0%,#FAF6EE_55%,#F3E9DA_100%)]" />

        <div className="absolute -right-24 top-0 -z-10 h-[480px] w-[480px] rounded-full border border-[#D9BE83]/50" />

        <div className="absolute -right-12 top-12 -z-10 h-[380px] w-[380px] rounded-full border border-dashed border-[#B99A65]/50 animate-[spin_60s_linear_infinite]" />

        <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#A9B7A1]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#92713F]">
              <span className="h-px w-10 bg-[#B99555]" />
              Events & Celebrations
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl">
              Moments That
              <span className="block font-serif italic text-[#A17B48]">
                Bring Us Together.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#78675B] md:text-lg">
              Every celebration creates memories. Every activity brings
              opportunities. Discover the spirit of participation,
              creativity and togetherness at our school.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#explore-events"
                className="rounded-full bg-[#493126] px-8 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
              >
                Explore Events <span className="ml-2">↗</span>
              </Link>

              <Link
                href="/campus-life"
                className="rounded-full border border-[#BCA477] px-8 py-4 text-sm font-semibold transition duration-300 hover:bg-white/70"
              >
                Campus Life
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9BE83] text-2xl text-[#A17B48]">
                ✧
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Celebrate Every Achievement
                </p>
                <p className="mt-1 text-xs text-[#927F70]">
                  Creating memories through shared experiences
                </p>
              </div>
            </div>
          </div>

          {/* DECORATIVE EVENT ARTWORK */}
          <div className="relative mx-auto flex h-[430px] w-full max-w-[500px] items-center justify-center md:h-[500px]">

            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#C5A66D]/50 md:h-[450px] md:w-[450px]" />

            <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#B99A65]/60 animate-[spin_45s_linear_infinite]" />

            <div className="absolute h-[250px] w-[250px] rounded-full bg-[#D9BE83]/20 blur-2xl" />

            <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border border-[#D9BE83] bg-[#493126] text-center text-[#FAF6EE] shadow-2xl md:h-72 md:w-72">
              <span className="text-5xl text-[#D9BE83]">✺</span>

              <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#D9BE83]">
                School Memories
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Celebrate
                <span className="block font-serif italic text-[#E5CE9E]">
                  Together
                </span>
              </h2>

              <p className="mt-4 text-xs text-white/65">
                Moments worth remembering
              </p>
            </div>

            <div className="absolute left-0 top-12 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <span className="text-2xl text-[#A17B48]">✦</span>
              <p className="mt-2 text-sm font-bold">Creativity</p>
              <p className="text-[10px] text-[#887768]">Ideas come alive</p>
            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <span className="text-2xl text-[#82917B]">❋</span>
              <p className="mt-2 text-sm font-bold">Togetherness</p>
              <p className="text-[10px] text-[#887768]">Stronger as one</p>
            </div>

            <div className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D9BE83] text-2xl shadow-lg">
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
              The Spirit of Participation
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              Learning becomes memorable when we experience it together.
            </h2>

            <div className="mt-7 h-1 w-20 rounded-full bg-[#D9BE83]" />

            <p className="mt-7 max-w-xl text-base leading-8 text-[#786D63]">
              School events offer students opportunities to explore
              interests, express ideas, develop confidence and appreciate
              the talents of others.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#786D63]">
              From academic activities to cultural celebrations, every
              experience can become a meaningful part of the school journey.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#493126] p-9 text-[#FAF6EE] md:p-12">

            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#D9BE83]/30" />

            <div className="absolute -right-2 top-0 h-32 w-32 rounded-full border border-[#D9BE83]/20" />

            <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-[#D9BE83]">
              A Thought to Remember
            </p>

            <h3 className="relative mt-10 font-serif text-3xl italic leading-snug md:text-4xl">
              "The best memories are made when we learn, participate and
              celebrate together."
            </h3>

            <div className="relative mt-10 flex items-center gap-3">
              <span className="h-px w-12 bg-[#D9BE83]" />

              <span className="text-xs uppercase tracking-[0.2em] text-[#D9BE83]">
                Our School Community
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT CATEGORIES */}
      <section id="explore-events" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
              Explore Our Activities
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              A World of Experiences
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#827366]">
              Different activities, shared enthusiasm and opportunities
              to discover something new.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">

            {eventCategories.map((event) => (
              <article
                key={event.number}
                className={`group relative overflow-hidden rounded-[1.8rem] border p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#493126]/10 md:p-10 ${
                  event.featured
                    ? "border-[#D9BE83] bg-[#F3EBDD]"
                    : "border-[#E7DDCB] bg-white"
                }`}
              >

                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D9BE83]/15 transition duration-500 group-hover:scale-150" />

                <div className="relative flex items-center justify-between">

                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-[#A17B48] shadow-sm transition duration-300 group-hover:bg-[#493126] group-hover:text-[#D9BE83]">
                    {event.icon}
                  </span>

                  <span className="font-serif text-4xl text-[#D3C3A5]">
                    {event.number}
                  </span>
                </div>

                <p className="relative mt-9 text-[10px] font-bold tracking-[0.2em] text-[#A17B48]">
                  {event.label}
                </p>

                <h3 className="relative mt-3 text-2xl font-semibold">
                  {event.title}
                </h3>

                <p className="relative mt-4 max-w-lg text-sm leading-7 text-[#817468]">
                  {event.description}
                </p>

                {event.items && (
                  <div className="relative mt-7 border-t border-[#D9BE83]/50 pt-6">

                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A17B48]">
                      Activity Highlights
                    </p>

                    <ul className="space-y-3">
                      {event.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-[#786D63]"
                        >
                          <span className="mt-0.5 text-[#A17B48]">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                )}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D9BE83] transition-all duration-500 group-hover:w-full" />

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* ACADEMIC CALENDAR NOTE */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#E7DDCB] bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A17B48]">
              School Diary & Academic Calendar
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Stay Connected With the School Year.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#817468]">
              The school diary includes academic activities, tests,
              parent–teacher meetings, competitions, exhibitions and
              environmental initiatives. Exact dates and schedules
              should be followed from official school notices.
            </p>
          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F3EBDD] text-4xl text-[#A17B48]">
            ▦
          </div>

        </div>
      </section>

      {/* THREE STEPS */}
      <section className="bg-[#493126] px-6 py-24 text-[#FAF6EE]">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9BE83]">
              More Than an Event
            </p>

            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              Every Experience Counts
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              The journey of participation brings learning, friendships
              and memories that stay with us.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">

            {highlights.map((item) => (
              <div
                key={item.number}
                className="border-t border-[#D9BE83]/40 pt-7"
              >
                <p className="font-serif text-4xl text-[#D9BE83]/70">
                  {item.number}
                </p>

                <h3 className="mt-5 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.text}
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

      {/* CLOSING CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#EDE3D2] px-8 py-16 text-center md:px-16">

          <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full border border-[#C5A66D]/40" />

          <div className="absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-[#C5A66D]/40" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92713F]">
              Discover More
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              The School Journey Continues.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#78675B]">
              Explore the school environment and discover the experiences
              that make learning meaningful.
            </p>

            <Link
              href="/campus-life"
              className="mt-9 inline-flex rounded-full bg-[#493126] px-9 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
            >
              Discover Campus Life <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#302017] px-6 py-10 text-center text-sm text-white/60">

        <p className="font-semibold text-white">
          U.P. Kirana Seva Samiti Balika Vidyalaya
        </p>

        <p className="mt-2">
          Tatya Tope Nagar, Kanpur, Uttar Pradesh
        </p>

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
