// components/program/ProgramCTA.tsx
"use client";

import Link from "next/link";

export default function ProgramCTA() {
  return (
    <section className="py-20 text-white text-center w-full">
      <div className="p-16 max-w-6xl mx-auto px-6 bg-gradient-to-tl from-myred to-red-500 md:rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Siap Memulai Pelatihan Menuju Jepang?
            </h2>

            <p className="text-lg md:text-xl mb-10 leading-relaxed">
              Bergabung bersama Kiwamaru Academy dan wujudkan impian bekerja di Jepang dengan persiapan terbaik.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                    href="https://wa.me/6281214754492"
                    className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
                    target="_blank"
                >
                    Daftar Sekarang
                </Link>
            </div>
        </div>
    </section>
  );
}
