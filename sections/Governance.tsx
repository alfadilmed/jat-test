
import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Governance: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#F8F9FA] overflow-hidden relative">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-149736216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
          className="w-full h-full object-cover grayscale" 
          alt="" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-transparent to-[#F8F9FA]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] overflow-y-auto md:overflow-hidden pt-[110px] pb-[60px] md:pb-[80px] relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="max-w-[1400px] w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center h-full"
        >
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-[4/3] bg-navy flex flex-col justify-end p-8 md:p-12 overflow-hidden shadow-2xl relative">
              <h4 className="text-gold text-[10px] font-black tracking-[0.5em] mb-4 uppercase">STRUCTURE</h4>
              <h3 className="text-2xl md:text-3xl font-display text-white mb-8">Modèle de Création de Valeur.</h3>
              <div className="space-y-3">
                <GovLine num="1" label="Conseil d'Administration" />
                <GovLine num="2" label="Comité Exécutif" />
                <GovLine num="3" label="Direction des Pôles" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:space-y-12"
          >
            <header>
              <h4 className="text-gold text-xs font-black tracking-[0.5em] uppercase mb-4">Vision Partagée</h4>
              <h2 className="text-4xl md:text-6xl font-display text-navy leading-tight">Une Gouvernance Claire.</h2>
            </header>
            <p className="text-navy/60 text-sm md:text-lg leading-relaxed">
              Alignement stratégique et agilité décisionnelle.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-navy/5">
              <div>
                <h5 className="font-bold text-navy text-xs md:text-sm mb-2">Performance</h5>
                <p className="text-navy/40 text-[10px] leading-relaxed">Flux consolidés optimisés.</p>
              </div>
              <div>
                <h5 className="font-bold text-navy text-xs md:text-sm mb-2">Réinvestissement</h5>
                <p className="text-navy/40 text-[10px] leading-relaxed">Saisie d'opportunités.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

const GovLine = ({ num, label }: any) => (
  <div className="flex items-center space-x-4">
    <span className="text-gold font-montserrat font-black">{num}.</span>
    <span className="text-white/70 text-xs md:text-sm font-medium tracking-wide">{label}</span>
  </div>
);

export default Governance;
