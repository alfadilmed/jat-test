
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px]" />

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto relative z-10">
        <div>
          <h4 className="text-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">Notre Identité</h4>
          <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat text-white mb-8 leading-tight">
            Une Vision <br />Panafricaine Ancrée <br />au Maroc.
          </h2>
          <div className="h-1 w-20 bg-gold mb-12" />
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            JAT HOLDING est un groupe d'investissement structuré autour de secteurs stratégiques 
            clés pour le développement souverain et technologique. Nous croyons en un Maroc fort, 
            hub incontournable entre l'Europe et l'Afrique.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <AboutCard 
            title="Notre Mission" 
            text="Transformer les opportunités locales en succès industriels et technologiques durables."
          />
          <AboutCard 
            title="Ambition Afrique" 
            text="Positionner nos plateformes comme les catalyseurs du commerce et de la croissance sur le continent."
          />
          <AboutCard 
            title="Excellence" 
            text="Intégrer les plus hauts standards de gouvernance et de modernité dans chacun de nos pôles."
          />
        </div>
      </div>
    </div>
  );
};

const AboutCard: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold/30 transition-all duration-500 group">
    <h3 className="text-gold text-sm font-bold tracking-widest uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
      {title}
    </h3>
    <p className="text-white/50 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
      {text}
    </p>
  </div>
);

export default About;
