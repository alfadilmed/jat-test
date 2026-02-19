
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  scrollToSection: (index: number) => void;
  activeSection: number;
  onOpenAssistant: () => void;
  sectionCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, activeSection, onOpenAssistant, sectionCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Synchronisation de la barre de progression avec le scroll horizontal du container principal
  useEffect(() => {
    const container = document.querySelector('.snap-container');
    if (!container) return;

    const updateProgress = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', updateProgress);
    return () => container.removeEventListener('scroll', updateProgress);
  }, []);

  // Structure des sections pour la navigation
  // 0: Hero, 1: Vision, 2: Ecosystem, 3-14: Poles, 15: Trajectory, 16: Governance, 17: Careers, 18: Contact
  const menuItems = [
    { label: 'Accueil', index: 0, range: [0, 0] },
    { label: 'Le groupe', index: 1, range: [1, 1] },
    { label: 'Écosystème', index: 2, range: [2, 14] }, // Inclut l'écosystème et tous les détails de pôles
    { label: 'Stratégie & Croissance', index: 15, range: [15, 15] },
    { label: 'Gouvernance', index: 16, range: [16, 16] },
    { label: 'Carrières', index: 17, range: [17, 17] },
    { label: 'Contact', index: 18, range: [18, 18] },
  ];

  const isItemActive = (range: number[]) => {
    return activeSection >= range[0] && activeSection <= range[1];
  };

  const handleNavClick = (index: number) => {
    scrollToSection(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[80] flex flex-col">
        {/* Barre de progression de lecture horizontale */}
        <div className="h-[2px] w-full bg-navy/5 overflow-hidden">
          <div 
            className="h-full bg-gold transition-all duration-300 ease-out shadow-[0_0_8px_rgba(197,160,89,0.5)]" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between px-6 md:px-16 py-5 bg-white/80 backdrop-blur-2xl border-b border-navy/5 shadow-sm">
          {/* Logo & Identity */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => handleNavClick(0)}
          >
            <div className="w-10 h-10 md:w-11 md:h-11 bg-navy flex items-center justify-center font-bold text-white text-xl md:text-2xl font-montserrat shadow-lg group-hover:bg-gold transition-all duration-500 rounded-sm">
              J
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-black tracking-tight font-montserrat text-navy leading-none group-hover:text-gold transition-colors duration-500">
                JAT HOLDING
              </span>
              <span className="text-[7px] md:text-[8px] text-navy/40 tracking-[0.45em] font-bold uppercase mt-1">
                Sovereign Investment
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-10">
            {menuItems.map((item) => (
              <NavItem 
                key={item.index}
                label={item.label} 
                active={isItemActive(item.range)} 
                onClick={() => handleNavClick(item.index)} 
              />
            ))}
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              onClick={onOpenAssistant}
              className="hidden sm:flex px-6 py-2.5 bg-navy text-white text-[9px] font-black tracking-[0.25em] uppercase hover:bg-gold transition-all duration-500 shadow-md group items-center space-x-2"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full group-hover:bg-white animate-pulse" />
              <span>Briefing IA</span>
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-navy hover:text-gold transition-colors z-[100]"
              aria-label="Toggle Menu"
            >
              <div className="w-8 h-8 flex flex-col justify-center items-end space-y-1.5">
                <span className={`h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
                <span className={`h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`} />
                <span className={`h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-[75] bg-navy transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8 px-10 relative z-10">
          <div className="text-gold text-[10px] font-black tracking-[0.6em] uppercase mb-4 opacity-50">Menu Institutionnel</div>
          
          {menuItems.map((item, idx) => (
            <button
              key={item.index}
              onClick={() => handleNavClick(item.index)}
              className={`text-3xl md:text-5xl font-display transition-all duration-500 transform hover:scale-105 relative ${
                isItemActive(item.range) ? 'text-gold' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
              {isItemActive(item.range) && <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-gold animate-bounce">.</span>}
            </button>
          ))}

          <div className="pt-12 w-full max-w-xs space-y-4">
            <button 
              onClick={() => { onOpenAssistant(); setIsMobileMenuOpen(false); }}
              className="w-full py-5 bg-gold text-navy font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all duration-500"
            >
              Lancer Briefing IA
            </button>
            <p className="text-white/20 text-center text-[8px] tracking-[0.2em] uppercase">JAT Holding © Vision 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`text-[9px] font-black tracking-[0.25em] uppercase transition-all duration-500 relative py-2 group transform hover:translate-y-[-2px] hover:text-gold cursor-pointer z-[90] ${
      active ? 'text-navy' : 'text-navy/30'
    }`}
  >
    <span className="relative z-10">{label}</span>
    <span className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-500 ease-out shadow-[0_2px_4px_rgba(197,160,89,0.3)] ${
      active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
    }`} />
  </button>
);

export default Navbar;
