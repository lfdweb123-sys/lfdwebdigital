"use client";
import { motion } from "framer-motion";
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
  GraduationCap
} from "lucide-react";

const ProfileSection = () => {
  const skills = [
    "WordPress", "Shopify", "WordPress SEO", "HTML", "JavaScript", 
    "Google Tag Manager", "Google Ads", "Google My Business", 
    "Google Search Console", "Gestion campagnes Google Ads", "WooCommerce",
    "Python", "React.js", "React Native", "Next.js"
  ];

  const experiences = [
    {
      title: "Consultant SEO des établissements Happy Beauty",
      company: "Happy Beauty Jarry & Happy Beauty Alésia",
      period: "Depuis nov. 2024",
      description: "Optimisation de la visibilité en ligne, stratégies SEO ciblées pour clientèle locale."
    },
    {
      title: "Consultant SEO",
      company: "HappyBeauty",
      period: "Depuis oct. 2024",
      description: "Optimisation du site web pour améliorer le classement sur les moteurs de recherche."
    },
    {
      title: "Gestion de compte Google Ads",
      company: "Lareetz",
      period: "Depuis août 2024",
      description: "Gestion et optimisation des campagnes Google Ads, maximisation du ROI."
    },
    {
      title: "Gestion de compte Google Ads | Merchant Center",
      company: "CINQ TEQ",
      period: "Depuis juin 2024",
      description: "Optimisation des campagnes publicitaires et gestion des produits."
    },
    {
      title: "Consultant SEO",
      company: "FLTMfrance",
      period: "Depuis juin 2024",
      description: "Résolution des problèmes d'indexation via Google Search Console."
    },
    {
      title: "Développeur Web",
      company: "Ggtic Sarl",
      period: "Depuis juin 2023",
      description: "Conception et développement de sites modernes et fonctionnels."
    },
    {
      title: "Gestion du site web",
      company: "Cochic Spa Massage Casablanca",
      period: "Depuis janv. 2023",
      description: "Gestion complète du site web, optimisation contenu et performance."
    }
  ];

  const certifications = [
    { name: "Certificat de fin de formation en référencement SEO", issuer: "Udemy", year: "2018" },
    { name: "Certificat de fin de formation en Développement Web", issuer: "Savplus", year: "2017" }
  ];

  const stats = [
    { label: "Avis positifs", value: "286", icon: Star, color: "text-yellow-500" },
    { label: "Avis négatifs", value: "1", icon: ThumbsUp, color: "text-red-400" },
    { label: "Taux d'acceptation", value: "Bon", icon: CheckCircle, color: "text-green-500" },
    { label: "Taux de completion", value: "Très bon", icon: CheckCheck, color: "text-green-500" },
    { label: "Respect des délais", value: "Top", icon: Clock, color: "text-blue-500" }
  ];

  return (
    <section id="profil" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Profil <span className="text-gold">Professionnel</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          🌟 Créateur de sites web sur WordPress, Shopify ou en code sur-mesure
          <br />
          💼 Développeur web | Consultant SEO | Spécialiste Google Ads & Merchant Center
          <br />
          ✅ +300 clients satisfaits | 8 ans d'expérience
        </p>

        {/* Badge ComeUp */}
        <div className="flex justify-center mb-10">
          <Link 
            href="https://comeup.com/fr/@lfd" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 group"
          >
            <span className="font-medium">Voir mon profil ComeUp Pro</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-yellow-200 shadow-sm text-center hover-scale"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-black">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Compétences */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-gold" />
            Compétences
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 px-4 py-2 rounded-full text-sm font-medium border border-yellow-300 hover:border-gold hover:scale-105 transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Expériences professionnelles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-gold" />
            Expériences professionnelles
          </h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-yellow-100 hover:border-gold transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-black">{exp.title}</h4>
                  <span className="text-xs bg-gold/20 text-black px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-gold mb-1">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diplômes et certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="text-gold" />
            Diplômes et certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-yellow-100 flex items-start gap-3"
              >
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-black">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileSection;