// app/about/AboutHero.jsx (atau /components/AboutHero.jsx)
import Image from "next/image";
import React from "react";

export default function AboutHero() {
  return (
    <section className="relative mt-16 md:mt-0 min-h-screen w-full flex items-center bg-gradient-to-b from-myred/50 via-red-500/60 to-red-600/90 text-white">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 bg-blue-50 w-full h-full">
        <Image
          src="/japan-view.jpg"
          fill
          alt="Japanese View"
          className="object-cover blur-[2px]"
        />
      </div>

      <div className="max-w-7xl mx-auto p-6 flex flex-col gap-8 items-center">
        {/* LEFT CONTENT */}
          {/* Badge */}
          <div className="inline-flex items-center w-fit bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full backdrop-blur">
            <span className="w-2 h-2 bg-white rounded-full mr-2" />
            Tentang LPK Kiwamaru Academy
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl text-center font-extrabold leading-tight">
            Membangun SDM Profesional <br />
            Indonesia untuk Jepang 🇯🇵
          </h1>

          {/* Description */}
          <p className="text-red-50 text-lg text-center leading-relaxed max-w-2xl">
            LPK Kiwamaru Academy berdiri pada tahun 2025 di Kota Tasikmalaya. 
            Kami fokus pada pembentukan tenaga kerja profesional yang siap berkarier 
            di Jepang melalui pendidikan bahasa, budaya, dan pelatihan vokasional berkualitas.
          </p>
      </div>
    </section>
  );
}
