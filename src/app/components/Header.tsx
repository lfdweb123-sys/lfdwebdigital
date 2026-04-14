"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code, Smartphone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-yellow-200">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          LFD WEB<span className="text-gold">.</span>Digital
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-gold transition-colors">Accueil</Link>
          <Link href="/#services" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/#profil" className="hover:text-gold transition-colors">Profil</Link>
          <Link href="/#realisations" className="hover:text-gold transition-colors">Réalisations</Link>
          <Link href="/contact" className="btn-primary !py-2 !px-5 text-sm">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-yellow-200 md:hidden flex flex-col items-center gap-6 py-8 shadow-lg animate-in slide-in-from-top">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Accueil</Link>
            <Link href="/#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</Link>
            <Link href="/#profil" onClick={() => setIsOpen(false)} className="text-lg font-medium">Profil</Link>
            <Link href="/#realisations" onClick={() => setIsOpen(false)} className="text-lg font-medium">Réalisations</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-32 text-center">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;