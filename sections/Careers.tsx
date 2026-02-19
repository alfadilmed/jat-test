
import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const BENEFITS = [
  { title: "Leadership Académie", desc: "Programmes de mentorat exclusifs avec nos directeurs de pôles." },
  { title: "Mobilité Africaine", desc: "Opportunités stratégiques à travers nos hubs régionaux." },
  { title: "Culture d'Excellence", desc: "Environnement méritocratique axé sur la performance 4.0." },
  { title: "Impact Souverain", desc: "Contribuez directement à des projets d'envergure étatique." }
];

const OPENINGS = [
  { role: "Directeur de Pôle - AgriTech", location: "CFC, Casablanca", type: "Full-time" },
  { role: "Analyste Senior - Private Equity", location: "CFC, Casablanca", type: "Full-time" },
  { role: "Ingénieur Sûreté Aéroportuaire", location: "GSTI Hub", type: "Expertise" }
];

const Careers: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#F8F9FA] overflow-hidden relative">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069" 
          className="w-full h-full object-cover grayscale" 
          alt="" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-transparent to-[#F8F9FA]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] overflow-y-auto md:overflow-hidden pt-[110px] pb-[60px] md:pb-[80px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] w-full"
        >
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <header className="space-y-8">
              <div className="inline-flex items-center space-x-3">
                <div className="w-8 h-[1px] bg-gold" />
                <h4 className="text-gold text-xs font-black tracking-[0.5em] uppercase">Capital Humain</h4>
              </div>
              <h2 className="text-4xl md:text-7xl font-display text-navy leading-[0.9]">
                Rejoindre l'Excellence.
              </h2>
              <p className="text-navy/60 text-lg md:text-2xl font-light leading-relaxed max-w-xl">
                Nous recherchons des visionnaires capables de bâtir le futur souverain de l'Afrique.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-navy/5">
                {BENEFITS.map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-2 group"
                  >
                    <h5 className="font-bold text-navy text-[11px] uppercase tracking-widest group-hover:text-gold transition-colors">{benefit.title}</h5>
                    <p className="text-navy/40 text-[10px] leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </header>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-navy p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-sm"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl -mr-12 -mt-12" />
              <h3 className="text-white font-display text-2xl mb-8 relative z-10">Opportunités Actuelles</h3>
              
              <div className="space-y-4 relative z-10">
                {OPENINGS.map((job, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-white/10 hover:border-gold/50 transition-all group cursor-pointer bg-white/[0.02]">
                    <div className="mb-2 sm:mb-0">
                      <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-gold transition-colors">{job.role}</h4>
                      <p className="text-white/30 text-[9px] uppercase tracking-widest">{job.location}</p>
                    </div>
                    <span className="text-[8px] text-gold font-black tracking-widest border border-gold/20 px-3 py-1 uppercase">{job.type}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-white/40 text-[10px] italic mb-6">"Le talent est notre actif le plus stratégique."</p>
                <button className="w-full py-4 bg-gold text-navy font-black text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all duration-500">
                  Candidature Spontanée
                </button>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
