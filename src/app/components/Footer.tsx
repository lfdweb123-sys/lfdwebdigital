import Link from "next/link";
import { Code, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-yellow-200 bg-white/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-black">
              LFD<span className="text-gold">.</span>Digital
            </Link>
            <p className="text-sm text-gray-600 mt-1">
              Développeur Web & Mobile | SEO | Google Ads
            </p>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} LFD Digital. Tous droits réservés.
          </div>
          <div className="flex gap-4">
            <span className="text-xs bg-black/5 px-3 py-1 rounded-full">React.js</span>
            <span className="text-xs bg-black/5 px-3 py-1 rounded-full">Next.js</span>
            <span className="text-xs bg-black/5 px-3 py-1 rounded-full">React Native</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;