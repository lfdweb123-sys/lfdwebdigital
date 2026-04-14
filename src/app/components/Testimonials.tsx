"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Julien Roussel",
      text: "Salut je viens de valider le paiement. Merci encore pour ton super boulot sur le site et tes conseils. Le rendu de la page de connexion est exactement ce que j'imaginais pour l'image de ma marque. C'est un plaisir de bosser avec quelqu'un d'aussi réactif et pro. je te laisse un avis 5 étoiles bien mérité. On se recontacte très vite.",
      rating: 5
    },
    {
      name: "Luc Lightning",
      text: "parfait come dhab",
      rating: 5
    },
    {
      name: "Luc Lightning",
      text: "AU TOP",
      rating: 5
    },
    {
      name: "Coeur et Conscience",
      text: "Très satisfait de cette collaboration. Travail sérieux, réalisé dans les délais et avec beaucoup de professionnalisme. Personne très disponible et agréable dans les échanges. Je recommande sans hésitation.",
      rating: 5
    },
    {
      name: "Bruno Andrade",
      text: "Top",
      rating: 5
    },
    {
      name: "Client satisfait",
      text: "Tooop. Il a été très rapide pour gérer mon problème je recommande",
      rating: 5
    },
    {
      name: "Luc Lightning",
      text: "toujours au top",
      rating: 5
    },
    {
      name: "Krediet Hitro",
      text: "Bon travail",
      rating: 5
    },
    {
      name: "Bruno Andrade",
      text: "Vendeur Top 100%",
      rating: 5
    },
    {
      name: "Majd Saf",
      text: "Merci infiniment pour votre professionnalisme, votre réactivité et votre disponibilité. Je n'hésiterai pas à revenir vers vous.",
      rating: 5
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Témoignages <span className="text-gold">Clients</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Ce que mes clients disent de mon travail
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-yellow-200 shadow-md hover-scale group"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-3 group-hover:text-gold/50 transition-colors" />
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < testimonial.rating ? 'fill-gold text-gold' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 line-clamp-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-orange-custom rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">Client vérifié</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note globale */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gold shadow-sm">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold text-black">5.0</span>
              <span className="text-gray-500">/5</span>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-gray-600">Basé sur 50+ avis</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;