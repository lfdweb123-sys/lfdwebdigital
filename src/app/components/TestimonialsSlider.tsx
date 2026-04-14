"use client";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: "Julien Roussel",
      text: "Salut je viens de valider le paiement. Merci encore pour ton super boulot sur le site et tes conseils. Le rendu de la page de connexion est exactement ce que j'imaginais pour l'image de ma marque. C'est un plaisir de bosser avec quelqu'un d'aussi réactif et pro. je te laisse un avis 5 étoiles bien mérité.",
      rating: 5
    },
    {
      name: "Luc Lightning",
      text: "parfait come dhab",
      rating: 5
    },
    {
      name: "Coeur et Conscience",
      text: "Très satisfait de cette collaboration. Travail sérieux, réalisé dans les délais et avec beaucoup de professionnalisme. Personne très disponible et agréable dans les échanges. Je recommande sans hésitation.",
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
    },
    {
      name: "Krediet Hitro",
      text: "Bon travail",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-black">
          Témoignages <span className="text-gold">Clients</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Ce que mes clients disent de mon travail
        </p>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slider principal */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-yellow-200 shadow-xl"
            >
              <Quote className="w-10 h-10 text-gold/30 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonials[currentIndex].rating ? 'fill-gold text-gold' : 'text-gray-300'} 
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-orange-custom rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">Client vérifié</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Boutons navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-white border border-yellow-200 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-white border border-yellow-200 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 shadow-md"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicateurs */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-gold' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Note globale */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gold shadow-sm">
            <span className="text-2xl font-bold text-black">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-gray-600">Basé sur 50+ avis</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;