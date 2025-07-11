
import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = ['Tech-Driven', 'Design-Led', 'Data-Centric', 'Future-Ready'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-dark to-brand-black"></div>
        {/* Particle Animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-brand-cyan rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-wide relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="heading-1 text-brand-white mb-4">
              Empowering Businesses.
            </h1>
            <h1 className="heading-1 text-gradient glow-effect">
              Building the Future.
            </h1>
          </div>

          {/* Rotating Text */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl md:text-3xl font-semibold text-brand-gray">
              We are{' '}
              <span className="text-brand-cyan font-bold">
                {rotatingTexts[currentText]}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="body-large text-brand-gray max-w-3xl mx-auto">
              Premium SaaS agency delivering full-stack solutions across Tech, Design, Marketing, and Finance. 
              We transform ambitious ideas into digital reality for businesses worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <a href="#contact" className="btn-primary group">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#services" className="btn-secondary group">
              <Play className="mr-2 w-5 h-5" />
              See What We Do
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-cyan">150+</div>
              <div className="text-brand-gray mt-2">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-cyan">10+</div>
              <div className="text-brand-gray mt-2">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-cyan">24/7</div>
              <div className="text-brand-gray mt-2">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
