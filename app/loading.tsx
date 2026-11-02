
import Image from "next/image";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAF6EE] px-6">

      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#D9BE83]/15 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#A9B7A1]/20 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

        {/* Animated logo ring */}
        <div className="relative mb-9 flex h-36 w-36 items-center justify-center">

          <div className="absolute inset-0 rounded-full border border-[#D9BE83]/50" />

          <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-[#493126] animate-spin" />

          <div className="absolute inset-3 rounded-full border border-[#D9BE83]/70" />

          <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white shadow-xl shadow-[#493126]/10">
            <Image
              src="/school-logo.webp"
              alt="School Logo"
              width={90}
              height={90}
              priority
              className="h-full w-full object-contain p-2"
            />
          </div>
        </div>

        {/* School name */}
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#A58A59]">
          Welcome to
        </p>

        <h1 className="max-w-sm text-2xl font-serif font-bold leading-tight text-[#493126] sm:text-3xl">
          U.P. Kirana Seva Samiti
          <span className="mt-1 block text-[#493126]">
            Balika Vidyalaya
          </span>
        </h1>

        <div className="my-6 h-px w-20 bg-[#D9BE83]" />

        <p className="text-xs font-medium tracking-[0.22em] text-[#806D5C]">
          सेवा परमो धर्मः
        </p>

        {/* Loading indicator */}
        <div className="mt-12 w-52">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#493126]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#806D5C]">
              Preparing your experience
            </p>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D9BE83]" />
          </div>

          <div className="h-[3px] w-full overflow-hidden rounded-full bg-[#E9DFD0]">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-[#493126]" />
          </div>
        </div>

        <p className="mt-12 text-[9px] tracking-[0.2em] text-[#A99A88]">
          KANPUR · UTTAR PRADESH
        </p>

      </div>
    </main>
  );
}
