
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const snapContainer = document.querySelector('.snap-container') as HTMLElement;
    if (snapContainer) {
      setContainer(snapContainer);
    }
  }, []);

  const { scrollXProgress } = useScroll({
    container: container ? { current: container } : undefined
  });
  
  const backgroundX = useTransform(scrollXProgress, [0, 0.15], [0, 80]);
  const backgroundY = useTransform(scrollXProgress, [0, 0.15], [0, -40]); 
  const backgroundScale = useTransform(scrollXProgress, [0, 0.15], [1.1, 1.2]);
  const backgroundOpacity = useTransform(scrollXProgress, [0, 0.1], [0.15, 0]);

  return (
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">
      <motion.div 
        style={{ 
          x: backgroundX, 
          y: backgroundY, 
          scale: backgroundScale, 
          opacity: backgroundOpacity 
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          className="w-full h-full object-cover"
          alt="JAT Holding Architectural Vision"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] relative z-10 overflow-y-auto md:overflow-hidden pt-[110px] pb-[60px] md:pb-[80px]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-[1400px] h-full flex flex-col items-center justify-center relative"
        >
          <motion.div 
            style={{ x: useTransform(scrollXProgress, [0, 0.1], [0, -40]) }}
            className="absolute top-0 left-0 w-[60vw] h-[60vw] border-[1px] border-navy/5 rounded-full -translate-x-1/4 -translate-y-1/4 pointer-events-none" 
          />
          
          <div className="relative z-20 flex flex-col items-center text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-gold text-[10px] md:text-xs font-black tracking-[0.6em] uppercase">Investissement Stratégique</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black font-montserrat text-navy tracking-tight leading-[0.85] mb-8"
            >
              JAT HOLDING
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex items-center space-x-8 md:space-x-16 overflow-hidden"
            >
              <div className="h-[1px] w-12 md:w-32 bg-navy/10" />
              <span className="text-lg md:text-2xl font-light font-montserrat tracking-[0.8em] md:tracking-[1.2em] text-navy/60">
                VISION 2026
              </span>
              <div className="h-[1px] w-12 md:w-32 bg-navy/10" />
            </motion.div>
          </div>

          <div className="absolute bottom-16 left-0 md:left-0 flex items-center space-x-6 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default">
            <span className="text-[9px] tracking-[0.5em] uppercase text-navy font-black whitespace-nowrap">L'excellence institutionnelle</span>
            <div className="h-[1px] w-24 md:w-48 bg-navy" />
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Hero;
