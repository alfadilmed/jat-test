
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const STRATEGY_CONTENT = [
  {
    navLabel: "La Trajectoire",
    title: "Une Trajectoire de Croissance Structurée",
    subtitle: "Notre déploiement est organisé en trois phases stratégiques, assurant une montée en puissance progressive et maîtrisée de notre écosystème.",
    isInfographic: true,
  },
  {
    navLabel: "Phase 1",
    title: "Activer le Socle Stratégique de l'Écosystème",
    isPhase1Infographic: true,
    objectives: [
      { 
        title: "Structurer la Gouvernance :", 
        text: "Mettre en place les instances de pilotage et de contrôle (Conseil d'Administration, Comité Exécutif) pour garantir un alignement stratégique et une discipline financière." 
      },
      { 
        title: "Bâtir un Socle Industriel & Technologique :", 
        text: "Sécuriser notre souveraineté et développer des plateformes de production (Industrie 4.0) et de services critiques (cybersécurité, IA)." 
      },
      { 
        title: "Sécuriser les Partenariats Stratégiques :", 
        text: "Nouer des alliances technologiques et financières pour accélérer le déploiement." 
      }
    ],
    poles: [
      { label: "Aéroportuaire", type: "aero", color: "#60A5FA" },
      { label: "Industrie", type: "indus", color: "#34D399" },
      { label: "Technologie", type: "tech", color: "#FBBF24" },
      { label: "Tourisme", type: "tour", color: "#F87171" },
      { label: "Santé", type: "health", color: "#818CF8" },
      { label: "Finance", type: "fin", color: "#2DD4BF" },
      { label: "Stockage Pétrolier", type: "oil", color: "#94A3B8" }
    ],
    bottomText: "Ces pôles établissent les infrastructures critiques, la souveraineté technologique et les premières plateformes de services qui formeront la base de notre croissance future."
  },
  {
    navLabel: "Phase 2",
    title: "Montée en Puissance Opérationnelle et Expansion Géographique",
    isPhase2Accordion: true,
    panels: [
      {
        title: "Montée en Puissance",
        subtitle: "Déploiement & Expansion",
        content: "Mettre en œuvre la pleine capacité des 7 pôles fondateurs pour atteindre l'excellence opérationnelle. Cette phase marque l'initiation d'une expansion ciblée en Afrique de l'Ouest et au Moyen-Orient, tout en consolidant l'infrastructure de soutien via le pôle immobilier.",
        points: [
          "Déploiement Opérationnel : Pleine capacité des 7 pôles",
          "Intégration des Synergies : Mutualisation des ressources et talents",
          "Expansion Géographique : Afrique de l'Ouest et Moyen-Orient",
          "Action Clé : Activation du Pôle Immobilier"
        ],
        actionKey: {
          title: "ACTIVATION DU PÔLE IMMOBILIER",
          text: "Le Pôle Immobilier est activé pour développer les projets immobiliers intégrés et les parcs industriels clés en main, infrastructures de soutien essentielles à l'expansion physique des autres pôles."
        },
        icon: "gears"
      },
      {
        title: "Catalyseur de Croissance",
        subtitle: "Synergies Systémiques & Performance",
        isCatalystInfographic: true,
        header: "Le Pôle Immobilier : Catalyseur de Croissance pour l'Écosystème",
        subHeader: "En développant des infrastructures “clés en main”, le pôle Immobilier accélère le déploiement et la performance de l'ensemble de nos activités.",
        icon: "strategy-map",
        catalystLinks: [
          { label: "Immobilier → Industrie", desc: "Développement de parcs industriels 4.0 intégrés.", type: "indus", pos: "tl" },
          { label: "Immobilier → Tourisme", desc: "Conception et construction de complexes hôteliers et de loisirs nouvelle génération.", type: "tour", pos: "tr" },
          { label: "Immobilier → Santé", desc: "Aménagement de cliniques et d'hôpitaux modernes et fonctionnels.", type: "health", pos: "bl" },
          { label: "Immobilier → Logistique", desc: "Création de zones logistiques et de plateformes connectées pour soutenir le hub africain.", type: "log", pos: "br" }
        ]
      }
    ]
  },
  {
    navLabel: "Phase 3",
    title: "Phase 3 : Leadership & Impact",
    subtitle: "Une Référence Panafricaine Incontournable",
    text: "L'aboutissement de notre trajectoire 2026 marque l'entrée du groupe dans une ére de leadership continental et d'impact systémique. JAT Holding se projette alors comme une référence panafricaine incontournable, capable de piloter des projets d' infrastructure et de technologie à l'échelle du continent. Cette phase finale est caractérisée par une internationalisation contrôlée de nos activités les plus performantes, tout en maintenant un ancrage solide au Maroc comme hub de souveraineté. Nos investissements sont orientés vers des secteurs à haut impact social et économique, contribuant directement à l'émergence d'une Afrique intégrée et résiliente. Nous consolidons notre héritage en bâtissant des institutions pérennes, capables de résister aux cycles économiques et de porter la voix de l'excellence marocaine à l'étranger. Cette croissance contrôlée, jamais au détriment de la stabilité, assure au groupe un rayonnement durable et une influence positive sur le développement économique régional.",
    points: [
      "Projection Internationale & Panafricaine",
      "Investissements à Haut Impact",
      "Souveraineté Économique Affirmée",
      "Rayonnement Institutionnel Durable"
    ]
  }
];

const InfographicIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'aero': return <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />;
    case 'indus': return <path d="M2 20h20M7 20V4l5 2v14M12 20V7l5 2v11" />;
    case 'tech': return <path d="M6 19a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H6zM9 12h6M12 9v6" />;
    case 'tour': return <path d="M12 10a4 4 0 100-8 4 4 0 000 8zM2 22h20 M12 10V22" />;
    case 'health': return <path d="M12 21a9 9 0 100-18 9 9 0 000 18z M9 12h6M12 9v6" />;
    case 'fin': return <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />;
    case 'oil': return <path d="M4 8h16v12H4z M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2 M12 14v.01" />;
    case 'immo': return <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4" />;
    case 'agri': return <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
    case 'log': return <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z M12 22V12M12 12l9-5M12 12L3 7" />;
    case 'edu': return <path d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c0 2 2.7 3 6 3s6-1 6-3v-5" />;
    case 'gears': return <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M12 2v2M12 20v2M2 12h2M20 12h2" />;
    case 'strategy-map': return <path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z M9 4v13M15 7v13" />;
    case 'crane-building': return <path d="M12 21h8M3 21V10l9-4 9 4v11M12 6v15M7 21v-7h10v7M10 10V4h4l2 2" />;
    default: return null;
  }
};

