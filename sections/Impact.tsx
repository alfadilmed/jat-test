
import React from 'react';

const Impact: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] relative px-8">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h4 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6">Stratégie & Impact</h4>
        <h2 className="text-4xl md:text-7xl font-extrabold font-montserrat text-white mb-8">Performance Durable.</h2>
        <p className="text-white/50 text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Nous mesurons notre succès par la valeur créée pour nos partenaires et l'empreinte 
          économique laissée sur les territoires où nous opérons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
        <StatBox number="+25" label="Projets Stratégiques" />
        <StatBox number="1500" label="Emplois Créés" />
        <StatBox number="3" label="Pays d'Expansion" />
        <StatBox number="2026" label="Vision Horizon" />
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <ValueItem 
          title="Innovation" 
          desc="Intégration systématique des technologies de pointe (AgriTech, IoT Logistique)."
        />
        <ValueItem 
          title="Durabilité" 
          desc="Engagement pour des parcs industriels à faible émission et une gestion d'eau optimisée."
        />
        <ValueItem 
          title="Croissance" 
          desc="Ambition de doubler nos actifs sous gestion d'ici 24 mois par des acquisitions ciblées."
        />
      </div>
    </div>
  );
};

const StatBox: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="flex flex-col items-center justify-center p-10 bg-white/[0.02] border border-white/5 group hover:border-gold/40 transition-all duration-500">
    <span className="text-5xl md:text-6xl font-black font-montserrat text-white group-hover:text-gold transition-colors mb-2">
      {number}
    </span>
    <span className="text-xs text-white/40 tracking-widest uppercase font-bold text-center">
      {label}
    </span>
  </div>
);

const ValueItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="text-left border-l border-gold/20 pl-6">
    <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Impact;
