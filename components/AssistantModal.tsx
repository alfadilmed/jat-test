
import React, { useState } from 'react';
import { getHoldingBriefing } from '../services/geminiService';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    const result = await getHoldingBriefing(prompt);
    setResponse(result || '');
    setIsLoading(false);
  };

  const suggestions = [
    "Ambition en Afrique ?",
    "Pôle AgriTech",
    "Immobilier GATI",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
      <div className="w-full max-w-4xl bg-[#0D0D0D] border border-white/10 rounded-sm shadow-2xl flex flex-col max-h-[95vh] relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <h3 className="text-white font-montserrat font-bold tracking-widest uppercase text-[10px] md:text-sm">Briefing IA Stratégique</h3>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 text-white/80 leading-relaxed font-light">
          {response ? (
            <div className="prose prose-invert max-w-none">
              <div className="text-sm md:text-base whitespace-pre-wrap leading-loose">{response}</div>
              <button 
                onClick={() => setResponse('')} 
                className="mt-8 text-gold text-[10px] font-bold uppercase tracking-widest border-b border-gold/40 pb-1"
              >
                Nouvelle question
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-full justify-center">
              <p className="text-lg md:text-2xl text-white mb-8 text-center">Vision Horizon 2026.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
                {suggestions.map((s, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setPrompt(s)}
                    className="p-4 bg-white/[0.03] border border-white/10 text-[10px] text-white/60 hover:border-gold hover:text-gold transition-all text-left truncate"
                  >
                    "{s}"
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Posez votre question institutionnelle..."
                  className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-sm text-white transition-all resize-none"
                  rows={2}
                />
                <button 
                  onClick={handleAsk}
                  disabled={isLoading}
                  className="w-full md:w-auto px-10 py-4 bg-gold text-navy font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Analyse...' : 'Analyser'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssistantModal;