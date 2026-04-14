"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, Home, Briefcase, User, FolderOpen, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { href: "/", label: "Accueil", icon: <Home size={18} /> },
    { href: "/#services", label: "Services", icon: <Briefcase size={18} /> },
    { href: "/#profil", label: "Profil", icon: <User size={18} /> },
    { href: "/#realisations", label: "Réalisations", icon: <FolderOpen size={18} /> },
    { href: "/contact", label: "Contact", icon: <Phone size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-yellow-200">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-black">
          LFD WEB<span className="text-gold">.</span>Digital
        </Link>

        {/* Desktop Menu - Centré */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              href={item.href} 
              className="hover:text-gold transition-colors text-sm lg:text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-black transition-all duration-300">
            Contact rapide
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-50 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay sombre */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu - RIDEAU DROITE */}
        <div 
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* En-tête du menu */}
          <div className="flex items-center justify-between p-5 border-b border-yellow-200">
            <span className="text-lg font-bold text-black">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-50 hover:bg-yellow-100 transition-colors"
            >
              <X size={18} className="text-black" />
            </button>
          </div>

          {/* Liste des liens - ALIGNÉS À DROITE */}
          <div className="py-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-end gap-3 px-6 py-4 text-right border-b border-yellow-50 hover:bg-gradient-to-l hover:from-yellow-50 hover:to-transparent transition-all duration-200 group"
              >
                <span className="text-base font-medium text-gray-800 group-hover:text-gold transition-colors">
                  {item.label}
                </span>
                <span className="text-gold group-hover:translate-x-1 transition-transform">
                  {item.icon}
                </span>
              </Link>
            ))}
          </div>

          {/* Bouton Contact spécial */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-yellow-200 bg-gradient-to-t from-yellow-50 to-white">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between bg-black text-white px-5 py-3 rounded-full font-medium hover:bg-gold hover:text-black transition-all duration-300 group"
            >
              <span>Contact rapide</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-xs text-center text-gray-500 mt-3">
              LFD WEB Digital © 2026
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;