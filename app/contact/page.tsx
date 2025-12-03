// app/kontak/page.tsx
import { Mail, MapPin, Phone, Globe, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white w-full">
      {/* HERO */}
      <section className="w-full bg-myred text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-lg md:text-xl opacity-90">
            Kiwamaru Academy siap membantu menjawab kebutuhan dan pertanyaan Anda.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 px-6 w-full">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Alamat */}
          <div className="p-8 border rounded-3xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
              <MapPin className="text-myred" /> Alamat Lengkap
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Perumahan Grand Preanger Residence BLOK A9
              RT 04 RW 07 Kel. Tamanjaya,
              Kec. Tamansari, Kota Tasikmalaya
              Kode Pos: 46191
            </p>
          </div>

          {/* Email */}
          <div className="p-8 border rounded-3xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
              <Mail className="text-myred" /> Email
            </h2>
            <p className="text-gray-700">office@kiwamaruacademy.id</p>
          </div>

          {/* WhatsApp */}
          <div className="p-8 border rounded-3xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
              <Phone className="text-myred" /> WhatsApp
            </h2>
            <a
              href="https://wa.me/6281214754492"
              target="_blank"
              className="text-myred font-semibold hover:underline"
            >
              +62 812 1475 4492
            </a>
          </div>

          {/* Sosial Media */}
          <div className="p-8 border rounded-3xl shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
              <MessageCircle className="text-myred" /> Sosial Media
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <Instagram className="text-myred" /> Instagram: kiwamaruacademy.id
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="text-myred" /> Facebook: kiwamaruacademy.id
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="text-myred" /> Tiktok: kiwamaruacademy.id
              </li>
              <li className="flex items-center gap-2">
                <Twitter className="text-myred" /> X/Twitter: kiwamaruacademy
              </li>
            </ul>
          </div>

          {/* Website */}
          <div className="p-8 border rounded-3xl shadow-lg bg-white md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
              <Globe className="text-myred" /> Website
            </h2>
            <p className="text-myred font-semibold">kiwamaruacademy.id</p>
          </div>
        </div>
      </section>
    </main>
  );
}
