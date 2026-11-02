
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Events", href: "/events" },
  { name: "Notices", href: "/notices" },
  { name: "Parents", href: "/parents" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9BE83]/50 bg-[#FAF6EE]/95 text-[#493126] shadow-[0_4px_25px_rgba(73,49,38,0.06)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">

        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9BE83] bg-white shadow-sm">
            <img
              src="/school-logo.webp"
              alt="School Logo"
              className="h-9 w-9 rounded-full object-contain"
            />
          </span>

          <span className="max-w-[190px] text-xs font-bold leading-snug text-[#493126] sm:max-w-[230px] sm:text-sm">
            U.P. Kirana Seva Samiti
            <span className="block font-medium text-[#94734C]">
              Balika Vidyalaya
            </span>
          </span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-[#D9BE83] px-3 py-2 text-xl text-[#493126] transition hover:bg-[#EEE5D8] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-2.5 py-2 text-[12px] font-semibold transition-all duration-300 xl:px-3 xl:text-[13px] ${
                  active
                    ? "bg-[#493126] text-[#FAF6EE] shadow-sm"
                    : "text-[#6E594A] hover:bg-[#EEE5D8] hover:text-[#493126]"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#D9BE83]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#E8DDCC] bg-[#FAF6EE] px-5 py-4 shadow-xl md:hidden">
          <div className="mx-auto max-w-7xl">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(link.href + "/");

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mb-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-[#493126] font-semibold text-[#FAF6EE]"
                      : "text-[#6E594A] hover:bg-[#EEE5D8]"
                  }`}
                >
                  {link.name}
                  <span className={active ? "text-[#D9BE83]" : "text-[#B49B78]"}>
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
