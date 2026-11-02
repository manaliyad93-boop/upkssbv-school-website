
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const categories = [
  "All Notices",
  "General",
  "Examinations",
  "Parents",
  "Holidays",
];

const noticeTypes = [
  {
    title: "General Announcements",
    description: "Important school announcements and official circulars.",
    icon: "✦",
    category: "General",
  },
  {
    title: "Examination Updates",
    description: "Examination schedules, instructions and academic updates.",
    icon: "✎",
    category: "Examinations",
  },
  {
    title: "Parent Communication",
    description: "PTM information and important communication for parents.",
    icon: "◇",
    category: "Parents",
  },
  {
    title: "Holiday Information",
    description: "School holidays and changes in school schedules.",
    icon: "☼",
    category: "Holidays",
  },
];

const documentTypes = [
  {
    number: "01",
    title: "Admission Documents",
    description: "Admission forms and related information.",
    type: "ADMISSIONS",
    icon: "▤",
  },
  {
    number: "02",
    title: "Academic Resources",
    description: "Syllabus and academic reference material.",
    type: "ACADEMICS",
    icon: "▧",
  },
  {
    number: "03",
    title: "Official Circulars",
    description: "School circulars and important announcements.",
    type: "CIRCULARS",
    icon: "▥",
  },
  {
    number: "04",
    title: "Parent Resources",
    description: "Guidelines and useful information for parents.",
    type: "PARENTS",
    icon: "▤",
  },
];

