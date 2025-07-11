
import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) {
    return (
      <div className="fixed inset-0 bg-brand-black z-50 flex items-center justify-center opacity-0 transition-opacity duration-500 pointer-events-none">
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-brand-black z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="relative">
            <div className="text-8xl font-black text-brand-cyan animate-loading-spin">
              {"{"}3{"}"}
            </div>
            <div className="absolute inset-0 text-8xl font-black text-brand-cyan opacity-50 animate-glow-pulse">
              {"{"}3{"}"}
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-brand-white text-xl font-medium">
          Launching 3Codiots<span className="loading-dots"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
