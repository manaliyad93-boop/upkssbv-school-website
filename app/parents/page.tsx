
import Link from "next/link";

const parentResources = [
  {
    number: "01",
    icon: "▦",
    title: "Academic Calendar",
    description:
      "Keep track of the academic year, school activities, important dates and planned events.",
    tag: "PLAN THE SCHOOL YEAR",
    href: "/events",
    linkText: "Explore Events",
  },
  {
    number: "02",
    icon: "✉",
    title: "Parent–Teacher Meetings",
    description:
      "Stay connected with teachers and participate in discussions about a student's learning and progress.",
    tag: "HOME & SCHOOL PARTNERSHIP",
    href: "/contact",
    linkText: "Contact School",
  },
  {
    number: "03",
    icon: "✎",
    title: "Examinations & Assessment",
    description:
      "Find information about assessments, examination-related updates and academic preparation.",
    tag: "ACADEMIC PROGRESS",
    href: "/academics",
    linkText: "Explore Academics",
  },
  {
    number: "04",
    icon: "◈",
    title: "School Notices",
    description:
      "Check this section for important announcements, circulars and school-related updates.",
    tag: "IMPORTANT INFORMATION",
    href: "/contact",
    linkText: "Get in Touch",
  },
  {
    number: "05",
    icon: "✧",
    title: "Parent Guidelines",
    description:
      "Understand the importance of punctuality, regular attendance, communication and student support.",
    tag: "SUPPORT & GUIDANCE",
    href: "/about",
    linkText: "About Our School",
  },
  {
    number: "06",
    icon: "❋",
    title: "School Activities",
    description:
      "Discover educational activities, competitions, celebrations and opportunities for participation.",
    tag: "LEARNING BEYOND CLASSROOMS",
    href: "/campus-life",
    linkText: "Explore Campus Life",
  },
];

const faqs = [
  {
    question: "Where can parents find information about school events?",
    answer:
      "Parents can visit the Events section of this website for school activity categories and event-related information. Official dates should be confirmed through school notices.",
  },
  {
    question: "How can parents communicate with the school?",
    answer:
      "Parents can use the Contact Us section to find the school's contact information and make enquiries through the available communication channels.",
  },
  {
    question: "How can parents stay informed about academic progress?",
    answer:
      "Parents are encouraged to stay connected with teachers and participate in scheduled parent–teacher meetings. Assessment information should be followed through official school communication.",
  },
  {
    question: "Where can parents find examination information?",
    answer:
      "The Academics section provides an overview of the school's academic structure. Specific examination schedules and instructions should be checked in official school circulars.",
  },
];

