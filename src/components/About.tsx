import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
        <p className="text-xl text-purple-light mb-10 leading-relaxed">
          Hi, I'm Destiny. I help small business owners like you keep your websites updated, secure, and running fast — whether you're using Shopify, Wix, or WordPress.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="platform-icon group">
            <img 
              src="https://cdn.worldvectorlogo.com/logos/shopify.svg" 
              alt="Shopify" 
              className="h-12 md:h-16 transition-all duration-300 group-hover:scale-110 brightness-200"
            />
            <p className="mt-2 font-medium text-gray-300">Shopify</p>
          </div>
          
          <div className="platform-icon group">
            <img 
              src="https://cdn.worldvectorlogo.com/logos/wix-2.svg" 
              alt="Wix" 
              className="h-12 md:h-16 transition-all duration-300 group-hover:scale-110 brightness-200" 
            />
            <p className="mt-2 font-medium text-gray-300">Wix</p>
          </div>
          
          <div className="platform-icon group">
            <img 
              src="https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" 
              alt="WordPress" 
              className="h-12 md:h-16 transition-all duration-300 group-hover:scale-110 brightness-200" 
            />
            <p className="mt-2 font-medium text-gray-300">WordPress</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;