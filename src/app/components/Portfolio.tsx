"use client";
import { motion } from "framer-motion";
import { 
  Store, 
  ShieldCheck, 
  ShoppingCart, 
  Smartphone,
  Search,
  CreditCard,
  Sparkles,
  Globe,
  Zap,
  Bot,
  MessageCircle
} from "lucide-react";

const Portfolio = () => {
  const realisations = [
    {
      title: "Déblocage Google Merchant Center",
      description: "Intervention réussie pour le déblocage d'un compte Google Merchant Center suspendu pour 'déclaration trompeuse'. Analyse approfondie, correction des non-conformités et réactivation du compte.",
      icon: ShieldCheck,
      tags: ["Google Merchant Center", "Conformité", "Shopping"]
    },
    {
      title: "Plugin MbiyoPay pour WooCommerce",
      description: "Plugin permettant d'intégrer la solution de paiement MbiyoPay à votre boutique WordPress/WooCommerce. Paiement via Mobile Money et autres moyens.",
      icon: CreditCard,
      tags: ["WordPress", "WooCommerce", "Paiement"]
    },
    {
      title: "Atlantx Boat",
      description: "Site vitrine moderne et responsive pour présenter les services de location de bateaux. Design personnalisé mettant en valeur les bateaux et paysages marins.",
      icon: Globe,
      tags: ["WordPress", "Elementor", "Responsive"]
    },
    {
      title: "Mosquée Al-Mutiyy",
      description: "Site vitrine avec horaires de prières en temps réel, section d'apprentissage (Coran & Arabe), annonces et actualités de la communauté.",
      icon: Sparkles,
      tags: ["WordPress", "Communauté", "Responsive"]
    },
    {
      title: "Plateforme Palettes Pro",
      description: "Site moderne dédié à l'achat, la vente et la mise en relation autour des palettes. Catalogue clair et navigation intuitive.",
      icon: Store,
      tags: ["E-commerce", "B2B", "Logistique"]
    },
    {
      title: "Hermès aux Cinq Talents",
      description: "Site vitrine pour entreprise spécialisée dans les recharges et ventes de cartes prépayées. Interface moderne intégrée à WhatsApp.",
      icon: Zap,
      tags: ["Vitrine", "WhatsApp", "UX/UI"]
    },
    {
      title: "Migration le9.ma vers le9-spa.com",
      description: "Refonte complète avec nouvelle architecture, meilleure performance et expérience utilisateur optimisée.",
      icon: Globe,
      tags: ["Migration", "Performance", "SEO"]
    },
    {
      title: "Bouton Lire plus / Lire moins Shopify",
      description: "Développement et intégration d'un bouton personnalisé pour afficher/réduire les descriptions de collections sur Shopify.",
      icon: ShoppingCart,
      tags: ["Shopify", "Custom Code", "UX"]
    },
    {
      title: "Jennergy Coaching",
      description: "Plateforme dédiée au coaching sportif personnalisé pour Wellness Training by J.",
      icon: Sparkles,
      tags: ["WordPress", "Coaching", "Responsive"]
    },
    {
      title: "Déblocage Jayne Shoes",
      description: "Réactivation réussie du compte Merchant Center avec mise en conformité des flux produits et optimisation des données.",
      icon: ShieldCheck,
      tags: ["Merchant Center", "Google Shopping"]
    },
    {
      title: "Sécurisation sites pour Google Ads",
      description: "Nettoyage et sécurisation de sites compromis, résolution des suspensions d'annonces pour non-conformité.",
      icon: ShieldCheck,
      tags: ["Sécurité", "Google Ads", "Conformité"]
    },
    {
      title: "Sections personnalisées Shopify",
      description: "Création de sections sur mesure pour améliorer l'apparence, ajouter des fonctionnalités et optimiser l'expérience utilisateur.",
      icon: ShoppingCart,
      tags: ["Shopify", "Liquid", "Custom"]
    },
    {
      title: "SEO WordPress & Shopify",
      description: "Optimisation du contenu, structure et performances techniques pour attirer plus de trafic organique et augmenter les ventes.",
      icon: Search,
      tags: ["SEO", "WordPress", "Shopify"]
    },
    {
      title: "Backlinks de qualité",
      description: "Stratégie sur mesure de création de backlinks pour améliorer le référencement naturel et booster le positionnement.",
      icon: Globe,
      tags: ["SEO", "Backlinks", "Link Building"]
    }
  ];

  return (
    <section id="realisations" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Réalisations <span className="text-gold">Récentes</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Découvrez quelques-uns de mes projets et interventions réussies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realisations.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-yellow-200 shadow-md hover-scale group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-gold/30 group-hover:to-orange-custom/30 transition-all">
                <project.icon className="w-6 h-6 text-gold" />
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-black group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs bg-yellow-50 px-2 py-1 rounded-full text-gray-700 border border-yellow-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge de confiance */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-gradient-to-r from-yellow-50 to-white px-8 py-4 rounded-full border border-gold/50">
            <Bot className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">✨ Création d'agents vocaux IA</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <MessageCircle className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">📱 Applications PWA & Flutter</span>
            <span className="w-1 h-1 bg-gold rounded-full"></span>
            <Zap className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">🚀 Automatisation avec IA</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;