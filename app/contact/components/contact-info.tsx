import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <section className="py-16 px-6 w-full">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Email */}
        <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
            <Mail className="text-myred" /> Email
          </h2>
          <p className="text-gray-700">office@kiwamaruacademy.id</p>
        </div>

        {/* WhatsApp */}
        <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
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
        <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
            <MessageCircle className="text-myred" /> Sosial Media
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-center gap-2">
              <Link href={"https://instagram.com/kiwamaruacademy.id"} target="_blank" className="flex items-center gap-2 hover:underline">
                <Instagram className="text-myred" /> Instagram: kiwamaruacademy.id
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href={"https://facebook.com/kiwamaruacademy.id"} target="_blank" className="flex items-center gap-2 hover:underline">
                <Facebook className="text-myred" /> Facebook: kiwamaruacademy.id
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href={"https://tiktok.com/@kiwamaruacademy.id"} target="_blank" className="flex items-center gap-2 hover:underline">
                <MessageCircle className="text-myred" /> Tiktok: kiwamaruacademy.id
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link href={"https://x.com/@kiwamaruacademy"} target="_blank" className="flex items-center gap-2 hover:underline">
                <Twitter className="text-myred" /> X/Twitter: kiwamaruacademy
              </Link>
            </li>
          </ul>
        </div>

        {/* Website */}
        <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
            <Globe className="text-myred" /> Website
          </h2>
          <p className="text-myred font-semibold">kiwamaruacademy.id</p>
        </div>

        {/* Google Map Section */}
        <div className="md:col-span-2 border border-myred rounded-2xl p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
            <MapPin className="text-myred" /> Lokasi Kami
          </h2>

          <div className="w-full h-80 mb-6 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3905.093615147601!2d108.2349071!3d-7.397298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57004ccd9a4b%3A0x144ee45a838f7e37!2sRaja%20Koja%20Premium%20Essence!5e1!3m2!1sen!2sid!4v1764744866675!5m2!1sen!2sid"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Perumahan Grand Preanger Residence BLOK A9,
            RT 04 RW 07, Kel. Tamanjaya, Kec. Tamansari,
            Kota Tasikmalaya, Kode Pos: 46191
            (Bangunan Bekas Raja Koja Premium Essence)
          </p>
        </div>
      </div>
    </section>
  );
}
