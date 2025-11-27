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
          {/* Card 1 */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-full mb-5 mx-auto">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Pendidikan Bahasa Jepang
            </h3>
            <p className="text-gray-600 text-center">
              Pelatihan bahasa Jepang dari dasar hingga persiapan JLPT dan kebutuhan kerja di Jepang.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-full mb-5 mx-auto">
              <BadgeCheck size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Pendidikan Tokutei Ginou & Pemagangan
            </h3>
            <p className="text-gray-600 text-center">
              Persiapan ujian SSW, pembekalan etika kerja Jepang, serta program persiapan magang ke Jepang.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-14 h-14 bg-red-100 text-red-600 rounded-full mb-5 mx-auto">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Matching Job (Penyaluran Kerja)
            </h3>
            <p className="text-gray-600 text-center">
              Pendampingan dan penyaluran kerja ke Jepang sesuai minat, kemampuan, dan kebutuhan perusahaan.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
