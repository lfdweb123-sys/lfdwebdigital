import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-yellow-200 shadow-md hover-scale cursor-pointer group">
      <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feat, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;