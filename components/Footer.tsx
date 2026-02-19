
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Simulation of a parallax effect based on scroll.
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative w-full h-[12vh] md:h-[10vh] border-t border-white/5 bg-[#001020]/95 backdrop-blur-3xl z-20 overflow-hidden group/footer-main flex items-center">
      {/* Parallax Background Image Layer */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-5 transition-transform duration-1000 ease-out scale-110 group-hover/footer-main:scale-100"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001020] via-transparent to-[#001020]/60" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 relative z-10 h-full">
        
        {/* Left: Identity & Legal */}
        <div className="flex flex-col items-center md:items-start space-y-1 md:space-y-2">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="relative">
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-gold rounded-full shadow-[0_0_10px_rgba(197,160,89,1)] animate-pulse" />
            </div>
            <span className="text-white/90 text-[7px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-center md:text-left">
              JAT HOLDING • Sovereign Hub
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8">
            <span className="text-white/20 text-[6px] md:text-[8px] font-medium tracking-widest uppercase text-center">
              © 2024 INSTITUTIONNEL
            </span>
            <div className="flex items-center space-x-4 md:space-x-6">
              <FooterLink label="Gouvernance" />
              <FooterLink label="Légal" />
            </div>
          </div>
        </div>
        
        {/* Right: Social & Follow-us - Optimized with vertical stacking and centered alignment */}
        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <span className="text-white/20 text-[6px] md:text-[8px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase group-hover/footer-main:text-gold/40 transition-colors duration-1000">
            SUIVEZ-NOUS
          </span>
          
          <div className="flex items-center justify-center space-x-3 md:space-x-4 bg-white/[0.02] p-1 md:px-3 md:py-1 rounded-full border border-white/5 backdrop-blur-md">
            <SocialIcon 
              label="LinkedIn" 
              glowColor="rgba(0, 119, 181, 0.4)"
              path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
            />
            <SocialIcon 
              label="X" 
              glowColor="rgba(255, 255, 255, 0.2)"
              path="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ label }: { label: string }) => (
  <a 
    href="#" 
    className="text-white/40 hover:text-gold text-[7px] md:text-[9px] font-bold tracking-widest uppercase transition-all duration-500 border-b border-transparent hover:border-gold/30 pb-0.5"
  >
    {label}
  </a>
);

const SocialIcon = ({ label, path, glowColor }: { label: string; path: string; glowColor: string }) => (
  <a 
    href="#" 
    aria-label={label}
    className="relative p-1 md:p-1.5 rounded-full text-white/50 hover:text-gold transition-all duration-700 transform hover:scale-110 active:scale-90 group/icon"
  >
    {/* Glow Effect */}
    <div 
      className="absolute inset-0 rounded-full opacity-0 group-hover/icon:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" 
      style={{ backgroundColor: glowColor }}
    />
    <svg 
      className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-current relative z-10 filter transition-all duration-700" 
      viewBox="0 0 24 24"
    >
      <path d={path} />
    </svg>
  </a>
);

export default Footer;
