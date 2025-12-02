// components/program/ProgramHero.tsx
"use client";

import Image from "next/image";

export default function ProgramHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-red-600/50 bg-gradient-to-b from-myred/50 via-red-500/60 to-red-600 text-white">
      <Image
        src="/japan-view.jpg"
        alt="Japan Background"
        fill
        className="object-cover opacity-40 blur-[4px]"
      />
      <div className="flex flex-col items-center max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl text-center md:text-5xl font-extrabold mb-6">
          Program Pelatihan LPK Kiwamaru Academy
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl">
          Kami menyediakan program pendidikan yang dirancang khusus untuk mempersiapkan
          kandidat bekerja di Jepang sebagai peserta magang, Tokutei Ginou (SSW), maupun Matching Job.
        </p>
      </div>
    </section>
  );
}
