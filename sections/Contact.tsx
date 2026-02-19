
import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#0A1016] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" className="w-full h-full object-cover" alt="African connectivity" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1016] via-transparent to-transparent" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[14px] md:px-[60px] relative z-10 overflow-y-auto md:overflow-hidden pt-[110px] pb-[60px] md:pb-[80px]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] w-full flex flex-col md:flex-row items-center gap-12 md:gap-24"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-8 md:space-y-12"
          >
            <h4 className="text-gold text-xs font-black tracking-[0.5em] uppercase">Conclusion</h4>
            <blockquote className="text-3xl md:text-6xl font-display leading-tight italic border-l-4 border-gold pl-6 md:pl-8">
              "Nous bâtissons <span className="text-gold">l'avenir économique de l'Afrique.</span>"
            </blockquote>
            
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12 pt-4">
              <div>
                <span className="block text-[8px] text-white/30 uppercase tracking-widest mb-1">Siège Social</span>
                <p className="text-base font-medium">Casablanca Finance City, Maroc</p>
              </div>
              <div>
                <span className="block text-[8px] text-white/30 uppercase tracking-widest mb-1">Relations Investisseurs</span>
                <p className="text-base font-medium">ir@jatholding.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 w-full max-w-lg rounded-sm">
              <h3 className="text-xl font-bold mb-8 font-display">Briefing Partenaire</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Entité / Groupe" className="w-full bg-white/5 border-b border-white/20 p-2 outline-none focus:border-gold transition-colors text-xs" />
                <input type="email" placeholder="Email" className="w-full bg-white/5 border-b border-white/20 p-2 outline-none focus:border-gold transition-colors text-xs" />
                <textarea placeholder="Message" className="w-full bg-white/5 border-b border-white/20 p-2 outline-none focus:border-gold transition-colors resize-none text-xs" rows={2}></textarea>
                <button className="w-full py-4 bg-gold text-navy font-black text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-500">Transmettre</button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
