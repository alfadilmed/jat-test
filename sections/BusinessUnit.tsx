
import React from 'react';

interface BusinessUnitProps {
  type: 'immobilier' | 'agritech' | 'logistics';
  title: string;
  subtitle: string;
  image: string;
  points: string[];
  isReversed?: boolean;
}

const BusinessUnit: React.FC<BusinessUnitProps> = ({ title, subtitle, image, points, isReversed }) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-black">
      <div className={`flex flex-col md:flex-row w-full h-full ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Content Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-24 z-10 bg-[#080808]">
          <div className="max-w-xl">
            <h4 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-6">Pôle Stratégique</h4>
            <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-white/60 text-lg mb-12 italic border-l-2 border-gold/30 pl-6">
              {subtitle}
            </p>
            
            <ul className="space-y-6">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-4 group">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gold/40 text-gold text-[10px] font-bold shrink-0 mt-1 group-hover:bg-gold group-hover:text-black transition-all">
                    0{idx + 1}
                  </span>
                  <span className="text-white/80 text-base leading-snug group-hover:text-white transition-colors">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <button className="mt-16 px-10 py-4 border border-gold/40 text-gold text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300">
              Découvrir les Projets
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent z-10 hidden md:block" />
          <img 
            src={image} 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
            alt={title}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
        </div>

      </div>
    </div>
  );
};

export default BusinessUnit;
