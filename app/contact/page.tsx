
import Link from "next/link";

const contactDetails = [
  {
    icon: "⌖",
    label: "VISIT OUR SCHOOL",
    title: "School Address",
    detail:
      "S-1, Site-2, Phase-III, Tatya Tope Nagar, Kanpur Nagar, Uttar Pradesh – 208022",
  },
  {
    icon: "✉",
    label: "EMAIL ENQUIRIES",
    title: "Email Address",
    detail: "Please contact the school office for the official email address.",
  },
  {
    icon: "☎",
    label: "PHONE ENQUIRIES",
    title: "Contact Number",
    detail: "Please contact the school office for the verified phone number.",
  },
];

export default function ContactPage() {
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
              Contact Our School
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl">
              Every Great
              <span className="block font-serif italic text-[#A17B48]">
                Connection
              </span>
              Begins Here.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#78675B] md:text-lg">
              Whether you are a parent, student or visitor, we welcome
              your enquiries. Find our location and connect with
              U.P. Kirana Seva Samiti Balika Vidyalaya.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#contact-details"
                className="rounded-full bg-[#493126] px-8 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
              >
                Contact Information <span className="ml-2">↗</span>
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#BCA477] px-8 py-4 text-sm font-semibold transition duration-300 hover:bg-white/70"
              >
                About Our School
              </Link>
            </div>
          </div>

          {/* DECORATIVE ARTWORK */}
          <div className="relative mx-auto flex h-[420px] w-full max-w-[500px] items-center justify-center md:h-[490px]">

            <div className="absolute h-[390px] w-[390px] rounded-full border border-[#C5A66D]/50 md:h-[450px] md:w-[450px]" />

            <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#B99A65]/60 animate-[spin_50s_linear_infinite]" />

            <div className="absolute h-[250px] w-[250px] rounded-full bg-[#D9BE83]/20 blur-2xl" />

            <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border border-[#D9BE83] bg-[#493126] text-center text-[#FAF6EE] shadow-2xl md:h-72 md:w-72">
              <span className="text-5xl text-[#D9BE83]">⌖</span>

              <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#D9BE83]">
                Find Our School
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Connect
                <span className="block font-serif italic text-[#E5CE9E]">
                  With Us
                </span>
              </h2>

              <p className="mt-4 max-w-[180px] text-xs leading-6 text-white/65">
                We welcome your enquiries and visits.
              </p>
            </div>

            <div className="absolute left-0 top-12 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <span className="text-2xl text-[#A17B48]">✦</span>
              <p className="mt-2 text-sm font-bold">Guidance</p>
              <p className="text-[10px] text-[#887768]">Here to help</p>
            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
              <span className="text-2xl text-[#82917B]">✧</span>
              <p className="mt-2 text-sm font-bold">Connection</p>
              <p className="text-[10px] text-[#887768]">Stay in touch</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section id="contact-details" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              We'd Love to Hear From You
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#827366]">
              Find the essential information you need to connect
              with our school.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {contactDetails.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[1.7rem] border border-[#E7DDCB] bg-[#FAF6EE] p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D9BE83]/15 transition duration-500 group-hover:scale-150" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl text-[#A17B48] shadow-sm">
                  {item.icon}
                </div>

                <p className="relative mt-8 text-[9px] font-bold tracking-[0.2em] text-[#A17B48]">
                  {item.label}
                </p>

                <h3 className="relative mt-3 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-[#817468]">
                  {item.detail}
                </p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* LOCATION AND MAP */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#A17B48]">
              Find Us
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Visit Our School
            </h2>

            <div className="mt-7 h-1 w-20 rounded-full bg-[#D9BE83]" />

            <p className="mt-7 text-base leading-8 text-[#786D63]">
              U.P. Kirana Seva Samiti Balika Vidyalaya is located
              in Tatya Tope Nagar, Kanpur, Uttar Pradesh.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E7DDCB] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A17B48]">
                School Address
              </p>

              <p className="mt-4 text-sm leading-7 text-[#786D63]">
                S-1, Site-2, Phase-III,
                <br />
                Tatya Tope Nagar,
                <br />
                Kanpur Nagar, Uttar Pradesh – 208022
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=U.P.+Kirana+Seva+Samiti+Balika+Vidyalaya+Kanpur"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#493126] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
            >
              Get Directions <span>↗</span>
            </a>
          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-[2rem] border border-[#E7DDCB] bg-white p-3 shadow-xl">
            <iframe
              title="School location map"
              src="https://maps.google.com/maps?q=U.P.%20Kirana%20Seva%20Samiti%20Balika%20Vidyalaya%2C%20Kanpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[1.5rem]"
            />
          </div>

        </div>
      </section>

      {/* ENQUIRY SECTION */}
      <section className="bg-[#493126] px-6 py-24 text-[#FAF6EE]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9BE83]">
              We Welcome Your Enquiries
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Let's Start a Conversation.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-white/65">
              For admission-related questions, school information
              or general enquiries, please get in touch with the
              school office through its verified contact channels.
            </p>

            <div className="mt-10 border-t border-white/20 pt-7">
              <p className="font-serif text-2xl italic text-[#E6D3AC]">
                सेवा परमो धर्मः
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                Service Before Self
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#D9BE83]/30 bg-white/5 p-8 backdrop-blur-sm md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9BE83] text-3xl text-[#493126]">
              ✉
            </div>

            <h3 className="mt-7 text-2xl font-semibold">
              School Enquiries
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/65">
              Please contact the school office for verified
              information about admissions, academic activities
              and other school-related enquiries.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=U.P.+Kirana+Seva+Samiti+Balika+Vidyalaya+Kanpur"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D9BE83] px-7 py-3.5 text-sm font-semibold text-[#493126] transition hover:bg-white"
            >
              Find School Location <span>↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#EDE3D2] px-8 py-16 text-center md:px-16">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#92713F]">
            U.P. Kirana Seva Samiti Balika Vidyalaya
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Thank You for Connecting With Us.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#78675B]">
            We appreciate your interest in our institution
            and welcome you to explore the rest of our website.
          </p>

          <Link
            href="/"
            className="mt-9 inline-flex rounded-full bg-[#493126] px-9 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#654737]"
          >
            Back to Home <span className="ml-2">↗</span>
          </Link>

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
