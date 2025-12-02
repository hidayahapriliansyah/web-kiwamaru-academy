"use client";

import { CheckCircle } from "lucide-react";

export default function ProgramSection() {
  const alur = [
    { step: "1", title: "Daftar", desc: "Mengisi formulir pendaftaran program." },
    {
      step: "2",
      title: "Cek Kesehatan",
      desc: "Surat keterangan sehat sebagai syarat untuk melanjutkan tahapan berikutnya.",
    },
    {
      step: "3",
      title: "Belajar Bahasa Jepang",
      desc: "Belajar intensif selama 3–4 bulan (level N5–N4).",
    },
    {
      step: "4",
      title: "Mensetsu Job Magang",
      desc: "Mengikuti interview job magang Jepang yang difasilitasi lembaga.",
    },
    {
      step: "5",
      title: "Pemantapan di SO",
      desc: "Training pemantapan selama kurang lebih 3 bulan sebelum keberangkatan.",
    },
    {
      step: "6",
      title: "Berangkat ke Jepang",
      desc: "Peserta resmi diberangkatkan untuk bekerja di Jepang.",
    },
  ];

  return (
    <div className="w-full">
      {/* ---------------- BENEFIT SECTION ---------------- */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-myblack mb-6">Benefit Program</h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-myred w-6 h-6 flex-shrink-0" />
              Pasti berangkat job
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-myred w-6 h-6 flex-shrink-0" />
              Pembelajaran bahasa Jepang intensif dari pengajar berpengalaman
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-myred w-6 h-6 flex-shrink-0" />
              Pendampingan lengkap hingga proses keberangkatan
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-myred w-6 h-6 flex-shrink-0" />
              Simulasi mensetsu & persiapan dokumen secara menyeluruh
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- ALUR PROGRAM SECTION ---------------- */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-myblack mb-10">Alur Program</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {alur.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-myred text-white font-bold rounded-full text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-myblack mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
