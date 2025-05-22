import React from 'react';
import PackageCard from './PackageCard';

const Packages: React.FC = () => {
  const packages = [
    {
      title: "Starter Care",
      price: "$99/month",
      features: [
        "Platform Updates",
        "Monthly Backups",
        "Basic Troubleshooting",
        "Monthly Report"
      ],
      isPopular: false,
      color: "purple"
    },
    {
      title: "Growth Support",
      price: "$199/month",
      features: [
        "Everything in Starter +",
        "SEO Health Check",
        "Content Uploads (up to 3/mo)",
        "Plugin & App Monitoring"
      ],
      isPopular: true,
      color: "gold"
    },
    {
      title: "Full Coverage",
      price: "Custom Quote",
      features: [
        "Everything in Growth +",
        "Custom Requests (shop edits, pages)",
        "Priority Support",
        "Product Uploads (up to 10/mo)"
      ],
      isPopular: false,
      color: "teal"
    }
  ];

  return (
    <section id="packages" className="py-20 px-4 md:px-8 lg:px-16 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Packages for Peace of Mind</h2>
          <p className="text-xl text-purple-light">Choose the level of support that's right for your business</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;