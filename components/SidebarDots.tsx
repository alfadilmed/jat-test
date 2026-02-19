
import React from 'react';

interface SidebarDotsProps {
  sections: { id: string; label: string }[];
  activeSection: number;
  scrollToSection: (index: number) => void;
}

const SidebarDots: React.FC<SidebarDotsProps> = ({ sections, activeSection, scrollToSection }) => {
  return (
    <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-[80] flex flex-col items-center space-y-3">
      {sections.map((section, idx) => (
        <div 
          key={section.id}
          className="group relative flex items-center justify-center cursor-pointer py-1"
          onClick={() => scrollToSection(idx)}
        >
          {/* Label Tooltip */}
          <span className={`absolute right-8 text-[9px] tracking-[0.2em] uppercase text-white bg-navy/80 px-3 py-1.5 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none hidden md:block ${activeSection === idx ? 'text-gold' : ''}`}>
            {section.label}
          </span>
          
          {/* Dot Indicator */}
          <div className={`transition-all duration-500 rounded-full ${
            activeSection === idx 
              ? 'w-1.5 h-6 bg-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]' 
              : 'w-1 h-1.5 bg-navy/30 group-hover:bg-gold/50'
          }`} />
        </div>
      ))}
    </div>
  );
};

export default SidebarDots;
