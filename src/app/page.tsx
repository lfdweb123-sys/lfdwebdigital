import HeroBanner from "./components/HeroBanner";
import ServiceCard from "./components/ServiceCard";
import ProfileSection from "./components/ProfileSection";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";
import { Code, Puzzle } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroBanner />

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          Mes <span className="text-gold">Services Premium</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Des solutions sur mesure pour booster votre présence digitale
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ServiceCard 
            icon={<Code size={32} className="text-gold" />}
            title="API REST professionnelle sur mesure"
            description="Backend fiable pour connecter votre application, gérer vos données ou automatiser des tâches. Node.js, Python, PHP."
            features={["Performante et optimisée", "Code propre et maintenable", "Structure évolutive"]}
          />
          <ServiceCard 
            icon={<Puzzle size={32} className="text-gold" />}
            title="Extension Chrome sur mesure"
            description="Automatisation, scraping, ajout de fonctionnalités. Outils business ou marketing selon votre idée."
            features={["Interface simple et efficace", "Compatible Chrome Web Store", "Publication sur le store"]}
          />
        </div>
      </section>

      <ProfileSection />
      <Portfolio />
      <Testimonials />
    </>
  );
}