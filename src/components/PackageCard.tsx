import React from 'react';
import { Check, CalendarClock } from 'lucide-react';

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
  color: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, price, features, isPopular, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'purple':
        return {
          badge: 'bg-purple-glow/20 text-purple-light',
          button: 'bg-gradient-to-r from-purple-dark to-purple-glow hover:shadow-glow',
          border: 'border-purple-glow/20',
          hover: 'hover:border-purple-glow/40'
        };
      case 'gold':
        return {
          badge: 'bg-gold-glow/20 text-gold-light',
          button: 'bg-gradient-to-r from-gold-dark to-gold-glow hover:shadow-glow-gold',
          border: 'border-gold-glow/20',
          hover: 'hover:border-gold-glow/40'
        };
      case 'teal':
        return {
          badge: 'bg-teal-glow/20 text-teal-light',
          button: 'bg-gradient-to-r from-teal-dark to-teal-glow hover:shadow-glow-teal',
          border: 'border-teal-glow/20',
          hover: 'hover:border-teal-glow/40'
        };
      default:
        return {
          badge: 'bg-purple-glow/20 text-purple-light',
          button: 'bg-gradient-to-r from-purple-dark to-purple-glow hover:shadow-glow',
          border: 'border-purple-glow/20',
          hover: 'hover:border-purple-glow/40'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className={`bg-dark-800/50 backdrop-blur-sm rounded-2xl ${isPopular ? 'transform scale-105' : ''} border ${colors.border} ${colors.hover} overflow-hidden transition-all duration-300 flex flex-col`}>
      {isPopular && (
        <div className={`${colors.badge} py-1 px-3 text-sm font-medium text-center`}>
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8 flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-3xl font-bold text-purple-light mb-6">
          {price}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-teal-glow mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 md:px-8 pb-8">
        <button className={`w-full ${colors.button} text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 hover:scale-105`}>
          <CalendarClock size={18} />
          <span>Book a Call</span>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;