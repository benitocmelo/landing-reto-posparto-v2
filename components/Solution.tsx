import React from 'react';
import { ASSETS } from '../constants';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-cream relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-lime font-bold tracking-widest uppercase text-sm mb-2 block">Biotech Maternal System</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest inline-flex items-center gap-2">
            <Sparkles className="text-lime fill-lime" /> EL SECRETO: RESPIRACIÓN HIPOPRESIVA <Sparkles className="text-lime fill-lime" />
          </h2>
          <p className="mt-4 text-forest/70 max-w-2xl mx-auto text-lg">
            No necesitas sudar horas en el gimnasio. Al activar tu músculo transverso con nuestra técnica de respiración, generas un efecto de succión (vacío) que reduce centímetros de cintura automáticamente mientras mejoras tu postura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Visual Widget 1: The Goal */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-lime/10 group border border-lime/20 bg-white">
            <div className="absolute inset-0 z-10 border-[1px] border-white/20 pointer-events-none"></div>
            {/* Scanline Effect */}
            <div className="absolute w-full h-1 bg-lime/50 z-20 shadow-[0_0_15px_#A3E635] animate-scan opacity-50"></div>
            
            <img 
              src={ASSETS.imgSolution} 
              alt="Resultado Corset" 
              className="w-full h-96 object-cover object-top"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest to-transparent p-6 pt-20">
              <h3 className="text-white font-display font-bold text-xl">Efecto Corset Natural</h3>
              <p className="text-lime text-sm">Reprogramación de faja abdominal</p>
            </div>
          </div>

          {/* Visual Widget 2: The Mechanism */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-lime/10 border border-lime/20 bg-forest flex items-center justify-center">
            <img 
              src={ASSETS.imgMechanism} 
              alt="Mecanismo interno" 
              className="w-full h-96 object-cover opacity-90 mix-blend-screen"
              loading="lazy"
            />
             <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-mono text-lime border border-lime/30">
               HIPOPRESIVOS ACTIVOS
             </div>
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 opacity-60">
             <h3 className="text-lg font-bold mb-4 text-gray-500">Métodos Tradicionales</h3>
             <ul className="space-y-3">
               <li className="flex gap-2 text-gray-500"><XCircle size={20} /> Abdominales clásicos (Dañinos)</li>
               <li className="flex gap-2 text-gray-500"><XCircle size={20} /> Fajas asfixiantes</li>
               <li className="flex gap-2 text-gray-500"><XCircle size={20} /> Dietas de hambre</li>
             </ul>
           </div>
           
           <div className="bg-white p-6 rounded-2xl shadow-xl shadow-lime/10 border-2 border-lime transform scale-105 relative z-10">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-forest text-xs font-bold px-3 py-1 rounded-full uppercase">
               Tecnología Biotech
             </div>
             <h3 className="text-xl font-bold mb-4 text-forest">Método Reto 21 Días</h3>
             <ul className="space-y-3">
               {['Cintura más pequeña en semanas', 'Sin saltos ni impacto (Ideal Postparto)', 'Alivia el dolor de espalda al instante'].map((item, i) => (
                 <li key={i} className="flex gap-2 items-center font-medium text-forest">
                   <CheckCircle2 size={20} className="text-lime fill-lime/20" /> {item}
                 </li>
               ))}
             </ul>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;