export default function NoticesPage() {
  const [activeCategory, setActiveCategory] = useState("All Notices");
  const [search, setSearch] = useState("");

  const filteredTypes = useMemo(() => {
    return noticeTypes.filter((item) => {
      const matchesCategory =
        activeCategory === "All Notices" ||
        item.category === activeCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="overflow-hidden bg-[#FAF6EE] text-[#30231D]">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-12 md:pb-24 md:pt-24">

        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#D9BE83]/40" />
        <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full border border-[#D9BE83]/30" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#A9B7A1]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-center">

          <div className="md:col-span-8">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#94734C]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94734C]">
                The School Information Hub
              </p>
            </div>

            <h1 className="mt-7 font-serif text-5xl leading-[1.08] text-[#493126] sm:text-6xl md:text-7xl">
              Stay informed.
              <span className="block italic text-[#94734C]">
                Stay connected.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#75675C] md:text-base">
              Your central destination for school announcements,
              important updates, academic information and essential
              documents.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#notice-board"
                className="inline-flex items-center gap-3 rounded-full bg-[#493126] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#654737]"
              >
                Explore Notices <span className="text-[#D9BE83]">→</span>
              </a>

              <a
                href="#downloads"
                className="inline-flex items-center gap-3 rounded-full border border-[#CDB88F] px-7 py-3.5 text-sm font-semibold text-[#493126] transition hover:bg-[#EEE5D8]"
              >
                Download Centre
              </a>
            </div>
          </div>

          {/* Editorial side panel */}
          <div className="relative md:col-span-4">
            <div className="relative mx-auto max-w-xs rounded-[2rem] border border-[#D9BE83]/60 bg-[#EEE5D8] p-7 shadow-[0_20px_60px_rgba(73,49,38,0.08)]">

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#94734C]">
                  Information Desk
                </span>
                <span className="text-xl text-[#94734C]">✳</span>
              </div>

              <div className="my-8 flex h-28 items-center justify-center rounded-2xl bg-[#493126]">
                <span className="font-serif text-6xl text-[#D9BE83]">N.</span>
              </div>

              <p className="font-serif text-2xl text-[#493126]">
                Everything in one place.
              </p>

              <p className="mt-3 text-xs leading-6 text-[#806F60]">
                School information, thoughtfully organised for
                students and parents.
              </p>

              <div className="mt-7 border-t border-[#CDB88F] pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#94734C]">
                  सेवा परमो धर्मः
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-xl border border-[#D9BE83] bg-[#FAF6EE] px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
                School Updates
              </p>
              <p className="mt-1 font-serif text-sm text-[#493126]">
                One trusted destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT STRIP */}
      <section className="border-y border-[#D9BE83]/50 bg-[#EEE5D8] px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#94734C]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#493126]">
              Official School Information
            </p>
          </div>
          <p className="text-xs text-[#806F60]">
            Verified updates will be published by the school administration.
          </p>
        </div>
      </section>

      {/* NOTICE BOARD */}
      <section
        id="notice-board"
        className="scroll-mt-24 px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94734C]">
                Announcements & Circulars
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#493126] md:text-6xl">
                The Notice <span className="italic text-[#94734C]">Board.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#75675C]">
                Browse school announcements by category or search
                for the information you need.
              </p>
            </div>

            <div className="flex items-center gap-3 border-l-2 border-[#D9BE83] pl-5">
              <span className="font-serif text-4xl text-[#94734C]">01</span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
                  Information
                </p>
                <p className="mt-1 text-sm text-[#493126]">
                  Notice Centre
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-12 rounded-2xl border border-[#E5D9C7] bg-white/70 p-3 shadow-sm">
            <div className="flex items-center gap-3 px-3">
              <span className="text-xl text-[#94734C]">⌕</span>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search notices and information..."
                className="w-full bg-transparent py-3 text-sm text-[#493126] outline-none placeholder:text-[#A99A88]"
                aria-label="Search notice categories"
              />
              <span className="hidden rounded-full bg-[#EEE5D8] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#806F60] sm:block">
                Search
              </span>
            </div>
          </div>

          {/* Category filters */}
          <div className="mt-7 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#493126] text-[#FAF6EE] shadow-md"
                    : "border border-[#D9BE83]/70 bg-white/60 text-[#806F60] hover:bg-[#EEE5D8]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Category cards */}
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredTypes.map((item, index) => (
              <article
                key={item.category}
                className="group relative overflow-hidden rounded-2xl border border-[#E5D9C7] bg-white/65 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D9BE83] hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#D9BE83]/40 transition duration-500 group-hover:scale-125" />

                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#A58A59]">
                    0{index + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEE5D8] font-serif text-2xl text-[#94734C]">
                    {item.icon}
                  </span>
                </div>

                <h3 className="relative mt-9 font-serif text-xl text-[#493126]">
                  {item.title}
                </h3>

                <p className="relative mt-3 min-h-[66px] text-xs leading-6 text-[#806F60]">
                  {item.description}
                </p>

                <div className="relative mt-7 border-t border-[#E8DDCC] pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
                    {item.category}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredTypes.length === 0 && (
            <div className="mt-8 rounded-2xl border border-[#E5D9C7] bg-white/60 px-6 py-10 text-center">
              <p className="font-serif text-xl text-[#493126]">
                No matching categories found.
              </p>
              <p className="mt-2 text-sm text-[#806F60]">
                Try another search term or choose All Notices.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Notices");
                }}
                className="mt-5 text-xs font-bold uppercase tracking-wider text-[#94734C] underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Empty state */}
          <div className="mt-12 rounded-3xl border border-dashed border-[#CDB88F] bg-[#EEE5D8]/55 px-6 py-12 text-center md:py-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF6EE] font-serif text-3xl text-[#94734C] shadow-sm">
              ✦
            </div>

            <h3 className="mt-6 font-serif text-2xl text-[#493126]">
              Your updates will appear here.
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#806F60]">
              No official notices have been published on this website yet.
              Please check back when the school administration uploads
              verified announcements.
            </p>

            <span className="mt-6 inline-block rounded-full border border-[#D9BE83] px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
              Awaiting official notices
            </span>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CENTRE */}
      <section
        id="downloads"
        className="scroll-mt-24 bg-[#EEE5D8] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94734C]">
                Resources & Documents
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#493126] md:text-6xl">
                Download <span className="italic text-[#94734C]">Centre.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#75675C]">
                A carefully organised library for school documents,
                academic resources and useful information for parents
                and students.
              </p>
            </div>

            <div className="md:col-span-4 md:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#CDB88F] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#806F60]">
                <span className="h-2 w-2 rounded-full bg-[#A9B7A1]" />
                Document Library
              </span>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {documentTypes.map((item) => (
              <article
                key={item.number}
                className="group flex flex-col justify-between gap-7 rounded-2xl border border-[#D9CBB7] bg-[#FAF6EE] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center md:p-9"
              >
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#493126] font-serif text-2xl text-[#D9BE83] transition group-hover:rotate-3">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[9px] font-bold tracking-[0.22em] text-[#94734C]">
                      {item.type}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl text-[#493126]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#806F60]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#D9BE83] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#94734C] sm:self-center">
                  Coming Soon <span>↗</span>
                </span>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#D3C3AC] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xs leading-6 text-[#806F60]">
              Documents will be made available after verification and
              approval by the school administration.
            </p>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#94734C]">
              Official Resource Library
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden px-6 py-24 text-center md:px-12 md:py-32">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#D9BE83]/50" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-[#D9BE83]/50" />

        <div className="relative mx-auto max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#94734C]">
            Need More Information?
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#493126] md:text-6xl">
            Let's stay
            <span className="block italic text-[#94734C]">
              connected.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#806F60]">
            For school-related enquiries and further information,
            please connect with the school.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#493126] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#654737]"
          >
            Contact the School <span className="text-[#D9BE83]">→</span>
          </Link>
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
