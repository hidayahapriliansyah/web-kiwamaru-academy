// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-myblack text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Kiwamaru Academy
          </h3>
          <p className="text-sm leading-relaxed">
            Lembaga pelatihan kerja yang berfokus pada pendidikan bahasa Jepang, 
            persiapan Tokutei Ginou, dan penyaluran tenaga kerja ke Jepang.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Beranda</Link></li>
            <li><Link href="/programs" className="hover:text-white">Program</Link></li>
            <li><Link href="/about" className="hover:text-white">Tentang Kami</Link></li>
            <li><Link href="/contact" className="hover:text-white">Kontak</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Kontak</h4>
          <ul className="text-sm space-y-2">
            <li>
              Jl. Winaya II, Perum Cikunten Indah,  
              Kota Tasikmalaya, Jawa Barat
            </li>
            <li>
              <span className="font-medium text-white">WhatsApp:</span>  
              <a href="https://wa.me/628xxx" className="hover:text-white block">
                08xx-xxxx-xxxx
              </a>
            </li>
            <li>
              <span className="font-medium text-white">Email:</span>  
              <a href="mailto:info@kiwamaruacademy.com" className="hover:text-white block">
                info@kiwamaruacademy.com
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
