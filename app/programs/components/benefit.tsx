// components/program/BenefitSection.tsx
"use client";

import { CheckCircle } from "lucide-react";

export default function BenefitSection() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-myblack mb-12">
          Mengapa Memilih Kiwamaru Academy?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Pengajar berpengalaman di Jepang",
            "Pembelajaran bahasa Jepang intensif",
            "Simulasi ujian dan interview Jepang",
            "Bimbingan dokumen dan administrasi",
            "Akses ke lowongan Jepang (Matching Job)",
            "Pendampingan sampai berangkat"
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <CheckCircle className="text-red-600 mt-1" size={24} />
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
