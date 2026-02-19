
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface LeGroupeProps {
  isActive?: boolean;
}

const LeGroupe: React.FC<LeGroupeProps> = ({ isActive }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const accordionData = [
    {
      title: "ADN du Groupe",
      subtitle: "Une Architecture Conçue pour la Performance",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      content: "Nous investissons dans des secteurs stratégiques pour renforcer la souveraineté industrielle et technologique. Notre structure en pôles maximise les synergies et accélère la croissance durable.",
      mission: {
        text: "Développer des plateformes industrielles, technologiques et de services à haute valeur ajoutée, créatrices de compétences et d'emplois durables.",
        icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> 
      },
      vision: {
        text: "Devenir un acteur incontournable du développement économique régional, en alliant expertise internationale et intégration locale.",
        icon: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> 
      },
      values: {
        text: "Excellence, Ambition, Intégrité, Synergie.",
        icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> 
      },
      detailsTitle: "LOGIQUE STRATÉGIQUE",
      details: [
        { 
          label: "ACCÉDER AUX MARCHÉS STRUCTURANTS", 
          desc: "Répondre de manière intégrée aux grands projets publics et privés.",
          icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4" />
        },
        { 
          label: "MUTUALISER LE RISQUE", 
          desc: "Diversifier les opérations pour atténuer les risques conjoncturels.",
          icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        },
        { 
          label: "CRÉER DES PLATEFORMES EXPORTABLES", 
          desc: "Accélérer la localisation industrielle pour bâtir des champions régionaux.",
          icon: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 20z M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        }
      ]
    },
    {
      title: "Valeur Durable",
      subtitle: "Notre Modèle de Création de Valeur Durable",
      description: "Notre modèle combine croissance organique, acquisitions stratégiques et optimisation des synergies.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000",
      content: "La dynamique de croissance du Groupe JAT repose sur un cycle vertueux de réinvestissement et d'optimisation opérationnelle.",
      isInfographic: true,
      detailsTitle: "CYCLE DE PERFORMANCE",
      details: [
        { 
          label: "CONSOLIDATION & RÉINVESTISSEMENT", 
          desc: "Les flux de trésorerie consolidés remontent à la holding.", 
          icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> 
        },
        { 
          label: "INJECTION DE CAPITAL", 
          desc: "La Holding injecte le capital et définit les objectifs.", 
          icon: <path d="M12 4v16M19 13l-7 7-7-7" /> 
        },
        { 
          label: "PERFORMANCE OPÉRATIONNELLE", 
          desc: "Chaque pôle génère des revenus à travers ses activités.", 
          icon: <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /> 
        },
        { 
          label: "COLLABORATION INTER-PÔLES", 
          desc: "La collaboration inter-pôles crée de nouvelles offres intégrées.", 
          icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M16 3.13a4 4 0 0 1 0 7.75" /> 
        }
      ]
    },
    {
      title: "Gouvernance",
      subtitle: "Agilité & Rigueur",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1000",
      content: "Notre modèle de création de valeur s'appuie sur une structure décisionnelle rigoureuse et agile.",
      mission: {
        text: "Garantir une prise de décision éclairée et une gestion des risques optimale.",
        icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      },
      vision: {
        text: "Une gouvernance de classe mondiale au service du développement panafricain.",
        icon: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      },
      values: {
        text: "Transparence, Rigueur, Agilité.",
        icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /> 
      },
      detailsTitle: "ARCHITECTURE",
      details: [
        { label: "Conseil d'Administration", desc: "Orientation stratégique long terme.", icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> },
        { label: "Comité Exécutif", desc: "Pilotage opérationnel agile et précis.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
        { label: "Direction des Pôles", desc: "Expertise sectorielle dédiée et autonome.", icon: <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" /> }
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] overflow-y-auto md:overflow-hidden pt-[95px] pb-[40px] relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1400px] h-full flex flex-col min-h-0"
        >
          <header className="mb-3 md:mb-5 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between shrink-0">
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

          <div className="flex-1 min-h-0 flex flex-col md:flex-row w-full gap-2 md:gap-3 items-stretch overflow-hidden rounded-sm">
            {accordionData.map((item: any, idx) => (
              <motion.div 
                key={idx} 
                animate={{ 
                  flex: expandedIndex === idx ? 7 : 1,
                  backgroundColor: expandedIndex === idx ? '#F9FBFC' : '#FFFFFF'
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative border border-navy/5 overflow-hidden group cursor-pointer flex flex-col md:flex-row transition-all duration-700 ${expandedIndex === idx ? 'shadow-2xl z-20' : 'hover:border-navy/20 z-10'}`}
                onClick={() => setExpandedIndex(idx)}
              >
                <div className={`absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ${expandedIndex === idx ? 'opacity-[0.03] scale-100' : 'opacity-0 scale-110'}`}>
                   <img src={item.image} className="w-full h-full object-cover grayscale" alt="" />
                </div>

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

                <div className="flex-1 min-w-0 flex flex-col overflow-hidden relative z-10">
                  <AnimatePresence mode="wait">
                    {expandedIndex === idx ? (
                      <motion.div 
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex flex-col p-3 md:p-6 lg:p-8"
                      >
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                          <div className="mb-4 md:mb-6">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display text-navy mb-1 tracking-tight">{item.title}</h3>
                            <div className="flex items-center space-x-3 mb-1">
                              <div className="h-[1px] w-8 bg-gold" />
                              <p className="text-gold text-[9px] font-black tracking-[0.3em] uppercase italic">{item.subtitle}</p>
                            </div>
                            {item.description && (
                              <p className="text-navy/60 text-[10px] md:text-[11px] font-light leading-relaxed max-w-[700px] ml-11 italic">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {!item.isInfographic ? (
                            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start pb-4">
                              <div className="lg:col-span-8 space-y-4">
                                <p className="text-navy/80 text-sm md:text-lg font-light leading-relaxed">
                                  {item.content}
                                </p>
                                
                                {item.mission && (
                                  <div className="pt-4 border-t border-navy/10 space-y-4">
                                    <h5 className="text-gold font-black text-[10px] tracking-[0.4em] uppercase italic">NOTRE ADN</h5>
                                    <div className="grid md:grid-cols-3 gap-6">
                                      <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                          <svg className="w-5 h-5 text-gold flex-shrink-0 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                            {item.mission.icon}
                                          </svg>
                                          <h6 className="text-navy font-bold text-[9px] tracking-[0.1em] uppercase opacity-40">MISSION</h6>
                                        </div>
                                        <p className="text-navy/70 text-[9px] md:text-[10px] leading-relaxed italic border-l border-gold/30 pl-2 font-light">
                                          {item.mission.text}
                                        </p>
                                      </div>

                                      <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                          <svg className="w-5 h-5 text-gold flex-shrink-0 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                            {item.vision.icon}
                                          </svg>
                                          <h6 className="text-navy font-bold text-[9px] tracking-[0.1em] uppercase opacity-40">VISION</h6>
                                        </div>
                                        <p className="text-navy/70 text-[9px] md:text-[10px] leading-relaxed italic border-l border-gold/30 pl-2 font-light">
                                          {item.vision.text}
                                        </p>
                                      </div>

                                      <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                          <svg className="w-5 h-5 text-gold flex-shrink-0 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                            {item.values.icon}
                                          </svg>
                                          <h6 className="text-navy font-bold text-[9px] tracking-[0.1em] uppercase opacity-40">VALEURS</h6>
                                        </div>
                                        <p className="text-navy/70 text-[9px] md:text-[10px] leading-relaxed italic border-l border-gold/30 pl-2 font-light">
                                          {item.values.text}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              
                              <div className="lg:col-span-4 h-full">
                                <div className="bg-navy p-4 md:p-5 space-y-4 shadow-xl relative overflow-hidden flex flex-col h-full rounded-sm">
                                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full -mr-16 -mt-16 blur-2xl" />
                                  <h5 className="text-white text-[10px] font-black tracking-[0.4em] uppercase border-b border-white/5 pb-2 flex justify-between items-center">
                                    <span>{item.detailsTitle}</span>
                                    <span className="w-1 h-1 bg-gold rounded-full animate-pulse" />
                                  </h5>
                                  <div className="space-y-5 flex-1 py-1">
                                    {item.details.map((detail: any, dIdx: number) => (
                                      <div key={dIdx} className="flex items-start space-x-3 group/item">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover/item:bg-gold/20 transition-all duration-500">
                                          <svg className="w-4 h-4 text-gold fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            {detail.icon}
                                          </svg>
                                        </div>
                                        <div className="space-y-0.5">
                                          <span className="text-[9px] font-bold text-white tracking-[0.1em] uppercase block">{detail.label}</span>
                                          <p className="text-[9px] text-white/40 leading-tight font-light">
                                            {detail.desc}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3 pb-6 mt-1 relative">
                               <p className="text-navy/80 text-sm md:text-base font-light leading-relaxed max-w-[800px] border-l-4 border-gold/20 pl-5 ml-4 font-display italic">
                                {item.content}
                              </p>

                              <div className="pt-2 relative px-4 max-w-[1100px] mx-auto">
                                <div className="text-center mb-6">
                                  <h5 className="text-gold font-black text-[9px] tracking-[0.6em] uppercase italic mb-2">{item.detailsTitle}</h5>
                                  <div className="w-20 h-[0.5px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
                                </div>
                                
                                <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-3">
                                  <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-navy/[0.03] z-0 overflow-hidden">
                                     <motion.div 
                                      initial={{ scaleX: 0, originX: 0 }}
                                      whileInView={{ scaleX: 1 }}
                                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                      className="w-full h-full bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                                     />
                                  </div>

                                  {item.details.map((detail: any, dIdx: number) => (
                                    <motion.div 
                                      key={dIdx} 
                                      initial={{ opacity: 0, y: 30 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 1, delay: dIdx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                      className="flex-1 flex flex-col items-center text-center relative z-10 group/step"
                                    >
                                      <span className="absolute -top-6 text-navy/[0.02] font-display text-[5rem] leading-none pointer-events-none select-none italic tracking-tighter">
                                        {dIdx + 1}
                                      </span>

                                      <div className="relative mb-4 mt-1 transition-all duration-700 group-hover/step:-translate-y-2">
                                        <div className="w-16 h-16 rounded-full p-[0.5px] bg-gradient-to-tr from-gold/30 via-gold/5 to-gold/30 shadow-lg relative z-10">
                                          <div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-xl" />
                                          <div className="relative h-full w-full rounded-full bg-navy flex items-center justify-center overflow-hidden">
                                            <svg className="w-5 h-5 text-gold fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                                              {detail.icon}
                                            </svg>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-1.5 px-1 relative z-20">
                                        <h6 className="text-[9px] font-black text-navy tracking-[0.2em] uppercase leading-tight font-montserrat group-hover/step:text-gold">
                                          {detail.label}
                                        </h6>
                                        <p className="text-[9px] text-navy/40 leading-tight font-light tracking-wide max-w-[170px] mx-auto">
                                          {detail.desc}
                                        </p>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
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
      
      <Footer />
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(197, 160, 89, 0.1);
          border-radius: 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(197, 160, 89, 0.3);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(197, 160, 89, 0.1) transparent;
        }
        .ml-11 {
          margin-left: 2.75rem;
        }
      `}</style>
    </div>
  );
};

export default LeGroupe;
