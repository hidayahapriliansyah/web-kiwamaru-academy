"use client";
import Link from "next/link";
import { Building2, FileCheck2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-20 bg-gradient-to-t from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-myblack mb-10">
          Tentang Kiwamaru Academy
        </h2>

        <div className="flex gap-12 items-center bg-white rounded-3xl shadow-sm border  border-myred p-8 md:p-12">
          
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex md:items-start md:flex-row flex-col gap-4">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                <Building2 size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Kiwamaru Academy</strong> didirikan pada tahun <strong>2025</strong> di Kota Tasikmalaya 
                sebagai lembaga pelatihan kerja yang berfokus pada persiapan tenaga kerja profesional Indonesia 
                untuk pasar Jepang.
                </p>
            </div>

            {/* Item 2 */}
            <div className="flex md:items-start md:flex-row flex-col gap-4">
                <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                <FileCheck2 size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                Kami telah memperoleh <strong>Sertifikat Standar</strong> yang diverifikasi langsung oleh Disnaker 
                dengan nomor sertifikat standar <strong>22042500521770005</strong> serta terdaftar dengan 
                <strong> Nomor VIN Kemnaker 2511327802</strong>.
                </p>
            </div>

            {/* Button */}
            <div className="pt-4">
                <Link
                href="/about"
                className="inline-block bg-[#d32424] text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-red-700 transition"
                >
                Lihat Selengkapnya
                </Link>
            </div>
          </div>

          <Image
            src={"/cover-company-profile.png"}
            alt="Company Profile"
            width={"250"}
            height={"650"}
          />

        </div>
      </div>
    </section>
  );
}
