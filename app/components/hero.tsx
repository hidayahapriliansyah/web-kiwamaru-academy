import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section className="h-screen w-full flex items-center bg-gradient-to-t from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center bg-red-100 text-red-600 text-sm font-medium px-4 py-1 rounded-full">
            <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
            Nomor VIN Kemnaker: 2511327802
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-myblack">
                Tingkatkan Karier dengan <br />
                Bekerja di Jepang 🇯🇵
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-lg">
            Lembaga pelatihan kerja dan pengiriman tenaga kerja berizin resmi yang berorientasi pada pendidikan bahasa, budaya, serta etos kerja Jepang demi melahirkan talenta siap bekerja di Jepang.
          </p>

        <div className="flex gap-4">
            <Link href="#program" className="inline-block bg-[#d32424] hover:bg-red-700 text-white font-medium px-6 py-3 rounded-full text-lg shadow-lg transition">
                Lihat Program
            </Link>

            <Link href="#program" className="inline-block bg-white hover:bg-red-50 font-medium text-myred border-myred border px-6 py-3 rounded-full text-lg shadow-lg transition">
                Hubungi Kami
            </Link>
        </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
        //   initial={{ opacity: 0, y: 20 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-3xl shadow-sm bg-white border border-myred p-4">
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
