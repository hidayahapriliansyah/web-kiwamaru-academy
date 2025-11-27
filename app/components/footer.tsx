// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-myblack text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="flex flex-row items-center gap-2 mb-4 text-xl font-bold">
            <Image
              src={"/logo-only.svg"}
              alt="Logo"
              width={"30"}
              height={"30"}
            />
          LPK Kiwamaru Academy
        </Link>
          <p className="text-sm leading-relaxed">
            Pelatihan Bahasa Jepang, Magang, Tokutei Ginou dan Matching Job
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Beranda</Link></li>
            <li><Link href="/#program" className="hover:text-white">Program</Link></li>
            <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/contact" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Kontak</h4>
          <ul className="text-sm space-y-2">
            <li>
              Perumahan Grand Preanger Residence BLOK A9 RT 04 RW 07
              Kel. Tamanjaya, Kec. Tamansari, Kota Tasikmalaya, Jawa Barat
              Kode Pos: 46191
            </li>
            <li>
              <span className="font-medium text-white">WhatsApp:</span>  
              <a href="https://wa.me/6281214754492" className="hover:text-white block" target="_blank">
                +62812-1475-4492
              </a>
            </li>
            <li>
              <span className="font-medium text-white">Email:</span>  
              <a href="mailto:info@kiwamaruacademy.com" className="hover:text-white block">
                office@kiwamaruacademy.id
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kiwamaru Academy. All rights reserved.
      </div>
    </footer>
  );
}
