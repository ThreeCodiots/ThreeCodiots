
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black/95 border-t border-brand-cyan/20">
      <div className="container-wide">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="text-3xl font-black text-brand-cyan">
                  {"{"}3Codiots{"}"}
                </div>
              </div>
              <p className="text-brand-gray mb-6 leading-relaxed max-w-md">
                Premium SaaS agency delivering full-stack solutions across Tech, Design, Marketing, and Finance. 
                Empowering businesses globally with innovative digital solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-brand-dark hover:bg-gradient-brand rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-brand-cyan group-hover:text-brand-black transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-brand-dark hover:bg-gradient-brand rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-brand-cyan group-hover:text-brand-black transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-brand-dark hover:bg-gradient-brand rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-brand-cyan group-hover:text-brand-black transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-brand-white font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-brand-gray hover:text-brand-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-brand-white font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span className="text-brand-gray text-sm">hello@3codiots.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span className="text-brand-gray text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span className="text-brand-gray text-sm">Global Remote Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-brand-dark">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-brand-white font-bold mb-2">Stay Updated</h3>
              <p className="text-brand-gray text-sm">Get growth insights & strategy tips delivered to your inbox.</p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-brand-dark border border-brand-cyan/20 rounded-l-lg text-brand-white placeholder-brand-gray focus:outline-none focus:border-brand-cyan transition-colors duration-300"
              />
              <button className="px-6 py-3 bg-gradient-brand text-brand-black font-semibold rounded-r-lg hover:shadow-lg hover:shadow-brand-cyan/50 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-brand-dark">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-brand-gray">
            <div>
              © {currentYear} 3Codiots. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-cyan transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-brand-cyan transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-brand-cyan transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
