import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          Contactez-<span className="text-gold">moi</span>
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          Une question ? Un projet ? Discutons-en directement.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Tel */}
          <a href="tel:+2290162758703" className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-200 shadow-md hover-scale flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <Phone size={28} className="text-gold" />
            </div>
            <span className="text-2xl font-bold text-black">+229 01 62 75 87 03</span>
            <span className="text-sm text-gray-500">Appel direct</span>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/2290143260596" target="_blank" className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-200 shadow-md hover-scale flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
            </div>
            <span className="text-2xl font-bold text-black">+229 01 43 26 05 96</span>
            <span className="text-sm text-gray-500">WhatsApp</span>
          </a>

          {/* Email */}
          <a href="mailto:contact@lfddigital.com" className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-200 shadow-md hover-scale flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
              <Mail size={28} className="text-gold" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-black break-all">contact@lfddigital.com</span>
            <span className="text-sm text-gray-500">Réponse sous 24h</span>
          </a>
        </div>

        {/* Google Maps */}
        <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15856.519318512786!2d2.364916!3d6.505245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024af14bcc97137%3A0xa9403f444b4af583!2sLFD%20WEB%20DIGITAL%20-Developpeur%20web!5e0!3m2!1sfr!2sbj!4v1776175669322!5m2!1sfr!2sbj" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}