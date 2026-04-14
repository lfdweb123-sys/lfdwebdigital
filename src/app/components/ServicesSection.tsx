"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { 
  Code, 
  Puzzle, 
  ShieldCheck, 
  ShoppingCart, 
  Store, 
  BadgeCheck,
  Search,
  Rocket,
  Wrench,
  Globe,
  CreditCard,
  Gauge,
  Bug,
  Settings,
  Link2,
  Star,
  BarChart,
  Smartphone,
  Lock,
  Workflow,
  TrendingUp,
  Target,
  Palette,
  Box,
  Truck,
  FileText,
  Languages,
  Captcha,
  LineChart,
  ShoppingBag,
  Shield,
  Layers,
  GraduationCap,
  Wand2,
  Wind,
  Mic,
  Bot,
  PuzzleIcon,
  SmartphoneCharging,
  Repeat,
  Blocks
} from "lucide-react";

const ServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  // Services principaux (API et Extension) - en grand
  const mainServices = [
    {
      icon: <Code size={28} />,
      title: "API REST professionnelle sur mesure",
      description: "Backend fiable pour connecter votre application, gérer vos données ou automatiser des tâches. Node.js, Python, PHP.",
      features: ["Performante et optimisée", "Code propre et maintenable", "Structure évolutive"],
      price: "Sur devis"
    },
    {
      icon: <Puzzle size={28} />,
      title: "Extension Chrome sur mesure",
      description: "Automatisation, scraping, ajout de fonctionnalités. Outils business ou marketing selon votre idée.",
      features: ["Interface simple et efficace", "Compatible Chrome Web Store", "Publication sur le store"],
      price: "Sur devis"
    }
  ];

  // Tous les autres services ComeUp
  const allServices = [
    { icon: <ShieldCheck size={20} />, title: "Débloquer compte Google Ads / Merchant Center" },
    { icon: <ShoppingCart size={20} />, title: "Créer boutique Shopify clé en main" },
    { icon: <Store size={20} />, title: "Créer boutique WooCommerce avec WordPress" },
    { icon: <Globe size={20} />, title: "Créer site vitrine WordPress de A à Z" },
    { icon: <Star size={20} />, title: "Ajouter badge cinq étoiles sur site web" },
    { icon: <BadgeCheck size={20} />, title: "Ajouter badge de confiance Shopify" },
    { icon: <Globe size={20} />, title: "Create showcase site with WordPress CMS" },
    { icon: <Gauge size={20} />, title: "Accélérer vitesse Shopify/WordPress" },
    { icon: <Code size={20} />, title: "Coder une section sur Shopify" },
    { icon: <Lock size={20} />, title: "Sécuriser/sauvegarder site WordPress" },
    { icon: <ShieldCheck size={20} />, title: "Unblock Google Ads / Merchant Center" },
    { icon: <Search size={20} />, title: "Optimiser SEO WordPress / Shopify" },
    { icon: <Search size={20} />, title: "Optimize SEO of WordPress / Shopify" },
    { icon: <Bug size={20} />, title: "Corriger problème / bug Shopify" },
    { icon: <Code size={20} />, title: "Réaliser site vitrine HTML CSS JS PHP MySQL" },
    { icon: <Link2 size={20} />, title: "Configurer et relier nom de domaine Shopify" },
    { icon: <Star size={20} />, title: "Add five star badge to website" },
    { icon: <BarChart size={20} />, title: "Install Google Analytics & Search Console" },
    { icon: <Bug size={20} />, title: "Fix problem / bug on Shopify store" },
    { icon: <Link2 size={20} />, title: "Configure and link domain name to Shopify" },
    { icon: <Smartphone size={20} />, title: "Intégrer publications réseaux sociaux" },
    { icon: <Code size={20} />, title: "Code a section on Shopify store" },
    { icon: <Languages size={20} />, title: "Traduire site Shopify/WordPress" },
    { icon: <Captcha size={20} />, title: "Installer Google reCAPTCHA" },
    { icon: <BarChart size={20} />, title: "Installer Google Analytics & Search Console" },
    { icon: <Store size={20} />, title: "Create WooCommerce store with WordPress" },
    { icon: <BadgeCheck size={20} />, title: "Add trust badge to Shopify store" },
    { icon: <Workflow size={20} />, title: "Concevoir tunnel de vente WordPress/Systeme.io" },
    { icon: <TrendingUp size={20} />, title: "Classer site première page Google" },
    { icon: <Target size={20} />, title: "Créer et optimiser campagnes Google Ads" },
    { icon: <Palette size={20} />, title: "Concevoir Site Vitrine WordPress et DIVI" },
    { icon: <Globe size={20} />, title: "Créer site Web Pro avec Wix" },
    { icon: <Truck size={20} />, title: "Migrer site web vers autre hébergeur" },
    { icon: <Smartphone size={20} />, title: "Créer application PWA rapide et efficace" },
    { icon: <Target size={20} />, title: "Créer campagne TikTok Ads" },
    { icon: <Settings size={20} />, title: "Intégrer n'importe quelle API" },
    { icon: <Bot size={20} />, title: "Automatiser business avec l'IA" },
    { icon: <Mic size={20} />, title: "Créer agent vocal IA intelligent" },
    { icon: <PuzzleIcon size={20} />, title: "Créer extension / plugin WordPress personnalisé" },
    { icon: <SmartphoneCharging size={20} />, title: "Créer application Android / iOS avec Flutter" },
    { icon: <Target size={20} />, title: "Créer campagne Facebook Ads" },
    { icon: <Repeat size={20} />, title: "Convertir site web en application mobile Android" }
  ];

  return (
    <section ref={containerRef} id="services" className="container mx-auto px-4 py-20 overflow-hidden">
      {/* Titre avec effet parallaxe */}
      <motion.div style={{ y, opacity }} className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black"
        >
          Mes <span className="text-gold">services premium</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Des solutions sur mesure pour booster votre présence digitale
        </motion.p>
        
        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">341</div>
            <div className="text-sm text-gray-500">Ventes au total</div>
          </div>
          <div className="w-px bg-yellow-200"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold">2022</div>
            <div className="text-sm text-gray-500">Vendeur depuis</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services principaux (2 grands) */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {mainServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-orange-custom/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-yellow-200 shadow-lg h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-orange-custom rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{service.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <span className="text-gray-700">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
                <span className="text-sm text-gray-500">À partir de</span>
                <span className="text-xl font-bold text-black">{service.price}</span>
              </div>

              <Link 
                href="/contact" 
                className="mt-4 btn-primary w-full text-center flex items-center justify-center gap-2"
              >
                Contacter maintenant
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tous les autres services en grille compacte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-black">
          <span className="border-b-4 border-gold pb-2">Tous mes services</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (index % 8) * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-yellow-100 hover:border-gold hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-gold/20 group-hover:to-orange-custom/20 transition-colors">
                  <div className="text-gold w-4 h-4">
                    {service.icon}
                  </div>
                </div>
                <p className="text-xs font-medium text-gray-800 group-hover:text-black transition-colors line-clamp-2">
                  {service.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;