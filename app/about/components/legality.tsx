"use client";
import { FileCheck2, ShieldCheck, ClipboardCheck } from "lucide-react";

export function LegalitySection() {
  return (
    <section className="w-full py-20  bg-gradient-to-t from-red-600/80 to-white" id="legalitas">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-myblack mb-10">
          Legalitas LPK Kiwamaru Academy
        </h2>

        <div className="bg-white rounded-3xl shadow-sm border border-myred p-8 md:p-12 space-y-10">
          
          {/* Sertifikat Standar */}
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
              <FileCheck2 size={28} />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              LPK Kiwamaru Academy telah memperoleh <strong>Sertifikat Standar</strong> yang
              diverifikasi langsung oleh Disnaker dengan nomor:
              <br />
              <strong>22042500521770005</strong>.
            </p>
          </div>

          {/* Nomor VIN */}
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Terdaftar dengan <strong>Nomor VIN Kemnaker</strong>: <strong>2511327802</strong>
            </p>
          </div>

          {/* Keterangan Tambahan */}
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
              <ClipboardCheck size={28} />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Semua program pelatihan berada di bawah pengawasan resmi dan mengikuti standar 
              ketenagakerjaan nasional yang berlaku.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
