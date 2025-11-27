"use client";
import { useState } from "react";

export default function FaqAccordion() {
  const faqData = [
    {
      q: "Apa itu LPK Kiwamaru Academy?",
      a: "LPK Kiwamaru Academy didirikan pada tahun 2025 di Kota Tasikmalaya sebagai lembaga pelatihan kerja yang berfokus pada persiapan tenaga kerja profesional Indonesia untuk pasar Jepang. LPK ini dirintis oleh Arpan, seorang mekanik berpengalaman di Jepang, bersama tim yang memiliki dedikasi tinggi dalam bidang pendidikan dan pelatihan vokasional.",
    },
    {
      q: "Apakah LPK Kiwamaru Academy sudah memiliki izin resmi?",
      a: "LPK Kiwamaru Academy sudah memperoleh Sertifikat Standar LPK yang diverifikasi langsung oleh Disnaker dengan nomor sertifikat standar 22042500521770005 serta terdaftar dengan Nomor VIN Kemnaker 2511327802.",
    },
    {
      q: "Apakah LPK Kiwamaru Academy sudah bekerja sama dengan perusahaan Jepang?",
      a: "Ya. Kami bekerja sama dengan berbagai perusahaan di Jepang dalam bidang otomotif, manufaktur, kaigo, restoran, pengolahan makanan dan pertanian untuk menyalurkan lulusan ke tempat kerja.",
    },
    {
      q: "Program apa saja yang tersedia?",
      a: "Pendidikan bahasa Jepang, Pendidikan Tokutei Ginou & Pemagangan, Matching Job (Penyaluran Kerja)",
    },
    {
      q: "Berapa lama durasi pelatihan?",
      a: "Durasi berbeda sesuai program pendidikan berdurasi 4 bulan, bisa disesuaikan dengan kemampuan peserta.",
    },
    {
      q: "Apakah peserta akan dibimbing hingga bekerja di Jepang?",
      a: "Iya, kami membantu secara menyeluruh mulai dari seleksi, pelatihan, interview, sampai bimbingan karier dan komunikasi dengan perusahaan penerima di Jepang.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
       <section className="w-full py-20 bg-white" id="faq">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-myblack mb-12">
                Pertanyaan yang Sering Diajukan
                </h2>
                    <div className="w-full max-w-3xl mx-auto mt-10 space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-myred rounded-xl shadow-sm bg-white"
                        >
                        {/* Header */}
                        <button
                            onClick={() => toggle(index)}
                            className="flex justify-between w-full text-left p-4 hover:cursor-pointer rounded-xl"
                        >
                            <span className="font-semibold text-lg">{item.q}</span>
                            <span className="text-xl">
                            {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {/* Isi Accordion */}
                        {openIndex === index && (
                            <div className="-mt-4 px-4 pb-4">
                                <p className="mt-3 text-gray-700 leading-relaxed">
                                {item.a}
                                </p>
                            </div>
                        )}
                        </div>
                    ))}
                    </div>
             </div>
        </section>
  );
}
