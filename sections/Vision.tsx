
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface VisionProps {
  isActive?: boolean;
}

const Vision: React.FC<VisionProps> = ({ isActive }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const accordionData = [
    {
      title: "ADN du Groupe",
      subtitle: "Performance & Souveraineté",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      content: "Nous investissons dans des secteurs stratégiques pour renforcer la souveraineté industrielle et technologique. Notre structure en pôles maximise les synergies et accélère la croissance durable.",
      mission: "Développer des plateformes à haute valeur ajoutée, créatrices de compétences et d'emplois durables.",
      vision: "Devenir un acteur incontournable du développement économique régional, hub entre l'Europe et l'Afrique.",
      detailsTitle: "Logique Stratégique",
      details: [
        { label: "Marchés structurants", desc: "Réponse intégrée aux projets souverains." },
        { label: "Mutualisation du risque", desc: "Diversification des opérations stratégiques." },
        { label: "Plateformes exportables", desc: "Champions régionaux par la localisation." }
      ]
    },
    {
      title: "Valeur Durable",
      subtitle: "Responsabilité & Impact",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
      content: "Nous bâtissons une performance durable en intégrant systématiquement les technologies de pointe (AgriTech, IoT, IA) dans une logique de transition éco-industrielle.",
      mission: "Intégrer la durabilité au cœur de chaque pôle opérationnel.",
      vision: "Un avenir décarboné et technologiquement souverain pour les générations futures.",
      detailsTitle: "Piliers ESG",
      details: [
        { label: "Impact Territorial", desc: "Développement local inclusif et durable." },
        { label: "Énergie Verte", desc: "Transition vers des parcs éco-industriels." },
        { label: "Éthique de Gestion", desc: "Transparence et rigueur institutionnelle." }
      ]
    },
    {
      title: "Gouvernance",
      subtitle: "Agilité & Rigueur",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1000",
      content: "Notre modèle de création de valeur s'appuie sur une structure décisionnelle rigoureuse et agile, assurant un alignement constant entre vision et exécution.",
      mission: "Garantir une prise de décision éclairée et une gestion des risques optimale.",
      vision: "Une gouvernance de classe mondiale au service du développement panafricain.",
      detailsTitle: "Architecture",
      details: [
        { label: "Conseil d'Administration", desc: "Orientation stratégique long terme." },
        { label: "Comité Exécutif", desc: "Pilotage opérationnel agile et précis." },
        { label: "Direction des Pôles", desc: "Expertise sectorielle dédiée et autonome." }
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Conteneur principal flexible */}
      <div className="flex-1 flex flex-col items-center justify-start md:justify-center px-4 md:px-12 lg:px-20 overflow-y-auto md:overflow-hidden pt-24 md:pt-16 pb-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1600px] h-full flex flex-col min-h-0"
        >
          <header className="mb-6 md:mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between shrink-0">
            <div className="space-y-1">
              <div className="inline-flex items-center space-x-3">
                <div className="w-8 h-[1px] bg-gold" />
                <h4 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase italic">Structure Institutionnelle</h4>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-navy leading-none tracking-tight">Le Groupe JAT.</h2>
            </div>
            <div className="hidden md:block pb-1">
              <p className="text-navy/30 text-[9px] uppercase tracking-[0.3em] font-medium border-l border-navy/10 pl-4 max-w-[200px] leading-relaxed">
                Pilotage stratégique des actifs et Vision 2026.
              </p>
            </div>
          </header>

          {/* L'accordéon utilise flex-1 et min-h-0 pour rester confiné au parent */}
          <div className="flex-1 min-h-0 flex flex-col md:flex-row w-full gap-2 md:gap-3 items-stretch overflow-hidden rounded-sm">
            {accordionData.map((item, idx) => (
              <motion.div 
                key={idx} 
                animate={{ 
                  flex: expandedIndex === idx ? 7 : 1,
                  backgroundColor: expandedIndex === idx ? '#F9FBFC' : '#FFFFFF'
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative border border-navy/5 overflow-hidden group cursor-pointer flex flex-col md:flex-row transition-all duration-700 ${expandedIndex === idx ? 'shadow-xl z-20' : 'hover:border-navy/20 z-10'}`}
                onClick={() => setExpandedIndex(idx)}
              >
                {/* Image de fond mode "ghost" */}
                <div className={`absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ${expandedIndex === idx ? 'opacity-[0.03] scale-100' : 'opacity-0 scale-110'}`}>
                   <img src={item.image} className="w-full h-full object-cover grayscale" alt="" />
                </div>

                {/* Vertical Handle */}
                <div className={`relative z-10 flex items-center justify-center p-3 md:p-5 shrink-0 transition-all duration-700 ${expandedIndex === idx ? 'bg-navy md:w-16' : 'bg-transparent md:w-20'}`}>
                  <div className="flex flex-col items-center justify-between h-full py-2">
                    <span className={`text-lg md:text-2xl font-display transition-colors duration-500 ${expandedIndex === idx ? 'text-gold' : 'text-navy/10 group-hover:text-navy/30 italic'}`}>
                      0{idx + 1}
                    </span>
                    <div className="hidden md:block">
                      <h3 className={`whitespace-nowrap font-montserrat font-bold text-[7px] uppercase tracking-[0.5em] transition-all duration-700 origin-center -rotate-90 ${expandedIndex === idx ? 'opacity-0 scale-0' : 'text-navy/20 group-hover:text-navy/50 opacity-100'}`}>
                        {item.title}
                      </h3>
                    </div>
                    {/* Indicateur Laser */}
                    <div className="relative w-[1px] h-16 md:h-32 overflow-hidden bg-navy/5">
                       <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: expandedIndex === idx ? '100%' : '0%' }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full bg-gold shadow-[0_0_10px_rgba(197,160,89,1)]"
                       />
                    </div>
                  </div>
                </div>

                {/* Zone de Contenu Adaptative */}
                <div className="flex-1 min-w-0 flex flex-col overflow-hidden relative z-10">
                  <AnimatePresence mode="wait">
                    {expandedIndex === idx ? (
                      <motion.div 
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex flex-col p-6 md:p-10 lg:p-12"
                      >
                        {/* Scroll interne pour le contenu du panneau */}
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                          <div className="mb-8">
                            <h3 className="text-2xl md:text-4xl lg:text-5xl font-display text-navy mb-3 tracking-tight">{item.title}</h3>
                            <div className="flex items-center space-x-4">
                              <div className="h-[1px] w-10 bg-gold" />
                              <p className="text-gold text-[9px] font-black tracking-[0.4em] uppercase italic">{item.subtitle}</p>
                            </div>
                          </div>

                          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-6">
                            {/* Colonne Gauche: Texte & Missions */}
                            <div className="lg:col-span-7 space-y-8">
                              <p className="text-navy/80 text-base md:text-xl lg:text-2xl font-light leading-relaxed">
                                {item.content}
                              </p>
                              
                              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-navy/10">
                                <div className="space-y-3">
                                  <h5 className="text-navy font-black text-[8px] tracking-[0.3em] uppercase opacity-40">Mission Institutionnelle</h5>
                                  <p className="text-navy/70 text-[11px] md:text-sm leading-relaxed italic border-l-2 border-gold/30 pl-4 font-light">{item.mission}</p>
                                </div>
                                <div className="space-y-3">
                                  <h5 className="text-navy font-black text-[8px] tracking-[0.3em] uppercase opacity-40">Horizon Stratégique</h5>
                                  <p className="text-navy/70 text-[11px] md:text-sm leading-relaxed italic border-l-2 border-gold/30 pl-4 font-light">{item.vision}</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Colonne Droite: Carte Dashboard */}
                            <div className="lg:col-span-5 h-full">
                              <div className="bg-navy p-6 md:p-8 space-y-8 shadow-2xl relative overflow-hidden flex flex-col h-full rounded-sm">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.02] rounded-full -mr-24 -mt-24 blur-2xl" />
                                
                                <h5 className="text-white/20 text-[9px] font-black tracking-[0.5em] uppercase border-b border-white/5 pb-4 flex justify-between items-center">
                                  <span>{item.detailsTitle}</span>
                                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                                </h5>

                                <div className="space-y-6 flex-1">
                                  {item.details.map((detail, dIdx) => (
                                    <div key={dIdx} className="space-y-2">
                                      <div className="flex items-center space-x-3">
                                        <div className="w-1 h-6 bg-gold/20" />
                                        <span className="text-[10px] font-bold text-white tracking-[0.15em] uppercase">{detail.label}</span>
                                      </div>
                                      <p className="text-[10px] text-white/40 pl-4 leading-relaxed font-light">
                                        {detail.desc}
                                      </p>
                                    </div>
                                  ))}
                                </div>

                                <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                                  <div className="text-[7px] font-black tracking-[0.4em] text-white/10 uppercase">Sovereign Investment</div>
                                  <div className="text-gold text-[9px] font-bold italic tracking-[0.2em]">JAT.CORP</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="collapsed" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hidden md:flex flex-col items-start justify-center h-full p-8"
                      >
                        <h3 className="text-navy/5 font-display text-4xl lg:text-5xl group-hover:text-navy/10 transition-all duration-700 select-none">
                          {item.title.split(' ')[0]}
                        </h3>
                        <div className="w-8 h-[1px] bg-navy/10 group-hover:w-16 group-hover:bg-gold/40 transition-all duration-1000 mt-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Footer fixe */}
      <Footer />
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 26, 51, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(197, 160, 89, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(197, 160, 89, 0.5);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(197, 160, 89, 0.2) rgba(0, 26, 51, 0.02);
        }
      `}</style>
    </div>
  );
};

export default Vision;
