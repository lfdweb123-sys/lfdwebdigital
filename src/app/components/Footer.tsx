"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Star,
  Shield,
  CreditCard,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Send,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Profil", href: "/#profil" },
    { name: "Réalisations", href: "/#realisations" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Création site WordPress",
    "Boutique Shopify",
    "SEO & Référencement",
    "Google Ads",
    "Extension Chrome",
    "API REST sur mesure"
  ];

  const contacts = [
    { icon: <Phone size={16} />, text: "+229 01 62 75 87 03", href: "tel:+2290162758703" },
    { icon: <Phone size={16} />, text: "+229 01 43 26 05 96 (WhatsApp)", href: "https://wa.me/2290143260596" },
    { icon: <Mail size={16} />, text: "contact@lfddigital.com", href: "mailto:contact@lfddigital.com" },
    { icon: <MapPin size={16} />, text: "Cotonou, Bénin", href: "/contact" }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" }
  ];

  const trustBadges = [
    { icon: <Star size={14} />, text: "5.0 (50+ avis)" },
    { icon: <Shield size={14} />, text: "Paiement sécurisé" },
    { icon: <Clock size={14} />, text: "Support 24/7" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/20 border-t border-yellow-200 mt-20">
      {/* Bouton retour en haut */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute -top-5 right-8 w-10 h-10 bg-gradient-to-br from-gold to-orange-custom rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-4 py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Colonne 1 - À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-black">
                LFD<span className="text-gold">.</span>Digital
              </h3>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Développeur Web & Mobile professionnel, Consultant SEO et Spécialiste Google Ads. 
              Plus de 300 clients satisfaits et 8 ans d'expérience à votre service.
            </p>
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center gap-1 bg-yellow-50/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-700 border border-yellow-200"
                >
                  <span className="text-gold">{badge.icon}</span>
                  {badge.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2 - Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-600 hover:text-gold transition-colors text-sm"
                  >
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold"></span>
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              {contacts.map((contact, index) => (
                <li key={index}>
                  <a 
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    className="flex items-start gap-3 group"
                  >
                    <span className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <span className="text-gold group-hover:text-black transition-colors">{contact.icon}</span>
                    </span>
                    <span className="text-gray-600 text-sm group-hover:text-gold transition-colors leading-relaxed">
                      {contact.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 bg-white border border-yellow-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Séparateur avec dégradé */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-yellow-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-white via-yellow-50 to-white px-6 py-2 rounded-full border border-yellow-200">
              <Send size={16} className="text-gold" />
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          <div className="text-gray-600 text-center md:text-left">
            © {currentYear} <span className="font-semibold text-black">LFD WEB Digital</span>. Tous droits réservés.
            <br className="md:hidden" />
            <span className="hidden md:inline mx-2">•</span>
            <span className="text-xs text-gray-500">Développé avec ❤️ pour votre succès</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/mentions-legales" className="text-gray-500 hover:text-gold transition-colors text-xs">
              Mentions légales
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/confidentialite" className="text-gray-500 hover:text-gold transition-colors text-xs">
              Confidentialité
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/cgv" className="text-gray-500 hover:text-gold transition-colors text-xs">
              CGV
            </Link>
            <span className="text-gray-300">|</span>
            <a 
              href="https://comeup.com/fr/@lfd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-black transition-colors text-xs font-medium"
            >
              ComeUp Pro
            </a>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-8 pt-4"
        >
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
            React.js
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
            Next.js
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
            React Native
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
            Node.js
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
            Python
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
            WordPress
          </span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <span className="w-1 h-1 bg-gold/50 rounded-full"></span>
            Shopify
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;