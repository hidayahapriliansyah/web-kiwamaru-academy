import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="relative mt-16 md:mt-0 min-h-screen w-full flex items-center bg-gradient-to-b from-myred/95 via-red-500/90 to-red-600 text-white">
      <div className="absolute inset-0 -z-10 bg-blue-50 w-full h-full">
        <Image
          src={"/japan-view.jpg"}
          fill={true}
          alt="Japanese View"
          className="object-cover blur-[2px]"
        />
      </div>
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full backdrop-blur">
            <span className="w-2 h-2 bg-white rounded-full mr-2" />
            Nomor VIN Kemnaker: 2511327802
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Tingkatkan Karier dengan <br />
            Bekerja di Jepang 🇯🇵
          </h1>

          {/* Description */}
          <p className="text-red-50 text-lg">
            Lembaga pelatihan kerja dan pengiriman tenaga kerja berizin resmi yang berorientasi pada pendidikan bahasa, budaya, serta etos kerja Jepang demi melahirkan talenta siap bekerja di Jepang.
          </p>

          <div className="flex flex-col md:flex-row gap-4 text-center">
            <Link href="#program" className="inline-block bg-white text-red-700 hover:bg-red-100 font-medium px-6 py-3 rounded-full text-lg shadow-lg transition">
              Lihat Program
            </Link>

            <Link href="#program" className="inline-block bg-transparent border bg-gradient-to-br from-myred to-red-600 border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-full text-lg shadow-lg transition">
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="rounded-3xl shadow-sm bg-white/10 backdrop-blur-lg p-4 border border-white/20">
            <Image
              src="/hero-image.png"
              alt="People working illustration"
              width={400}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>

  )
}
