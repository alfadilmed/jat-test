
import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface ActivityItem {
  label: string;
  desc: string;
}

interface SynergyItem {
  name: string;
  desc: string;
  icon?: string;
}

interface PillarContent {
  label?: string;
  text: string;
}

interface Pillar {
  title: string;
  icon: 'robotic-arm' | 'gears' | 'investors' | 'hospital' | 'brain-tech' | 'education' | 'talents' | 'outsourcing' | 'landscape' | 'drone' | 'factory-solar' | 'handshake-doc' | 'fintech-app' | 'synergy-nodes' | 'strategy-map';
  content: PillarContent[];
}

interface RowColumn {
  label: string;
  text: string;
}

interface DetailRow {
  title: string;
  icon: 'crane' | 'interior';
  columns: RowColumn[];
}

interface PoleDetailProps {
  title: string;
  subtitle: string;
  image: string;
  points?: string[];
  details?: {
    strategicRole?: string;
    entity?: string;
    activities?: ActivityItem[];
    synergies?: SynergyItem[];
    hideSideImage?: boolean;
    layoutType?: 'standard' | 'pillars' | 'rows' | 'split-detail';
    pillars?: Pillar[];
    rows?: DetailRow[];
  };
  isEven: boolean;
}

const IconFactory = ({ type }: { type: string }) => {
  const iconClass = "w-8 h-8 md:w-10 md:h-10 text-gold fill-none stroke-current";
  const strokeWidth = "1.2";

  switch (type) {
    case 'robotic-arm':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-7l-2-3 2-3h4l2 3-2 3v7" />
          <circle cx="12" cy="5" r="3" />
          <path d="M7 22h10" />
        </svg>
      );
    case 'gears':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42M6.34 17.66l1.42-1.42M16.24 7.76l1.42-1.42" />
        </svg>
      );
    case 'investors':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
          <circle cx="15" cy="15" r="2" />
        </svg>
      );
    case 'crane':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V7l8-4 8 4v14" />
          <path d="M13 3v18M5 11h16M13 15h4" />
          <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
        </svg>
      );
    case 'interior':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M3 9h18M9 9l12 12M9 21l12-12" />
        </svg>
      );
    case 'hospital':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 21V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12" />
          <path d="M2 21h20" />
          <path d="M10 12h4" />
          <path d="M12 10v4" />
          <path d="M14 18h.01" />
          <path d="M10 18h.01" />
          <path d="M14 15h.01" />
          <path d="M10 15h.01" />
        </svg>
      );
    case 'brain-tech':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M14.5 2a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M19.5 7a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M19.5 15a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M14.5 19a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M9.5 19a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M4.5 15a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M4.5 7a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5z" />
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      );
    case 'education':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2.2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case 'talents':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M17 11l2 2 4-4" />
        </svg>
      );
    case 'outsourcing':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <path d="M12 9l5-2M7 17l3-2" />
          <path d="M19 7v5a2 2 0 0 1-2 2h-3" />
          <path d="M5 17v-5a2 2 0 0 1 2-2h3" />
        </svg>
      );
    case 'landscape':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18l-3.5-7L4 18h8z" />
          <path d="M20 18l-5-10-3.5 7h8.5z" />
          <circle cx="17" cy="7" r="2" />
          <path d="M2 21h20" />
        </svg>
      );
    case 'drone':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M5 5l4 4M19 5l-4 4M5 19l4-4M19 19l-4-4" />
          <path d="M2 5h6M16 5h6M2 19h6M16 19h6" />
        </svg>
      );
    case 'factory-solar':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V9l5-3v15M10 21V7l5-3v17M15 21V5l5-3v17M15 21V5l5-3v19" />
          <circle cx="12" cy="3" r="1.5" />
        </svg>
      );
    case 'handshake-doc':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 17h2" />
          <path d="M7 18h10" />
          <path d="m10 10 2 2 2-2" />
          <path d="m7 21 5-5 5 5" />
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M2 12h20" />
        </svg>
      );
    case 'fintech-app':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <rect width="12" height="20" x="6" y="2" rx="2" />
          <path d="M12 18h.01" />
          <path d="M12 14v.01" />
          <circle cx="12" cy="10" r="3" />
          <path d="M3 7h3" />
          <path d="M18 7h3" />
          <path d="M3 17h3" />
          <path d="M18 17h3" />
        </svg>
      );
    case 'synergy-nodes':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="M17.3 6.7l-3.6 3.6M6.7 17.3l3.6-3.6M6.7 6.7l3.6 3.6M17.3 17.3l-3.6-3.6" />
        </svg>
      );
    case 'strategy-map':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z" />
          <path d="M9 4v13M15 7v13" />
        </svg>
      );
    default:
      return null;
  }
};

