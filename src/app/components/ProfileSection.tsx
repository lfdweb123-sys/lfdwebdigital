"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingCart, Search, Target, Store } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { 
  CheckCircle, 
  Star, 
  ThumbsUp, 
  Clock, 
  CheckCheck,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Globe,
  Smartphone
} from "lucide-react";

const ProfileSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const skills = [
    { name: "WordPress", icon: <Globe size={14} /> },
    { name: "Shopify", icon: <ShoppingCart size={14} /> },
    { name: "HTML/CSS/JS", icon: <Code size={14} /> },
    { name: "React.js", icon: <Code size={14} /> },
    { name: "Next.js", icon: <Code size={14} /> },
    { name: "React Native", icon: <Smartphone size={14} /> },
    { name: "Python", icon: <Code size={14} /> },
    { name: "Node.js", icon: <Code size={14} /> },
    { name: "PHP", icon: <Code size={14} /> },
    { name: "SEO", icon: <Search size={14} /> },
    { name: "Google Ads", icon: <Target size={14} /> },
    { name: "Google Merchant", icon: <Store size={14} /> },
    { name: "WooCommerce", icon: <ShoppingCart size={14} /> },
    { name: "Elementor", icon: <Palette size={14} /> }
  ];

  const experiences = [
    {
      title: "Consultant SEO",
      company: "Happy Beauty Jarry & Alésia",
      period: "Depuis nov. 2024",
      description: "Optimisation visibilité en ligne, stratégies SEO ciblées."
    },
    {
      title: "Gestion Google Ads",
      company: "Lareetz",
      period: "Depuis août 2024",
      description: "Gestion et optimisation campagnes, maximisation ROI."
    },
    {
      title: "Gestion Merchant Center",
      company: "CINQ TEQ",
      period: "Depuis juin 2024",
      description: "Optimisation campagnes et gestion produits."
    },
    {
      title: "Développeur Web",
      company: "Ggtic Sarl",
      period: "Depuis juin 2023",
      description: "Conception sites modernes et fonctionnels."
    },
    {
      title: "Gestion site web",
      company: "Cochic Spa",
      period: "Depuis janv. 2023",
      description: "Gestion complète, optimisation contenu."
    }
  ];

  const certifications = [
    { name: "Référencement SEO", issuer: "Udemy", year: "2018", icon: <Search size={16} /> },
    { name: "Développement Web", issuer: "Savplus", year: "2017", icon: <Code size={16} /> }
  ];

  const stats = [
    { label: "Avis positifs", value: "286", icon: Star, color: "text-yellow-500", bg: "bg-yellow-50" },
    { label: "Taux acceptation", value: "Bon", icon: CheckCircle, color: "text-green-500", bg: "bg-green-50" },
    { label: "Respect délais", value: "Top", icon: Clock, color: "text-blue-500", bg: "bg-blue-50" }
  ];

  // Import manquant
  const { ShoppingCart, Search, Target, Store: StoreIcon } = require("lucide-react");

  return (
    <section ref={containerRef} id="profil" className="container mx-auto px-4 py-20 overflow-hidden">
      <motion.div style={{ y }}>
        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Profil <span className="text-gold">Professionnel</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            🌟 Créateur de sites web sur WordPress, Shopify ou en code sur-mesure
            <br />
            💼 Développeur web | Consultant SEO | Spécialiste Google Ads & Merchant Center
            <br />
            <span className="font-semibold text-black">✅ +300 clients satisfaits | 8 ans d'expérience</span>
          </p>
          
          <Link 
            href="https://comeup.com/fr/@lfd" 
            target="_blank"
            className="inline-flex items-center gap-2 mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 group"
          >
            <span>Voir mon profil ComeUp Pro</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-yellow-200 shadow-sm text-center hover-scale"
            >
              <div className={`w-10 h-10 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-xl font-bold text-black">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Compétences - Style Réalisations */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-gold" />
            <span className="border-b-2 border-gold">Compétences</span>
          </h3>
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-yellow-200 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-50/50 to-orange-50/50 px-4 py-3 rounded-xl border border-yellow-200 hover:border-gold hover:shadow-md transition-all duration-200"
                >
                  <span className="text-gold">{skill.icon}</span>
                  <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expériences - Style Réalisations */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-gold" />
            <span className="border-b-2 border-gold">Expériences professionnelles</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-yellow-200 hover:border-gold hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-black group-hover:text-gold transition-colors">{exp.title}</h4>
                  <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full border border-gold/30">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">{exp.company}</p>
                <p className="text-xs text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications - Style Réalisations */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-gold" />
            <span className="border-b-2 border-gold">Diplômes et certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-yellow-200 hover:border-gold hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-orange-custom/20 rounded-xl flex items-center justify-center group-hover:from-gold/30 group-hover:to-orange-custom/30 transition-colors">
                  <span className="text-gold">{cert.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-black group-hover:text-gold transition-colors">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;