const Trajectory: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedPhase2Panel, setExpandedPhase2Panel] = useState(0);

  return (
    <div className="w-full h-full flex flex-col bg-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
          className="w-full h-full object-cover" 
          alt="" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] relative z-10 pt-[110px] pb-[60px] md:pb-[80px] overflow-y-auto md:overflow-hidden">
        <div className="max-w-[1400px] w-full flex flex-col h-full">
          <header className="mb-6 shrink-0 text-center md:text-left">
            <div className="inline-flex items-center space-x-3 mb-2">
              <div className="w-8 h-[1px] bg-gold" />
              <h4 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.5em] uppercase italic">Trajectory Horizon</h4>
            </div>
            <h2 className="text-3xl md:text-5xl font-display leading-none mb-6">Stratégie & Croissance.</h2>

            <nav className="flex items-center justify-center md:justify-start space-x-8 md:space-x-12 border-b border-white/5 pb-4">
              {STRATEGY_CONTENT.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative py-2 text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 ${
                    currentSlide === idx ? 'text-white' : 'text-white/20 hover:text-white/40'
                  }`}
                >
                  <span className="relative z-10">{item.navLabel}</span>
                  {currentSlide === idx && (
                    <motion.div 
                      layoutId="tab-underline"
                      className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-gold shadow-[0_0_10px_rgba(197,160,89,1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>
          </header>

          <div className="flex-1 min-h-0 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {STRATEGY_CONTENT[currentSlide].isInfographic ? (
                <motion.div
                  key="infographic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center"
                >
                  <div className="mb-8 max-w-4xl">
                    <h3 className="text-2xl md:text-4xl font-display mb-3 text-white">{STRATEGY_CONTENT[0].title}</h3>
                    <p className="text-white/60 text-[11px] md:text-sm font-light italic leading-relaxed border-l-2 border-gold/30 pl-4">
                      {STRATEGY_CONTENT[0].subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full max-h-[500px]">
                    {/* COURT TERME */}
                    <div className="bg-[#001A33] border border-white/5 p-6 rounded-sm flex flex-col relative group">
                       <h5 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-4 border-b border-white/10 pb-2">COURT TERME (Fondations & Consolidation)</h5>
                       <div className="space-y-4 flex-1">
                          <div className="space-y-2">
                             <h6 className="text-[9px] font-bold text-gold uppercase tracking-wider">Objectif :</h6>
                             <p className="text-[10px] text-white/50 leading-relaxed font-light">Activer les pôles prioritaires pour bâtir un socle solide et structurer la gouvernance.</p>
                          </div>
                          <div className="grid grid-cols-3 gap-y-4 pt-4">
                             <MiniIcon label="Aéroportuaire" type="aero" />
                             <MiniIcon label="Industrie" type="indus" />
                             <MiniIcon label="Technologie" type="tech" />
                             <MiniIcon label="Tourisme" type="tour" />
                             <MiniIcon label="Santé" type="health" />
                             <MiniIcon label="Finance" type="fin" />
                             <MiniIcon label="Stockage Pétrolier" type="oil" />
                          </div>
                       </div>
                    </div>

                    {/* MOYEN TERME */}
                    <div className="bg-[#1e293b] border border-white/5 p-6 rounded-sm flex flex-col relative group">
                       <div className="absolute top-1/2 -left-3 -translate-y-1/2 z-20 hidden md:block">
                          <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                       </div>
                       <h5 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-4 border-b border-white/10 pb-2">MOYEN TERME (Expansion & Synergies)</h5>
                       <div className="space-y-4 flex-1">
                          <div className="space-y-2">
                             <h6 className="text-[9px] font-bold text-gold uppercase tracking-wider">Objectif :</h6>
                             <p className="text-[10px] text-white/50 leading-relaxed font-light">Déployer l'ensemble des pôles, intégrer les synergies et initier l'expansion géographique.</p>
                          </div>
                          <div className="flex flex-col items-center justify-center flex-1 space-y-4 border border-white/5 bg-navy/20 p-4 rounded-sm">
                             <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                                <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.2"><InfographicIcon type="immo"/></svg>
                             </div>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Immobilier</span>
                          </div>
                          <div className="space-y-2 pt-2">
                             <h6 className="text-[9px] font-bold text-gold uppercase tracking-wider">Action Clé :</h6>
                             <p className="text-[10px] text-white/40 leading-relaxed italic">Expansion des pôles existants et ajout du Pôle Immobilier pour développer les infrastructures de soutien.</p>
                          </div>
                       </div>
                    </div>

                    {/* LONG TERME */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-sm flex flex-col relative group">
                       <div className="absolute top-1/2 -left-3 -translate-y-1/2 z-20 hidden md:block">
                          <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                       </div>
                       <h5 className="text-[11px] font-black tracking-[0.3em] text-white uppercase mb-4 border-b border-white/10 pb-2">LONG TERME (Leadership & Diversification)</h5>
                       <div className="space-y-6 flex-1">
                          <div className="space-y-2">
                             <h6 className="text-[9px] font-bold text-gold uppercase tracking-wider">Objectif :</h6>
                             <p className="text-[10px] text-white/50 leading-relaxed font-light">Consolider notre position de leader régional et diversifier nos activités dans les secteurs d'avenir.</p>
                          </div>
                          <div className="space-y-3">
                             <LongTermItem label="Agriculture" type="agri" desc="Ajout des pôles Agriculture, Logistique et Education." />
                             <LongTermItem label="Logistique" type="log" desc="Ajout des pôles Agriculture, Logistique et Education." />
                             <LongTermItem label="Éducation" type="edu" desc="Ajout des pôles Agriculture, Logistique et Education." />
                          </div>
                          <div className="space-y-1 pt-2">
                             <h6 className="text-[9px] font-bold text-gold uppercase tracking-wider">Action Clé :</h6>
                             <p className="text-[10px] text-white/40 leading-relaxed italic">Atteindre une intégration complète de l'écosystème.</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ) : STRATEGY_CONTENT[currentSlide].isPhase1Infographic ? (
                <motion.div
                  key="phase1-infographic"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center max-w-6xl mx-auto"
                >
                  <div className="mb-10 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-display text-white mb-2 tracking-tight">{STRATEGY_CONTENT[1].title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* LEFT COLUMN: OBJECTIFS CLÉS */}
                    <div className="space-y-10">
                       <h4 className="text-gold text-[12px] font-black tracking-[0.5em] uppercase border-b border-white/10 pb-4">OBJECTIFS CLÉS</h4>
                       <div className="space-y-8">
                          {STRATEGY_CONTENT[1].objectives?.map((obj: any, idx: number) => (
                             <motion.div 
                               key={idx}
                               initial={{ opacity: 0, x: -20 }}
                               animate={{ opacity: 1, x: 0 }}
                               transition={{ delay: idx * 0.15 }}
                               className="flex items-start space-x-4 group"
                             >
                                <div className="mt-1 flex-shrink-0">
                                   <div className="w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                         <polyline points="20 6 9 17 4 12"></polyline>
                                      </svg>
                                   </div>
                                </div>
                                <div className="space-y-1.5">
                                   <h5 className="text-[11px] md:text-xs font-black text-white/90 uppercase tracking-widest leading-none group-hover:text-gold transition-colors">{obj.title}</h5>
                                   <p className="text-[10px] md:text-[11px] text-white/50 leading-relaxed font-light italic">
                                      {obj.text}
                                   </p>
                                </div>
                             </motion.div>
                          ))}
                       </div>
                    </div>

                    {/* RIGHT COLUMN: LES 7 PÔLES FONDATEURS */}
                    <div className="bg-white/[0.02] border border-white/5 p-8 rounded-sm flex flex-col relative group">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.03] rounded-full blur-3xl -mr-16 -mt-16" />
                       <h4 className="text-white text-[12px] font-black tracking-[0.4em] uppercase mb-8 border-b border-white/10 pb-4 text-center lg:text-left">LES 7 PÔLES FONDATEURS</h4>
                       
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 flex-1 items-center justify-items-center mb-8">
                          {STRATEGY_CONTENT[1].poles?.map((pole: any, idx: number) => (
                             <motion.div 
                               key={idx}
                               whileHover={{ scale: 1.1, y: -5 }}
                               className="flex flex-col items-center space-y-3 group/pole text-center"
                             >
                                <div 
                                  className="w-14 h-14 rounded-full flex items-center justify-center bg-navy border border-white/5 shadow-xl transition-all duration-500 group-hover/pole:border-gold/40"
                                  style={{ boxShadow: `0 0 15px ${pole.color}20` }}
                                >
                                   <svg className="w-7 h-7 fill-none transition-colors duration-500" stroke={pole.color} viewBox="0 0 24 24" strokeWidth="1.2">
                                      <InfographicIcon type={pole.type}/>
                                   </svg>
                                </div>
                                <span className="text-[8px] md:text-[9px] font-bold text-white/40 uppercase tracking-widest group-hover/pole:text-white transition-colors">{pole.label}</span>
                             </motion.div>
                          ))}
                       </div>

                       <div className="pt-6 border-t border-white/5">
                          <p className="text-[9px] md:text-[10px] text-white/30 leading-relaxed italic text-center font-light">
                             {STRATEGY_CONTENT[1].bottomText}
                          </p>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ) : STRATEGY_CONTENT[currentSlide].isPhase2Accordion ? (
                <motion.div
                  key="phase2-accordion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col"
                >
                  <div className="mb-10 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-display text-white mb-2 tracking-tight leading-tight">{STRATEGY_CONTENT[2].title}</h3>
                  </div>

                  <div className="flex-1 flex flex-col md:flex-row gap-4 h-full min-h-0">
                    {STRATEGY_CONTENT[2].panels?.map((panel: any, pIdx: number) => (
                      <motion.div
                        key={pIdx}
                        animate={{ flex: expandedPhase2Panel === pIdx ? 3 : 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => setExpandedPhase2Panel(pIdx)}
                        className={`relative border border-white/10 overflow-hidden cursor-pointer group rounded-sm flex flex-col ${expandedPhase2Panel === pIdx ? 'bg-white/[0.03]' : 'bg-transparent'}`}
                      >
                        {/* Header Panel */}
                        <div className={`p-6 flex items-center justify-between border-b border-white/5 ${expandedPhase2Panel === pIdx ? 'bg-navy/40' : ''}`}>
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-sm transition-all duration-500 ${expandedPhase2Panel === pIdx ? 'bg-gold text-navy' : 'bg-white/5 text-white/30'}`}>
                              <svg className="w-6 h-6 md:w-8 md:h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.2">
                                <InfographicIcon type={panel.icon} />
                              </svg>
                            </div>
                            <div className="flex flex-col">
                              <h4 className={`text-[12px] md:text-sm font-black tracking-[0.2em] uppercase transition-colors duration-500 ${expandedPhase2Panel === pIdx ? 'text-white' : 'text-white/40'}`}>
                                {panel.title}
                              </h4>
                              {expandedPhase2Panel === pIdx && (
                                <motion.span 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-[10px] text-gold font-bold italic tracking-wider mt-1"
                                >
                                  {panel.subtitle}
                                </motion.span>
                              )}
                            </div>
                          </div>
                          {expandedPhase2Panel !== pIdx && (
                             <div className="rotate-90 md:rotate-0">
                               <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                             </div>
                          )}
                        </div>

                        {/* Content Panel */}
                        <AnimatePresence>
                          {expandedPhase2Panel === pIdx && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              className="p-8 flex-1 overflow-y-auto custom-scrollbar"
                            >
                              {panel.isCatalystInfographic ? (
                                <div className="h-full flex flex-col items-center justify-center max-w-5xl mx-auto py-4">
                                   <div className="text-center mb-12">
                                      <h5 className="text-2xl md:text-3xl font-display text-white mb-2">{panel.header}</h5>
                                      <p className="text-white/50 text-[11px] md:text-sm max-w-3xl mx-auto italic font-light">
                                         {panel.subHeader}
                                      </p>
                                   </div>

                                   <div className="relative w-full aspect-video max-h-[400px]">
                                      {/* Central Node */}
                                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                                         <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-[6px] border-navy bg-navy flex flex-col items-center justify-center text-center shadow-2xl relative">
                                            <div className="absolute inset-0 border border-white/20 rounded-full" />
                                            <svg className="w-10 h-10 md:w-16 md:h-16 text-white/90 fill-none stroke-current mb-2" viewBox="0 0 24 24" strokeWidth="0.8">
                                               <InfographicIcon type="crane-building" />
                                            </svg>
                                            <span className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-widest leading-none">PÔLE IMMOBILIER</span>
                                         </div>
                                      </div>

                                      {/* Catalyst Nodes */}
                                      {panel.catalystLinks.map((link: any, idx: number) => {
                                        const posStyles = {
                                          tl: "top-0 left-0",
                                          tr: "top-0 right-0",
                                          bl: "bottom-0 left-0",
                                          br: "bottom-0 right-0"
                                        };
                                        const alignStyles = {
                                          tl: "items-start text-left",
                                          tr: "items-end text-right",
                                          bl: "items-start text-left",
                                          br: "items-end text-right"
                                        };

                                        return (
                                          <div key={idx} className={`absolute ${posStyles[link.pos as keyof typeof posStyles]} w-[40%] flex flex-col ${alignStyles[link.pos as keyof typeof alignStyles]} group/node`}>
                                             <div className="flex items-center space-x-4 mb-3 group-hover/node:scale-110 transition-transform">
                                                {link.pos === 'tr' || link.pos === 'br' ? (
                                                  <>
                                                    <div className="space-y-1">
                                                       <h6 className="text-[10px] md:text-xs font-black text-white/90 uppercase tracking-widest leading-none">{link.label}</h6>
                                                       <p className="text-[9px] text-white/40 leading-tight font-light">{link.desc}</p>
                                                    </div>
                                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-navy/40 flex items-center justify-center text-white/60 group-hover/node:border-gold/40 group-hover/node:text-gold transition-all duration-500">
                                                       <svg className="w-6 h-6 md:w-8 md:h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1"><InfographicIcon type={link.type} /></svg>
                                                    </div>
                                                  </>
                                                ) : (
                                                  <>
                                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-navy/40 flex items-center justify-center text-white/60 group-hover/node:border-gold/40 group-hover/node:text-gold transition-all duration-500">
                                                       <svg className="w-6 h-6 md:w-8 md:h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1"><InfographicIcon type={link.type} /></svg>
                                                    </div>
                                                    <div className="space-y-1">
                                                       <h6 className="text-[10px] md:text-xs font-black text-white/90 uppercase tracking-widest leading-none">{link.label}</h6>
                                                       <p className="text-[9px] text-white/40 leading-tight font-light">{link.desc}</p>
                                                    </div>
                                                  </>
                                                )}
                                             </div>
                                          </div>
                                        );
                                      })}

                                      {/* Svg Arrows Layer */}
                                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 60">
                                         <path d="M40 25 Q 45 30 25 15" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" fill="none" />
                                         <path d="M60 25 Q 55 30 75 15" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" fill="none" />
                                         <path d="M40 35 Q 45 30 25 45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" fill="none" />
                                         <path d="M60 35 Q 55 30 75 45" stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" fill="none" />
                                      </svg>
                                   </div>
                                </div>
                              ) : (
                                <div className="grid md:grid-cols-12 gap-10">
                                  <div className="md:col-span-7 space-y-8">
                                    <div className="space-y-4">
                                       <h5 className="text-gold text-[10px] font-black tracking-[0.4em] uppercase border-b border-white/5 pb-2">OBJECTIFS CLÉS</h5>
                                       <p className="text-white/70 text-sm md:text-base leading-relaxed font-light italic border-l-2 border-gold/30 pl-6">
                                         {panel.content}
                                       </p>
                                    </div>

                                    {panel.actionKey && (
                                      <div className="mt-8 p-6 bg-navy/40 border border-gold/10 rounded-sm space-y-3">
                                        <h6 className="text-gold text-[10px] font-black tracking-[0.2em] uppercase">ACTION CLÉ : {panel.actionKey.title}</h6>
                                        <p className="text-white/50 text-[11px] leading-relaxed font-light">{panel.actionKey.text}</p>
                                      </div>
                                    )}
                                  </div>
                                  <div className="md:col-span-5">
                                    <h5 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-2">Détails de Déploiement</h5>
                                    <ul className="space-y-4">
                                      {panel.points.map((pt: string, idx: number) => (
                                        <motion.li 
                                          key={idx}
                                          initial={{ opacity: 0, x: 10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.3 + (idx * 0.1) }}
                                          className="flex items-start space-x-3 group/li"
                                        >
                                          <div className="mt-1.5 w-1 h-3 bg-gold/40 group-hover/li:bg-gold transition-colors" />
                                          <span className="text-[11px] md:text-xs text-white/60 group-hover/li:text-white transition-colors">{pt}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Background Deco */}
                        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gold/[0.02] rounded-full blur-3xl pointer-events-none transition-opacity duration-1000 ${expandedPhase2Panel === pIdx ? 'opacity-100' : 'opacity-0'}`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid lg:grid-cols-12 gap-8 md:gap-16 items-start h-full"
                >
                  <div className="lg:col-span-7 space-y-6 md:space-y-8 overflow-y-auto custom-scrollbar h-full pr-4">
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-gold font-display text-2xl italic opacity-30">0{currentSlide + 1}</span>
                        <h3 className="text-gold text-[10px] font-black tracking-[0.4em] uppercase italic">{STRATEGY_CONTENT[currentSlide].subtitle}</h3>
                      </motion.div>
                      <h4 className="text-2xl md:text-4xl font-display leading-tight">{STRATEGY_CONTENT[currentSlide].title}</h4>
                    </div>

                    <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed font-light text-justify md:text-left italic border-l-2 border-gold/10 pl-6">
                      {STRATEGY_CONTENT[currentSlide].text}
                    </p>
                  </div>

                  <div className="lg:col-span-5 h-full pt-4 md:pt-0">
                    <div className="bg-white/[0.03] border border-white/5 p-6 md:p-10 relative overflow-hidden h-full flex flex-col rounded-sm">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16" />
                      
                      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                        <h5 className="text-white text-[10px] font-black tracking-[0.4em] uppercase">
                          Piliers Stratégiques
                        </h5>
                        <div className="w-1 h-1 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(197,160,89,1)]" />
                      </div>

                      <ul className="space-y-6 flex-1">
                        {STRATEGY_CONTENT[currentSlide].points?.map((point, pIdx) => (
                          <motion.li 
                            key={pIdx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (pIdx * 0.1) }}
                            className="flex items-start space-x-4 group"
                          >
                            <div className="w-1 h-6 bg-gold/20 group-hover:bg-gold/60 transition-all duration-500 flex-shrink-0" />
                            <span className="text-[10px] md:text-xs font-medium text-white/50 tracking-wide leading-snug group-hover:text-white/90 transition-colors pt-0.5">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center opacity-40">
                        <span className="text-[7px] tracking-[0.5em] uppercase">Operational Excellence</span>
                        <span className="text-gold text-[7px] font-bold tracking-[0.2em] italic">JAT.STRAT</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

const MiniIcon = ({ label, type }: { label: string; type: string }) => (
  <div className="flex flex-col items-center space-y-1 group/mini">
    <svg className="w-5 h-5 text-white/30 group-hover/mini:text-gold transition-colors duration-500 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
       <InfographicIcon type={type}/>
    </svg>
    <span className="text-[7px] text-white/40 uppercase tracking-tighter text-center leading-none group-hover/mini:text-white/70 transition-colors">
       {label}
    </span>
  </div>
);

const LongTermItem = ({ label, type, desc }: { label: string; type: string; desc: string }) => (
  <div className="flex items-start space-x-3 p-2 bg-white/5 rounded-sm border border-white/5 group/item">
     <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center text-gold group-hover/item:bg-gold group-hover/item:text-navy transition-all duration-500 border border-gold/20">
        <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.2"><InfographicIcon type={type}/></svg>
     </div>
     <div className="space-y-0.5">
        <h6 className="text-[9px] font-bold uppercase tracking-widest text-white/80">{label}</h6>
        <p className="text-[7px] text-white/30 leading-tight">Action Clé: {desc}</p>
     </div>
  </div>
);

export default Trajectory;
