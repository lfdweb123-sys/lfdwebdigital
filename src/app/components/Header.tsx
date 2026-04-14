"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Briefcase, User, FolderOpen, Phone } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-gold transition-colors text-sm lg:text-base font-medium">Accueil</Link>
          <Link href="/#services" className="hover:text-gold transition-colors text-sm lg:text-base font-medium">Services</Link>
          <Link href="/#profil" className="hover:text-gold transition-colors text-sm lg:text-base font-medium">Profil</Link>
          <Link href="/#realisations" className="hover:text-gold transition-colors text-sm lg:text-base font-medium">Réalisations</Link>
          <Link href="/contact" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gold hover:text-black transition-all duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-50 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu - RIDEAU GAUCHE - FOND BLANC - TEXTE NOIR */}
        <div 
          className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-white shadow-2xl md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* En-tête du menu */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200">
            <span className="text-lg font-bold text-black">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X size={18} className="text-black" />
            </button>
          </div>

          {/* Liste des liens */}
          <div className="py-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-6 py-4 text-left border-b border-gray-100 hover:bg-gray-50 transition-all duration-200"
              >
                <span className="text-black">
                  {item.icon}
                </span>
                <span className="text-base font-medium text-black">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;