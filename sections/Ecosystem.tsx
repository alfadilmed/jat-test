
import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface EcosystemProps {
  scrollToSection?: (index: number) => void;
}

const poles = [
  { 
    name: 'Aéroportuaire', 
    role: 'Sûreté', 
    color: '#001A33', 
    path: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z M16 8l-1.5 1.5 M19 11l-1.5 1.5'
  },
  { 
    name: 'Technologie', 
    role: 'IT', 
    color: '#334155', 
    path: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M12 3v1M12 20v1M3 12h1M20 12h1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M5.64 5.64l.7.7M17.66 17.66l.7.7'
  },
  { 
    name: 'Industrie', 
    role: '4.0', 
    color: '#334155', 
    path: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M12 2v2M12 20v2M2 12h2M20 12h2'
  },
  { 
    name: 'Immobilier', 
    role: 'Asset', 
    color: '#C5A059', 
    path: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4'
  },
  { 
    name: 'Tourisme', 
    role: 'Jetfly', 
    color: '#001A33', 
    path: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 20z M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20'
  },
  { 
    name: 'Santé', 
    role: 'Health', 
    color: '#334155', 
    path: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M9 12h6M12 9v6'
  },
  { 
    name: 'Éducation', 
    role: 'Academy', 
    color: '#001A33', 
    path: 'M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c0 2 2.7 3 6 3s6-1 6-3v-5'
  },
  { 
    name: 'Agriculture', 
    role: 'Agri', 
    color: '#C5A059', 
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  },
  { 
    name: 'Logistique', 
    role: 'Hub', 
    color: '#334155', 
    path: 'M12 2L3 7v10l9 5 9-5V7l-9-5z M12 22V12M12 12l9-5M12 12L3 7'
  },
  { 
    name: 'Finance', 
    role: 'Fin', 
    color: '#C5A059', 
    path: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  { 
    name: 'Énergie', 
    role: 'Green', 
    color: '#001A33', 
    path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
  },
  { 
    name: 'Mines', 
    role: 'Mining', 
    color: '#334155', 
    path: 'M12 3l9 6-9 12-9-12 9-6z M12 3v18M12 9h9M3 9h9'
  }
];

const Ecosystem: React.FC<EcosystemProps> = ({ scrollToSection }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden relative">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069" 
          className="w-full h-full object-cover grayscale" 
          alt="" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] pt-[100px] pb-[60px] md:pb-[100px] relative z-10 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] w-full flex flex-col h-full"
        >
          <header className="mb-4 md:mb-8 shrink-0 text-center md:text-left">
            <div className="inline-flex items-center space-x-3 mb-1">
              <div className="w-6 h-[1px] bg-gold" />
              <h4 className="text-gold text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase italic">Pôles d'Excellence</h4>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display text-navy leading-none mb-2 tracking-tight">L'Écosystème JAT.</h2>
            <p className="text-navy/50 text-[9px] md:text-xs max-w-xl font-light mx-auto md:mx-0 leading-relaxed">
              Une architecture institutionnelle de 12 pôles stratégiques, moteurs de la souveraineté économique et de l'innovation durable.
            </p>
          </header>

          <div className="flex-1 min-h-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-navy/5 border border-navy/5 shadow-xl overflow-hidden rounded-sm">
            {poles.map((pole, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ backgroundColor: '#F8F9FA' }}
                onClick={() => scrollToSection && scrollToSection(3 + idx)}
                className="group bg-white p-3 md:p-6 flex flex-col items-center justify-center text-center transition-all duration-700 cursor-pointer relative"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-700" />
                
                <div className="relative mb-2 md:mb-4">
                  <svg 
                    className="w-5 h-5 md:w-8 md:h-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke={pole.color} 
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={pole.path} className="group-hover:stroke-gold transition-colors duration-500" />
                  </svg>
                  <div className="absolute inset-0 bg-gold/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-navy font-bold text-[7px] md:text-[9px] tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-500 leading-tight mb-0.5">
                    {pole.name}
                  </h3>
                  <span className="text-[5px] md:text-[7px] text-navy/25 uppercase tracking-[0.15em] font-medium group-hover:text-navy/50 transition-colors">
                    {pole.role}
                  </span>
                </div>

                <div className="absolute bottom-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-0.5 h-0.5 bg-gold/30 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Ecosystem;
