import { BookOpen, BadgeCheck, Briefcase } from "lucide-react";

export default function ProgramSection() {
  return (
    <section className="w-full py-20 bg-white" id="program">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-myblack">
          Program Kami
        </h2>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Program 1 – Pendidikan Magang */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-full mb-5 mx-auto">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Pendidikan Magang
            </h3>
            <p className="text-gray-600 text-center">
              Program pembekalan bahasa, budaya, dan etika kerja Jepang untuk mempersiapkan peserta mengikuti program pemagangan resmi ke Jepang.
            </p>
          </div>

          {/* Program 2 – Pendidikan Tokutei Ginou */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-full mb-5 mx-auto">
              <BadgeCheck size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Pendidikan Tokutei Ginou
            </h3>
            <p className="text-gray-600 text-center">
              Persiapan materi ujian SSW, pelatihan bahasa Jepang dan persiapan ujian JFT/JLPT N4, dan pembekalan keterampilan sesuai standar industri Jepang untuk lulus ujian & bekerja secara resmi.
            </p>
          </div>

          {/* Program 3 – Matching Job */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-full mb-5 mx-auto">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Matching Job
            </h3>
            <p className="text-gray-600 text-center">
              Layanan pencocokan lowongan kerja Jepang (Tokutei Ginou & sektor lainnya) dengan kandidat yang sesuai, termasuk proses interview hingga placement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
