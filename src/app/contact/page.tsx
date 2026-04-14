"use client";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Smartphone,
  Globe,
  Star,
  Shield,
  ChevronRight,
  Send,
  Calendar,
  Users
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactCards = [
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      value: "+229 01 62 75 87 03",
      subtext: "Appel direct",
      href: "tel:+2290162758703",
      color: "from-black to-gray-800",
      iconBg: "bg-black"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "+229 01 43 26 05 96",
      subtext: "Réponse rapide",
      href: "https://wa.me/2290143260596",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-500"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "contact@lfddigital.com",
      subtext: "Réponse sous 24h",
      href: "mailto:contact@lfddigital.com",
      color: "from-black to-gray-800",
      iconBg: "bg-black"
    }
  ];

  const infoCards = [
    {
      icon: <Clock size={20} />,
      title: "Disponibilité",
      text: "Lun - Sam : 9h - 19h",
      subtext: "Dimanche : Fermé"
    },
    {
      icon: <Globe size={20} />,
      title: "Langues",
      text: "Français, Anglais",
      subtext: "Communication claire"
    },
    {
      icon: <Users size={20} />,
      title: "Clients",
      text: "+300 clients satisfaits",
      subtext: "8 ans d'expérience"
    }
  ];

  const stats = [
    { value: "341", label: "Ventes totales", icon: <Star size={16} className="text-gold" /> },
    { value: "5.0", label: "Note moyenne", icon: <Star size={16} className="text-gold" /> },
    { value: "100%", label: "Satisfaction", icon: <Shield size={16} className="text-gold" /> }
  ];

  return (
    <section className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* En-tête avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black">
            Contactez-<span className="text-gold">moi</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Une question ? Un projet ? Discutons-en directement.
          </p>
          
          {/* Badge de disponibilité */}
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-700">Disponible pour de nouveaux projets</span>
          </div>
        </motion.div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-yellow-200 shadow-sm text-center"
            >
              <div className="flex items-center justify-center gap-1 mb-1">
                {stat.icon}
                <span className="text-xl sm:text-2xl font-bold text-black">{stat.value}</span>
              </div>
              <span className="text-xs text-gray-600">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Cartes de contact principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
          {contactCards.map((card, index) => (
            <motion.a
              key={index}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-yellow-200 shadow-md group-hover:border-transparent transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${card.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors`}>
                    <div className="text-gold group-hover:text-white transition-colors">
                      {card.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-500 group-hover:text-white/80 transition-colors mb-1">
                      {card.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-black group-hover:text-white transition-colors break-all">
                      {card.value}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors mt-1 flex items-center gap-1">
                      {card.subtext}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Informations complémentaires */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12"
        >
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-yellow-100 flex items-start gap-3"
            >
              <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-gold">{card.icon}</span>
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-black mb-1">{card.title}</h4>
                <p className="text-xs sm:text-sm text-gray-700">{card.text}</p>
                <p className="text-xs text-gray-500">{card.subtext}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-gold" />
            <h3 className="text-lg font-semibold text-black">Me trouver</h3>
          </div>
          
          <div className="rounded-2xl overflow-hidden border-3 sm:border-4 border-white shadow-xl">
            <div className="relative w-full" style={{ paddingBottom: '40%' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15856.519318512786!2d2.364916!3d6.505245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024af14bcc97137%3A0xa9403f444b4af583!2sLFD%20WEB%20DIGITAL%20-Developpeur%20web!5e0!3m2!1sfr!2sbj!4v1776175669322!5m2!1sfr!2sbj" 
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 flex items-center justify-center gap-1">
            <MapPin size={14} />
            LFD WEB DIGITAL - Cotonou, Bénin
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center mt-12"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange-custom text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Send size={18} />
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </section>
  );
}