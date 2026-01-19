import React from 'react';
import { ASSETS } from '../constants';
import BiotechButton from './ui/BiotechButton';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-12 pb-20 px-4 overflow-hidden">
      {/* Ambient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
        {/* Pre-headline */}
        <div className="inline-block mb-4 px-4 py-1 bg-coral/10 rounded-full border border-coral/20">
          <p className="text-coral font-bold text-xs md:text-sm tracking-wider uppercase">
            ⏱️ SOLO 5 MINUTOS AL DÍA
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-forest">
          REDUCE CINTURA Y APLANA TU ABDOMEN <br/>
          <span className="relative inline-block mt-2">
            <span className="relative z-10">DESDE CASA</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-lime" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-forest/80 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
          Olvídate del gimnasio y las dietas estrictas. Activa tu "Faja Interna" natural con ejercicios de respiración simples y recupera tu figura sin sacrificios.
        </p>

        {/* VSL Widget */}
        <div className="relative w-full max-w-3xl aspect-video bg-forest rounded-2xl shadow-2xl shadow-lime/20 border-4 border-white/50 animate-float mb-12 group overflow-hidden">
           {/* Tablet Frame Glare */}
           <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/20 z-20"></div>
           
           <video 
             src={ASSETS.vsl}
             className="w-full h-full object-cover rounded-xl relative z-10"
             autoPlay
             muted
             loop
             playsInline
             controls
             poster={ASSETS.imgPain} // Fallback
           />
           
           {/* Badge moved to top to avoid overlapping native controls */}
           <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white text-xs flex items-center gap-1 z-30 pointer-events-none">
             <Play size={12} fill="white" /> VSL ACTIVADO
           </div>
        </div>

        {/* CTA */}
        <BiotechButton 
          text="QUIERO ACTIVAR MI FAJA AHORA >>"
          variant="primary"
          className="w-full md:w-auto min-w-[320px]"
          onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
        />
        
        <p className="mt-4 text-sm text-forest/60">
          🔒 Acceso Inmediato • Garantía de 7 Días
        </p>
      </div>
    </section>
  );
};

export default Hero;