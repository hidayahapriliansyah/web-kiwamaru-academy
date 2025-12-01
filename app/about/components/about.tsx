"use client";
import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";

export function AboutKiwamaru() {
  return (
    <section className="w-full py-20 bg-white" id="tentang">
      <div className="max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-myblack mb-6">
          Tentang LPK Kiwamaru Academy
        </h2>

        {/* CONTENT */}
        <div className="space-y-10">
          <div className="md:w-full">
            <p className="text-gray-700 text-lg leading-relaxed">
              LPK Kiwamaru Academy didirikan pada tahun 2025 di Kota Tasikmalaya sebagai lembaga pelatihan kerja 
              yang berfokus pada persiapan tenaga kerja profesional Indonesia untuk pasar Jepang.
              LPK ini dirintis oleh Arpan, seorang mekanik berpengalaman di Jepang, bersama tim yang memiliki 
              dedikasi tinggi dalam bidang pendidikan dan pelatihan vokasional.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <Image
              src="/cover-company-profile.png"   // ganti sesuai file kamu
              alt="Company Profile Thumbnail"
              width={200}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />

            <Link
              href="https://drive.google.com/file/d/1QMqcnhhznl-NFgRY_b92y9gEGgHdHV6b/view?usp=sharing"  // ganti file PDF sesuai lokasi kamu
              download
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
              target="_blank"
            >
              <Download size={20} />
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
