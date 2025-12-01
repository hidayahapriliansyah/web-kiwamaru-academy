"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled 
          ? "bg-white shadow-md" 
          : "bg-transparent bg-gradient-to-br from-white/50 to-50% to-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className={`flex flex-row items-center gap-2 text-xl font-bold 
          ${scrolled 
              ? `md:hover:text-myred/90`
              : `md:text-white md:hover:text-white/80`
            }  
        `}>
          <Image src={"/logo-only.svg"} alt="Logo" width={30} height={30} />
          LPK Kiwamaru Academy
        </Link>

        <div className="hidden md:flex items-center justify-between gap-4 font-medium">
          <Link href="/#" className={`
            ${scrolled 
              ? `hover:text-myred/90`
              : `text-white hover:text-white/50`
            }
          `}>Beranda</Link>
          <Link href="/#program" className={`
            ${scrolled 
              ? `hover:text-myred/90`
              : `text-white hover:text-white/50`
            }
          `}>Program</Link>
          <Link href="/#about" className={`
            ${scrolled 
              ? `hover:text-myred/90`
              : `text-white hover:text-white/50`
            }
          `}>Tentang</Link>
          <Link href="/#contact" className={`
            ${scrolled 
              ? `hover:text-myred/90`
              : `text-white hover:text-white/50`
            }
          `}>Kontak</Link>
        </div>

        <Link
          href={"/#"}
          className="hidden md:inline font-bold text-white hover:opacity-90 bg-myred py-2 px-4 rounded-full"
        >
          Hubungi Kami
        </Link>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden hover:cursor-pointer"
        >
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {openMenu && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          <Link href="/#" className="block py-2 border-b hover:text-myred" onClick={() => setOpenMenu(false)}>Beranda</Link>
          <Link href="/#program" className="block py-2 border-b hover:text-myred" onClick={() => setOpenMenu(false)}>Program</Link>
          <Link href="/#about" className="block py-2 border-b hover:text-myred" onClick={() => setOpenMenu(false)}>Tentang</Link>
          <Link href="/contact" className="block py-2 hover:text-myred" onClick={() => setOpenMenu(false)}>Kontak</Link>

          <Link
            href={"/#"}
            className="flex items-center justify-center font-bold text-white hover:opacity-90 bg-myred p-4 rounded-full w-full"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
