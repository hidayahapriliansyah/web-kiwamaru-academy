import React from 'react'
import { Mail, MapPin, Phone, Globe, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";


export default function ContactInfo() {
  return (
    <section className="py-16 px-6 w-full">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Alamat */}
        <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
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
        <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
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
        <div className="border border-myred rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-4 text-myblack flex items-center gap-2">
            <Globe className="text-myred" /> Website
          </h2>
          <p className="text-myred font-semibold">kiwamaruacademy.id</p>
        </div>
      </div>
    </section>
  )
}
