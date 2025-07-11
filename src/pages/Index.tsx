
import { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Add smooth scroll behavior and intersection observer for animations
  useEffect(() => {
    if (!isLoading) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, observerOptions);

      // Observe all animate-on-scroll elements
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Sticky CTA Button */}
      <div className="fixed bottom-8 right-8 z-30">
        <a
          href="#contact"
          className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-brand-cyan/50 transition-all duration-300 hover:scale-110 group"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💬</span>
        </a>
      </div>
    </div>
  );
};

export default Index;
