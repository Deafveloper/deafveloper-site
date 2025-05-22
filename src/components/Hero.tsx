import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 flex flex-col justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Stress-Free Website Management
            </h1>
            <p className="text-xl md:text-2xl text-purple-light">
              I keep your site running smooth so you can focus on your business.
            </p>
            <button
              onClick={scrollToPackages}
              className="bg-gradient-to-r from-purple-dark to-purple-glow text-white font-medium py-3 px-8 rounded-full inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              <span>View Packages</span>
              <ArrowDown size={18} />
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Destiny managing a website"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;