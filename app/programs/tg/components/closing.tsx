"use client";

import Link from "next/link";

export default function ProgramClosing() {
  return (
    <section className="py-20 text-white text-center w-full">
      <div className="p-16 max-w-6xl mx-auto px-6 bg-gradient-to-tl from-myred to-red-500 md:rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Memulai Perjalanan Karier ke Jepang?
        </h2>

        <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-95">
          Program Tokutei Ginou kami membantu kamu
          <span className="font-semibold">menguasai bahasa, skill teknis, dan persiapan ujian SSW (特定技能)</span>
          untuk membuka peluang kerja resmi di Jepang.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/6281214754492"
            className="px-8 py-4 bg-white text-myred font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
            target="_blank"
          >
            Konsultasi Gratis Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
