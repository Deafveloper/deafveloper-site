import React, { useState } from 'react';
import { Send, CalendarClock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    platform: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      businessType: '',
      platform: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-dark-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to relax while I manage your site?</h2>
          <p className="text-xl text-purple-light">Let's chat about how I can help keep your website running smoothly</p>
        </div>
        
        <div className="bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-purple-glow/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-purple-glow/20 text-white placeholder-gray-400 focus:border-purple-glow focus:ring-2 focus:ring-purple-glow/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-purple-glow/20 text-white placeholder-gray-400 focus:border-purple-glow focus:ring-2 focus:ring-purple-glow/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-1">Business Type</label>
                <input
                  type="text"
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-purple-glow/20 text-white placeholder-gray-400 focus:border-purple-glow focus:ring-2 focus:ring-purple-glow/20 transition-all"
                  placeholder="E.g., Retail, Service, Nonprofit"
                />
              </div>
              
              <div>
                <label htmlFor="platform" className="block text-sm font-medium text-gray-300 mb-1">Website Platform</label>
                <select
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-purple-glow/20 text-white focus:border-purple-glow focus:ring-2 focus:ring-purple-glow/20 transition-all"
                >
                  <option value="">Select a platform</option>
                  <option value="Shopify">Shopify</option>
                  <option value="Wix">Wix</option>
                  <option value="WordPress">WordPress</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-purple-glow/20 text-white placeholder-gray-400 focus:border-purple-glow focus:ring-2 focus:ring-purple-glow/20 transition-all"
                placeholder="Tell me about your website needs..."
              ></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-dark to-purple-glow text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105 flex items-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
              
              <button
                type="button"
                className="bg-dark-700 text-purple-light border border-purple-glow/20 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:border-purple-glow/40 hover:shadow-glow flex items-center space-x-2"
              >
                <CalendarClock size={18} />
                <span>Schedule a Call</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;