const PoleDetail: React.FC<PoleDetailProps> = ({ title, subtitle, image, points, details, isEven }) => {
  const isPillarsLayout = details?.layoutType === 'pillars';
  const isRowsLayout = details?.layoutType === 'rows';
  const isSplitDetail = details?.layoutType === 'split-detail';
  const hideSideImage = details?.hideSideImage;

  return (
    <div className="w-full h-full flex flex-col bg-navy text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <img src={image} className="w-full h-full object-cover opacity-20" alt={title} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/60 to-navy" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] relative z-10 pt-[75px] pb-[25px] md:pb-[40px]">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] w-full flex flex-col h-full"
        >
          <header className="mb-2 md:mb-4 text-center md:text-left shrink-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-1 tracking-tight leading-none">
              {title}
            </h2>
            <p className="text-white/80 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-4xl border-l-2 border-gold/40 pl-5 md:pl-6 italic mx-auto md:mx-0">
              {subtitle}
            </p>
          </header>

          {isPillarsLayout && details?.pillars ? (
            <div className="flex-1 flex flex-col min-h-0 space-y-4">
               <div className={`grid md:grid-cols-${details.pillars.length} gap-4 md:gap-6 flex-1 min-h-0`}>
                {details.pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white/[0.03] border border-white/10 p-5 md:p-6 rounded-sm backdrop-blur-md flex flex-col group hover:bg-white/[0.06] transition-all duration-500 relative min-h-0"
                  >
                    <div className="flex items-center space-x-4 mb-4 md:mb-6 border-b border-white/10 pb-4 group/header shrink-0">
                      <div className="transform group-hover/header:scale-110 transition-transform duration-500 flex-shrink-0">
                        <IconFactory type={pillar.icon} />
                      </div>
                      <h5 className="text-white font-black text-[10px] md:text-xs tracking-[0.2em] uppercase leading-tight">
                        {pillar.title}
                      </h5>
                    </div>
                    
                    <div className="space-y-4 md:space-y-5 flex-1 overflow-y-auto custom-scrollbar pr-2">
                      {pillar.content.map((item, cIdx) => (
                        <div key={cIdx} className="space-y-1">
                          <div className="flex items-start space-x-3">
                            <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold/50 flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <p className="text-[10px] md:text-[11px] text-white/80 leading-relaxed font-light text-justify">
                              {item.label && <span className="font-bold text-white tracking-wider block mb-0.5 uppercase text-[9px]">{item.label} :</span>}
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {(details.strategicRole || (details.synergies && details.synergies.length > 0)) && (
                <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-white/10 shrink-0">
                  {details.strategicRole && (
                    <div className="space-y-2">
                       <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase border-b border-white/5 pb-1">
                        {title.includes('Synergies') ? 'NOTRE FORCE' : 'RÔLE STRATÉGIQUE'}
                      </h5>
                      <p className="text-white/60 text-[10px] md:text-[11px] leading-relaxed font-light italic">
                        {details.strategicRole}
                      </p>
                    </div>
                  )}
                  {details.synergies && details.synergies.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase border-b border-white/5 pb-1">
                        SYNERGIES CLÉS
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                        {details.synergies.map((synergy, idx) => (
                          <div key={idx} className="flex items-start space-x-2 group">
                             <div className="mt-1 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                                <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                             </div>
                             <div className="space-y-0">
                               <h6 className="text-[9px] font-bold text-white/80 group-hover:text-gold transition-colors">{synergy.name}</h6>
                               <p className="text-[8px] text-white/40 leading-relaxed">{synergy.desc}</p>
                             </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : isSplitDetail ? (
            <div className="flex-1 min-h-0 overflow-hidden">
              <div className={`${hideSideImage ? 'max-w-6xl mx-auto grid md:grid-cols-12 gap-x-12 gap-y-6' : 'lg:grid-cols-12 grid gap-8'} items-start h-full overflow-y-auto custom-scrollbar pr-2`}>
                
                <section className={`${hideSideImage ? 'md:col-span-4' : 'lg:col-span-7'} space-y-3`}>
                  <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase border-b border-white/10 pb-1">
                    {title.includes('Stockage') ? 'OBJECTIF STRATÉGIQUE' : 'RÔLE STRATÉGIQUE'}
                  </h5>
                  <p className="text-white/70 text-[11px] md:text-sm leading-relaxed font-light text-justify italic">
                    {details?.strategicRole}
                  </p>
                </section>

                <section className={`${hideSideImage ? 'md:col-span-8' : 'lg:col-span-7'} space-y-4`}>
                  <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase border-b border-white/10 pb-1">
                    {title.includes('Stockage') ? 'SITES & INFRASTRUCTURES' : "PÉRIMÈTRE D'ACTIVITÉS"}
                  </h5>
                  <ul className="space-y-3 grid md:grid-cols-2 gap-x-8">
                    {details?.activities?.map((activity, idx) => (
                      <li key={idx} className="flex items-start space-x-3 group">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors flex-shrink-0" />
                        <p className="text-white/60 text-[10px] md:text-xs leading-relaxed group-hover:text-white transition-colors">
                          <span className="font-bold text-white/80 group-hover:text-gold tracking-wide">{activity.label} :</span> {activity.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>

                {!hideSideImage && (
                  <div className="lg:col-span-5 h-full relative">
                    <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[90%] group overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 border border-gold/20 -m-3 transition-transform duration-700 group-hover:scale-105 z-20 pointer-events-none" />
                      <img src={image} className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" alt={title} />
                      <div className="absolute inset-0 bg-navy/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                      
                      <div className="absolute bottom-8 left-8 right-8 p-4 bg-navy/80 backdrop-blur-xl border border-white/10 flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-30">
                        <span className="text-[7px] font-black tracking-[0.3em] uppercase text-gold">Standard Institutionnel</span>
                        <h5 className="text-white font-display text-lg italic tracking-tight">Excellence Logistique</h5>
                      </div>
                    </div>
                  </div>
                )}

                <section className={`${hideSideImage ? 'md:col-span-12' : 'lg:col-span-7'} space-y-4 pb-6`}>
                  <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase border-b border-white/10 pb-1">
                    SYNERGIES CLÉS
                  </h5>
                  <div className={`grid ${hideSideImage ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                    {details?.synergies?.map((synergy, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-white/5 p-3 rounded-sm border border-white/5 hover:bg-white/[0.08] transition-all">
                        <div className="mt-1 flex-shrink-0">
                          <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <h6 className="text-[9px] font-bold tracking-wider text-white uppercase">{synergy.name}</h6>
                          <p className="text-[9px] text-white/40 leading-relaxed font-light">{synergy.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          ) : isRowsLayout && details?.rows ? (
            <div className="flex-1 flex flex-col justify-center space-y-6 pb-6 min-h-0">
              {details.rows.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className={`bg-white/[0.03] border border-white/10 rounded-sm p-6 backdrop-blur-md relative group transition-all duration-500 hover:bg-white/[0.06] ${idx < details.rows!.length - 1 ? 'border-b-gold/20' : ''}`}
                >
                  <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
                    <div className="lg:w-1/4 flex items-center space-x-4">
                      <div className="flex-shrink-0 bg-navy/50 p-3 rounded-sm border border-white/5 shadow-inner">
                        <IconFactory type={row.icon} />
                      </div>
                      <h4 className="text-white font-black text-[10px] md:text-xs lg:text-sm tracking-[0.2em] uppercase leading-tight">
                        {row.title}
                      </h4>
                    </div>
                    <div className="lg:w-3/4 grid md:grid-cols-3 gap-6">
                      {row.columns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-1 border-l border-gold/20 pl-4">
                          <span className="text-[9px] font-black text-gold uppercase tracking-[0.2em] block mb-0.5">
                            {col.label} :
                          </span>
                          <p className="text-[10px] text-white/60 leading-relaxed font-light">
                            {col.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : details ? (
            <div className="grid lg:grid-cols-12 gap-6 flex-1 items-start h-full min-h-0 overflow-hidden">
               <div className="lg:col-span-5 space-y-4 overflow-y-auto custom-scrollbar pr-2">
                {details.strategicRole && (
                  <section>
                    <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-2 border-b border-white/10 pb-1">
                      RÔLE STRATÉGIQUE
                    </h5>
                    <p className="text-white/70 text-[11px] md:text-sm leading-relaxed font-light text-justify italic">
                      {details.strategicRole}
                    </p>
                  </section>
                )}
                {details.synergies && (
                  <section>
                    <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-3 border-b border-white/10 pb-1">
                      SYNERGIES CLÉS
                    </h5>
                    <div className="space-y-3">
                      {details.synergies.map((synergy, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group">
                          <div className="mt-1 flex-shrink-0">
                             <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                          <div className="space-y-0.5">
                            <h6 className="text-[10px] font-bold tracking-wider text-white group-hover:text-gold transition-colors">{synergy.name}</h6>
                            <p className="text-[9px] text-white/40 leading-relaxed font-light">{synergy.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
              {details.activities && (
                <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 p-4 md:p-5 rounded-sm backdrop-blur-sm h-full overflow-y-auto custom-scrollbar">
                  <h5 className="text-gold text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-1">
                    PÉRIMÈTRE D'ACTIVITÉS
                  </h5>
                  <p className="text-white/30 text-[8px] tracking-widest uppercase mb-3 font-bold italic">
                    (Entités du Pôle)
                  </p>
                  <div className="grid md:grid-cols-1 gap-x-8 gap-y-4">
                    {details.activities.map((activity, idx) => (
                      <div key={idx} className="space-y-1 group">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 rounded-full border border-gold/20 flex items-center justify-center text-gold text-[8px] font-black group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                            {idx + 1}
                          </div>
                          <h6 className="text-[10px] md:text-xs font-bold tracking-wide group-hover:text-gold transition-colors uppercase">{activity.label}</h6>
                        </div>
                        <p className="text-[9px] md:text-[10px] text-white/50 leading-relaxed font-light pl-8 italic">
                          {activity.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 flex-1 min-h-0`}>
              <div className="w-full md:w-1/2 space-y-6 overflow-y-auto custom-scrollbar pr-4">
                <ul className="space-y-4">
                  {points?.map((point, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-gold text-[10px] font-black group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                        {idx + 1}
                      </span>
                      <span className="text-white/70 text-sm md:text-base group-hover:text-white transition-colors duration-500 pt-1.5 leading-relaxed text-justify">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 shrink-0">
                <img src={image} className="w-full h-auto rounded-sm shadow-2xl max-h-[50vh] object-cover" alt={title} />
              </div>
            </div>
          )}
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
        }
      `}</style>
    </div>
  );
};

export default PoleDetail;
