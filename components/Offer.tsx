import React from 'react';
import { COURSE_PREVIEWS, STACK_ITEMS, ASSETS, CHECKOUT_URL } from '../constants';
import BiotechButton from './ui/BiotechButton';
import { CheckCircle2, Lock } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-24 px-4 bg-forest text-cream relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.03),transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
            TU CAJA FUERTE DE <span className="text-lime">TRANSFORMACIÓN</span>
          </h2>
          <p className="text-white/60">Tu Faja Natural activada de por vida por menos de lo que cuesta una cena.</p>
        </div>

        {/* Carousel Preview */}
        <div className="mb-12 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory flex gap-4">
          {COURSE_PREVIEWS.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-80 h-48 rounded-xl overflow-hidden border border-white/10 hover:border-lime/50 transition-colors snap-center shadow-lg relative group">
              <img src={src} alt={`Preview ${i}`} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-forest/20 group-hover:bg-transparent transition-all"></div>
            </div>
          ))}
        </div>

        {/* The Stack - Black Card Style */}
        <div className="bg-forest border border-lime/20 shadow-2xl shadow-black/50 rounded-3xl p-6 md:p-8 mb-12 relative overflow-hidden">
           {/* Gloss effect on card */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="space-y-4 relative z-10">
              {STACK_ITEMS.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 hover:bg-white/5 p-2 rounded transition-colors">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-lime" />
                    <span className="font-medium text-white/90 text-lg">{item.name}</span>
                  </div>
                  <span className="text-coral/70 line-through font-mono text-sm">{item.price}</span>
                </div>
              ))}
              
              {/* Total Value */}
              <div className="flex justify-between items-center pt-4 mt-4 border-t border-white/10 text-white/40 font-mono text-sm">
                 <span>VALOR TOTAL REAL</span>
                 <span className="line-through decoration-coral/50">USD $558.00</span>
              </div>
           </div>
        </div>

        {/* Big Price & CTA - THE OFFER */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-lime mb-4 font-bold animate-pulse">Oferta Limitada</p>
          
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="font-display font-black text-8xl md:text-9xl text-white tracking-tighter drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] leading-none">
              39.99
            </div>
            <span className="text-2xl text-white/50 font-medium mt-2">DÓLARES (USD)</span>
          </div>
          
          <BiotechButton 
            text="DESBLOQUEAR ACCESO COMPLETO 🔓" 
            fullWidth 
            className="mb-8 text-xl md:text-2xl py-6 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
            onClick={() => window.open(CHECKOUT_URL, '_blank')}
          />

          <div className="flex flex-col items-center gap-4">
            {/* Payment Methods - REMOVED MIX BLEND MODE for transparent image */}
            <div className="bg-forest p-4 rounded-lg w-full flex justify-center">
                <img 
                  src={ASSETS.payments} 
                  alt="Métodos de pago" 
                  className="h-28 md:h-40 object-contain" 
                />
            </div>
            
            <div className="flex items-center gap-2 text-xs text-white/30 tracking-widest uppercase">
              <Lock size={12} />
              <span>Transacción Encriptada 256-bit SSL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;