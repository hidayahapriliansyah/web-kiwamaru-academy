// components/programs/ProgramList.tsx
"use client";

import Link from "next/link";
import { BookOpen, GraduationCap, Briefcase } from "lucide-react";

export default function ProgramList() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-myblack mb-14">
          Program Utama Kiwamaru Academy
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Magang */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-lg transition bg-white flex flex-col">
            <div className="w-16 h-16 mx-auto bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-5">
              <BookOpen size={30} />
            </div>

            <h3 className="text-xl font-semibold text-center mb-4">
              Pendidikan Magang Jepang
            </h3>

            <p className="text-gray-700 text-center mb-6">
              Pembekalan bahasa, budaya, disiplin kerja, dan etika Jepang sebagai persiapan mengikuti program pemagangan resmi.
            </p>

            <div className="mt-auto text-center">
              <Link
                href="/programs/magang"
                className="inline-block px-5 py-2 border border-myred text-myred rounded-full text-sm font-medium hover:bg-myred hover:text-white transition"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

          {/* SSW */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-lg transition bg-white flex flex-col">
            <div className="w-16 h-16 mx-auto bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-5">
              <GraduationCap size={30} />
            </div>

            <h3 className="text-xl font-semibold text-center mb-4">
              Pendidikan Tokutei Ginou (SSW)
            </h3>

            <p className="text-gray-700 text-center mb-6">
              Persiapan materi ujian SSW, pelatihan bahasa Jepang dan persiapan ujian JFT/JLPT N4, dan pembekalan keterampilan sesuai standar industri Jepang untuk lulus ujian & bekerja secara resmi.
            </p>

            <div className="mt-auto text-center">
              <Link
                href="/programs/tg"
                className="inline-block px-5 py-2 border border-myred text-myred rounded-full text-sm font-medium hover:bg-myred hover:text-white transition"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

          {/* Matching Job */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-lg transition bg-white flex flex-col">
            <div className="w-16 h-16 mx-auto bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-5">
              <Briefcase size={30} />
            </div>

            <h3 className="text-xl font-semibold text-center mb-4">
              Matching Job Jepang
            </h3>

            <p className="text-gray-700 text-center mb-6">
              Layanan pencocokan pekerjaan Jepang untuk sektor Tokutei Ginou & perusahaan Jepang yang membutuhkan tenaga kerja.
            </p>

            <div className="mt-auto text-center">
              <Link
                href="/programs/matching-job"
                className="inline-block px-5 py-2 border border-myred text-myred rounded-full text-sm font-medium hover:bg-myred hover:text-white transition"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
