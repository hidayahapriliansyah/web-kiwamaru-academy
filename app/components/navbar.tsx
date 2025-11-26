"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  // const [openAccordion, setOpenAccordion] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="flex flex-row items-center gap-1 text-xl font-bold">
          <Image
            src={"/logo-only.svg"}
            alt="Logo"
            width={"30"}
            height={"30"}
          />
          LPK Kiwamaru Academy
        </Link>

        <div className="hidden md:flex items-center justify-between gap-4 font-medium">
          <Link href="/#" className="hover:text-myred">
            Beranda
          </Link>
          <Link href="/#program" className="hover:text-myred">
            Program
          </Link>
          <Link href="/#about" className="hover:text-myred">
            Tentang
          </Link>
          <Link href="/#faq" className="hover:text-myred">
            FAQ
          </Link>
          <Link href="/#contact" className="hover:text-myred">
            Kontak
          </Link>
        </div>

        <Link href={"/#"} className="hidden md:inline font-bold text-white hover:opacity-90 bg-myred py-2 px-4 rounded-full">
          Hubungi Kami
        </Link>

        {/* Desktop menu */}
        {/* <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Services <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 top-10 hidden group-hover:block bg-white shadow-md p-4 rounded-xl space-y-2 w-44">
              <Link href="/service/web" className="block hover:text-blue-600">Web Development</Link>
              <Link href="/service/mobile" className="block hover:text-blue-600">Mobile Apps</Link>
              <Link href="/service/design" className="block hover:text-blue-600">UI/UX Design</Link>
            </div>
          </div>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div> */}

        {/* Mobile button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden hover:cursor-pointer"
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          <Link href="/#" className="block py-2 border-b hover:text-myred" onClick={() => setOpenMenu(false)}>
            Beranda
          </Link>

          {/* Accordion */}
          {/* <div className="border-b pb-2">
            <button
              className="flex justify-between items-center w-full py-2 font-medium hover:text-myred"
              onClick={() => setOpenAccordion(!openAccordion)}
            >
              Services
              <ChevronDown className={`${openAccordion && "rotate-180"} transition`} />
            </button>
            
            {openAccordion && (
              <div className="pl-4 space-y-2 mt-2">
                <Link href="/service/web" className="block hover:text-blue-600" onClick={() => setOpenMenu(false)}>Web Development</Link>
                <Link href="/service/mobile" className="block hover:text-blue-600" onClick={() => setOpenMenu(false)}>Mobile Apps</Link>
                <Link href="/service/design" className="block hover:text-blue-600" onClick={() => setOpenMenu(false)}>UI/UX Design</Link>
              </div>
            )}
          </div> */}

          <Link href="/#program" className="block py-2 border-b hover:text-myred" onClick={() => setOpenMenu(false)}>
            Program
          </Link>

          <Link href="/#about" className="block py-2 border-b hover:text-myred" onClick={() => setOpenMenu(false)}>
            Tentang
          </Link>

          <Link href="/#faq" className="block py-2 border-b hover:text-myred" onClick={() => setOpenMenu(false)}>
            FAQ
          </Link>

          <Link href="/contact" className="block py-2 hover:text-myred" onClick={() => setOpenMenu(false)}>
            Kontak
          </Link>

          <Link href={"/#"} className="flex items-center justify-center font-bold text-white hover:opacity-90 bg-myred p-4 rounded-full w-full">
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}