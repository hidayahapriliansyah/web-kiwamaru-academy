import Link from "next/link";

export default function ClosingSection() {
  return (
    <section className="py-20 text-white text-center w-full bg-gradient-to-t from-red-50 to-white">
      <div className="p-16 max-w-6xl mx-auto px-6 bg-gradient-to-tl from-myred to-red-500 md:rounded-3xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Membangun Masa Depan Bersama LPK Kiwamaru Academy?
        </h2>

        <p className="text-lg md:text-xl mb-10 leading-relaxed">
          Bersama LPK Kiwamaru Academy, kami berkomitmen mencetak tenaga kerja profesional 
          Indonesia yang kompeten, disiplin, fasih berbahasa Jepang, dan siap memenuhi 
          standar industri Jepang. Mari mulai perjalanan Anda menuju karier internasional.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/6281214754492"
            className="px-8 py-4 bg-white text-red-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
            target="_blank"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>

      </div>
    </section>
  );
}
