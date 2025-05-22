import React from 'react';
import { Wrench, HelpCircle, Share2, Brain } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-glow/20 hover:border-purple-glow/40 transition-all duration-300 hover:shadow-glow group">
      <div className="text-purple-glow mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const ExpressServices: React.FC = () => {
  const services = [
    {
      icon: <Wrench size={32} />,
      title: "Website Fix",
      description: "Minor design or tech issue? I'll fix it fast."
    },
    {
      icon: <HelpCircle size={32} />,
      title: "IT Help",
      description: "Help with email, hosting, DNS, or tech headaches."
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media Upload",
      description: "One-time content or announcement upload."
    },
    {
      icon: <Brain size={32} />,
      title: "Consulting Call",
      description: "Ask me anything about your website or platform."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a One-Time Fix?</h2>
          <p className="text-xl text-purple-light">Quick support without long-term commitment.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-dark to-purple-glow text-white font-medium py-3 px-8 rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            Request Help Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpressServices;