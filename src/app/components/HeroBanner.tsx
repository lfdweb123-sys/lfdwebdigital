import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-gold text-gold" />)}
            </div>
            <span className="text-sm font-medium text-gray-600">5,0 (50 avis)</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Développeur Web & Mobile{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-gold">
              Pro
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            Consultant SEO, Spécialiste Google Ads & Merchant Center. 
            <br />
            <span className="font-semibold text-black">+300 clients satisfaits | 8 ans d'expérience</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/contact" className="btn-primary flex items-center gap-2">
              Discuter de votre projet <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
              Voir les services
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-yellow-300">WordPress</span>
            <span className="bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-yellow-300">Shopify</span>
            <span className="bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-yellow-300">React / Next.js</span>
            <span className="bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-yellow-300">Python</span>
          </div>
        </div>

        {/* Image à droite */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-gold p-2 bg-white shadow-2xl animate-float">
            {/* 
              IMPORTANT : Placez votre photo dans /public/images/votre-photo-pro.jpg 
              et ajustez le chemin ci-dessous 
            */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/votre-photo-pro.jpg" 
                alt="LFD WEB Digital - Développeur wEB et Mobile"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;