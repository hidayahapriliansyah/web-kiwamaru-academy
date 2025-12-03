// app/programs/matching-job/page.tsx

import Link from "next/link";
import { Users, CheckCircle2, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import Hero from "./components/hero";

export default function MatchingJobPage() {
  return (
    <>
      <Hero />

      {/* CHANNEL INFO */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-myblack">Saluran Lowongan Kerja Resmi</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Dapatkan update lowongan kerja Jepang (Magang • Tokutei Ginou • Matching Job) setiap hari melalui saluran WhatsApp resmi kami.
          </p>

          <Link
            href="https://whatsapp.com/channel/0029VbAeVN38V0ttBrp2zp3i"
            target="_blank"
            className="inline-flex items-center gap-2 bg-myred text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-red-600 transition"
          >
            Kunjungi Saluran Loker
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Followers */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <Users className="text-myred" size={40} />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">1,6rb+ Pengikut</h3>
            <p className="text-gray-600 text-center">
              Saluran resmi yang telah dipercaya ribuan pencari kerja Jepang.
            </p>
          </div>

          {/* Peserta Lolos */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="text-myred" size={40} />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">60+ Peserta Lolos</h3>
            <p className="text-gray-600 text-center">
              Telah berhasil meloloskan peserta dari Indonesia maupun yang sudah berada di Jepang.
            </p>
          </div>

          {/* Tim Job Jepang */}
          <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="text-myred" size={40} />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">Job Langsung dari Jepang</h3>
            <p className="text-gray-600 text-center">
              Tim kami berada di Jepang untuk mendapatkan job terpercaya langsung dari perusahaan penerima.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-6 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-myblack">Butuh Info Lebih Lanjut?</h2>
          <p className="text-gray-700 text-lg mb-10">
            Hubungi kami untuk pertanyaan terkait lowongan, proses seleksi, atau konsultasi.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl flex items-center justify-center gap-2 text-myblack mb-2">
                <MessageCircle className="text-myred" /> Arpan Sensei
              </h3>
              <a
                href="https://wa.me/6282318548994"
                target="_blank"
                className="text-myred font-semibold hover:underline"
              >
                +62 823 1854 8994
              </a>
            </div>

            <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl flex items-center justify-center gap-2 text-myblack mb-2">
                <MessageCircle className="text-myred" /> Admin Kiwamaru
              </h3>
              <a
                href="https://wa.me/6281214754492"
                target="_blank"
                className="text-myred font-semibold hover:underline"
              >
                +62 812 1475 4492
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
