import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-gradient-to-b from-myred/50 via-red-500/60 to-red-600/90 text-white">
      <div className="absolute inset-0 -z-10 bg-blue-50 w-full h-full">
        <Image
          src="/japan-view.jpg"
          fill
          alt="Japanese View"
          className="object-cover blur-[2px]"
        />
      </div>

      <div className="flex flex-col items-center max-w-6xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center w-fit bg-white/20 mb-8 text-white text-sm font-medium px-4 py-1 rounded-full backdrop-blur">
          <span className="w-2 h-2 bg-white rounded-full mr-2" />
          Kontak LPK Kiwamaru Academy
        </div>

        <h1 className="text-4xl text-center md:text-5xl font-extrabold mb-6">
          Hubungi Kami
        </h1>
        <p className="text-lg md:text-xl text-center max-w-3xl">
          Kiwamaru Academy siap membantu menjawab kebutuhan dan pertanyaan Anda.
        </p>
      </div>
    </section>
  )
}
