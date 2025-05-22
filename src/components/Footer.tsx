import React from 'react';
import { Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-12 pb-6 px-4 md:px-8 lg:px-16 border-t border-purple-glow/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-light">Destiny O'Connor</h3>
            <p className="text-gray-300 mb-4">Website management for small businesses and nonprofits.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-light hover:text-purple-glow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-purple-light hover:text-purple-glow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-purple-light hover:text-purple-glow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-light">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-glow" />
                <a href="mailto:hello@destinyoconnor.com" className="text-gray-300 hover:text-purple-light transition-colors">
                  hello@destinyoconnor.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-purple-glow" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-purple-light transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-light">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#packages" className="text-gray-300 hover:text-purple-light transition-colors">Packages</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-light transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-light transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-light transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-glow/20 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Destiny O'Connor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;