
import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC<{ onFinished: () => void }> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExiting(true), 500);
          setTimeout(onFinished, 1300);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#001A33] transition-transform duration-1000 ease-in-out ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="relative flex flex-col items-center">
        {/* Logo J with enhanced premium animation */}
        <div className="w-24 h-24 bg-white flex items-center justify-center font-bold text-navy text-6xl font-montserrat shadow-2xl animate-premium-float">
          J
        </div>
        
        <div className="mt-12 overflow-hidden text-center">
          <span className="block text-white text-xs font-black tracking-[0.5em] uppercase opacity-70 mb-4 animate-fade-in">
            JAT HOLDING
          </span>
          <div className="w-48 h-[1px] bg-white/10 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-gold transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="block mt-4 text-gold text-[10px] font-mono tracking-widest opacity-50">
            {progress}%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes premium-float {
          0% { 
            transform: scale(1) rotate(-1.5deg);
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
          }
          25% {
            transform: scale(1.03) rotate(0deg);
            box-shadow: 0 25px 45px -12px rgba(197, 160, 89, 0.15);
          }
          50% { 
            transform: scale(1.06) rotate(1.5deg);
            box-shadow: 0 35px 60px -15px rgba(197, 160, 89, 0.25);
          }
          75% {
            transform: scale(1.03) rotate(0deg);
            box-shadow: 0 25px 45px -12px rgba(197, 160, 89, 0.15);
          }
          100% { 
            transform: scale(1) rotate(-1.5deg);
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 0.7; transform: translateY(0); }
        }
        .animate-premium-float {
          animation: premium-float 4s infinite ease-in-out;
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
