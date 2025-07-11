
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-brand-white mb-6">Let's Build Something Legendary</h2>
          <p className="body-large text-brand-gray max-w-3xl mx-auto">
            Ready to transform your business? Our team responds within 24 hours. 
            Let's discuss how we can accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-brand-white mb-6">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-brand-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-brand-black/50 border border-brand-cyan/20 rounded-lg text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-cyan transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-brand-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-brand-black/50 border border-brand-cyan/20 rounded-lg text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-cyan transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-brand-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-black/50 border border-brand-cyan/20 rounded-lg text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-cyan transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-brand-white font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-black/50 border border-brand-cyan/20 rounded-lg text-brand-white focus:outline-none focus:border-brand-cyan transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-brand-white font-medium mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-black/50 border border-brand-cyan/20 rounded-lg text-brand-white focus:outline-none focus:border-brand-cyan transition-colors duration-300"
                >
                  <option value="">Select primary service</option>
                  <option value="tech">Tech & Development</option>
                  <option value="design">Design & Branding</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="finance">Finance & Compliance</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-brand-white font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-black/50 border border-brand-cyan/20 rounded-lg text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-cyan transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-brand-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <div className="text-brand-white font-semibold mb-1">Email Us</div>
                    <div className="text-brand-gray">hello@3codiots.com</div>
                    <div className="text-brand-gray">Response within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <div className="text-brand-white font-semibold mb-1">Call Direct</div>
                    <div className="text-brand-gray">+1 (555) 123-4567</div>
                    <div className="text-brand-gray">Mon-Fri, 9AM-6PM EST</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <div className="text-brand-white font-semibold mb-1">Global Presence</div>
                    <div className="text-brand-gray">Remote-first team</div>
                    <div className="text-brand-gray">Serving clients worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card-glass p-8">
              <h3 className="text-xl font-bold text-brand-white mb-4">Why Choose Us</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray">Response Time</span>
                  <span className="text-brand-cyan font-semibold">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray">Project Success Rate</span>
                  <span className="text-brand-cyan font-semibold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray">Countries Served</span>
                  <span className="text-brand-cyan font-semibold">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-gray">Client Retention</span>
                  <span className="text-brand-cyan font-semibold">95%</span>
                </div>
              </div>
            </div>

            {/* Service Guarantee */}
            <div className="card-glass p-8 border-brand-cyan/50">
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-brand-white mb-2">Service Guarantee</h3>
                <p className="text-brand-gray text-sm">
                  100% satisfaction guaranteed. If you're not happy with our work, we'll make it right or provide a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