export default function ParentsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6EE] text-[#493126]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_80%_35%,#E8D7B7_0%,#FAF6EE_55%,#F3E9DA_100%)]" />

        <div className="absolute -right-24 top-0 -z-10 h-[470px] w-[470px] rounded-full border border-[#D9BE83]/50" />

        <div className="absolute -right-10 top-16 -z-10 h-[350px] w-[350px] rounded-full border border-dashed border-[#B99A65]/50 animate-[spin_55s_linear_infinite]" />

        <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#A9B7A1]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#92713F]">
              <span className="h-px w-10 bg-[#B99555]" />
              Parents Corner
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl">
              Together,
              <span className="block font-serif italic text-[#A17B48]">
                We Shape
              </span>
              The Future.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#78675B] md:text-lg">
              A dedicated space for parents to discover important school
              information, stay connected with academic activities and
              support every step of their child's educational journey.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#parent-resources"
                className="rounded-full bg-[#493126] px-8 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
              >
                Explore Resources <span className="ml-2">↗</span>
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#BCA477] px-8 py-4 text-sm font-semibold transition duration-300 hover:bg-white/70"
              >
                Contact School
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9BE83] text-2xl text-[#A17B48]">
                ♡
              </div>
              <div>
                <p className="text-sm font-semibold">
                  A Partnership That Matters
                </p>
                <p className="mt-1 text-xs text-[#927F70]">
                  Parents • Teachers • Students
                </p>
              </div>
            </div>
          </div>

          {/* DECORATIVE ARTWORK */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-[500px] items-center justify-center md:h-[500px]">

            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#C5A66D]/50 md:h-[450px] md:w-[450px]" />

            <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#B99A65]/60 animate-[spin_50s_linear_infinite]" />

            <div className="absolute h-[250px] w-[250px] rounded-full bg-[#D9BE83]/20 blur-2xl" />

            <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border border-[#D9BE83] bg-[#493126] text-center text-[#FAF6EE] shadow-2xl md:h-72 md:w-72">
              <span className="text-5xl text-[#D9BE83]">✧</span>

              <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#D9BE83]">
                Stronger Together
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Home
                <span className="block font-serif italic text-[#E5CE9E]">
                  & School
                </span>
              </h2>

              <p className="mt-4 max-w-[180px] text-xs leading-6 text-white/65">
                Building a supportive learning community.
              </p>
            </div>

            <div className="absolute left-0 top-12 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <span className="text-2xl text-[#A17B48]">✦</span>
              <p className="mt-2 text-sm font-bold">Guidance</p>
              <p className="text-[10px] text-[#887768]">Every step matters</p>
            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <span className="text-2xl text-[#82917B]">❋</span>
              <p className="mt-2 text-sm font-bold">Partnership</p>
              <p className="text-[10px] text-[#887768]">Growing together</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
              A Shared Responsibility
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              A child's growth is a journey we build together.
            </h2>

            <div className="mt-7 h-1 w-20 rounded-full bg-[#D9BE83]" />

            <p className="mt-7 max-w-xl text-base leading-8 text-[#786D63]">
              Education becomes more meaningful when parents and teachers
              work together. Regular communication, encouragement and
              participation create a positive environment for learning.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#786D63]">
              This section brings together useful school resources to
              help parents stay informed and connected.
            </p>
          </div>

          <div className="relative rounded-[2rem] bg-[#493126] p-9 text-[#FAF6EE] md:p-12">
            <div className="absolute right-8 top-5 text-7xl text-[#D9BE83]/25">
              “
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9BE83]">
              Our Belief
            </p>

            <h3 className="relative mt-9 font-serif text-3xl italic leading-snug md:text-4xl">
              "When families and educators work together, students find
              greater opportunities to learn and flourish."
            </h3>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-12 bg-[#D9BE83]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D9BE83]">
                Home & School Partnership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PARENT RESOURCES */}
      <section id="parent-resources" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
                Useful Information
              </p>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Parent Resources
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#827366]">
              Find useful information and explore different sections
              designed to keep parents connected with school life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {parentResources.map((resource) => (
              <article
                key={resource.number}
                className="group relative overflow-hidden rounded-[1.7rem] border border-[#E7DDCB] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#493126]/10"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D9BE83]/15 transition duration-500 group-hover:scale-150" />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F3EBDD] text-3xl text-[#A17B48] transition duration-300 group-hover:bg-[#493126] group-hover:text-[#D9BE83]">
                    {resource.icon}
                  </span>

                  <span className="font-serif text-3xl text-[#D3C3A5]">
                    {resource.number}
                  </span>
                </div>

                <p className="relative mt-8 text-[9px] font-bold tracking-[0.18em] text-[#A17B48]">
                  {resource.tag}
                </p>

                <h3 className="relative mt-3 text-xl font-semibold">
                  {resource.title}
                </h3>

                <p className="relative mt-4 min-h-[84px] text-sm leading-7 text-[#817468]">
                  {resource.description}
                </p>

                <Link
                  href={resource.href}
                  className="relative mt-7 inline-flex items-center gap-3 border-b border-[#D9BE83] pb-2 text-sm font-semibold text-[#493126] transition-all duration-300 group-hover:gap-5"
                >
                  {resource.linkText}
                  <span>→</span>
                </Link>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* PARENT GUIDELINES */}
      <section className="bg-[#493126] px-6 py-24 text-[#FAF6EE]">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9BE83]">
              A Supportive Community
            </p>

            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              Growing Together
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Small everyday efforts can make a meaningful difference
              in a student's educational journey.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Stay Connected",
                text: "Maintain regular communication with teachers and follow official school updates.",
              },
              {
                number: "02",
                title: "Encourage Learning",
                text: "Support curiosity, reading habits, preparation and a positive attitude towards learning.",
              },
              {
                number: "03",
                title: "Participate Actively",
                text: "Take part in scheduled meetings and school activities whenever possible.",
              },
            ].map((item) => (
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

      {/* FAQ */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
              Need Some Help?
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#827366]">
              Some useful answers to common parent enquiries.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E7DDCB] bg-[#FAF6EE] p-6 transition duration-300 open:bg-[#F3EBDD]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold">
                  <span>
                    <span className="mr-3 font-serif text-[#A17B48]">
                      0{index + 1}
                    </span>
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-xl text-[#A17B48] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-[#D9BE83]/40 pt-5 text-sm leading-7 text-[#786D63]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#EDE3D2] px-8 py-16 text-center md:px-16">

          <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full border border-[#C5A66D]/40" />

          <div className="absolute -bottom-24 -right-12 h-72 w-72 rounded-full border border-[#C5A66D]/40" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92713F]">
              We Are Here to Help
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Let's Stay Connected.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#78675B]">
              For school-related enquiries and information, connect
              with the school through the Contact section.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex rounded-full bg-[#493126] px-9 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
            >
              Contact Our School <span className="ml-2">↗</span>
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
