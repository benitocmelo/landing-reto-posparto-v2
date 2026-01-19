import React from 'react';
import { ASSETS } from '../constants';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const PainAgitation: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-forest/5 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl border-l-4 border-l-coral/50 relative">
          <div className="absolute -top-5 -left-5 bg-coral text-white p-3 rounded-full shadow-lg">
            <AlertCircle size={32} />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-6">
            ¿Te miras al espejo y no te reconoces?
          </h2>
          
          <div className="space-y-4 text-forest/80 text-lg leading-relaxed">
            <p>
              Sé exactamente cómo te sientes. Ese momento en el que sales de la ducha, miras tu abdomen y sientes un vacío. 
              <span className="font-semibold text-coral"> No es solo estética.</span>
            </p>
            <p>
              Son los escapes de orina al reír. Es el dolor de espalda al cargar a tu bebé. Es la culpa de sentir que tu cuerpo "te falló".
            </p>
            <p className="font-medium italic border-l-2 border-forest/20 pl-4">
              "Todo el mundo me dice que disfrute a mi bebé, pero nadie me dijo que me sentiría atrapada en un cuerpo que no es el mío."
            </p>
          </div>

          <div className="mt-8 bg-lime/10 p-4 rounded-xl flex items-start gap-3 border border-lime/30">
             <div className="bg-lime rounded-full p-1 mt-1 shrink-0">
               <CheckCircle2 size={16} className="text-forest" />
             </div>
             <div>
               <h4 className="font-bold text-forest">NO ES TU CULPA</h4>
               <p className="text-sm text-forest/80">Tu cuerpo pasó por el evento biológico más traumático posible. Necesitas reparación, no castigo.</p>
             </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative group">
           {/* Decorative Biotech Elements */}
           <div className="absolute inset-0 border border-forest/10 rounded-2xl scale-105"></div>
           <div className="absolute top-10 -right-10 w-32 h-32 bg-coral/20 rounded-full blur-2xl"></div>

           <div className="relative overflow-hidden rounded-2xl shadow-xl grayscale-[30%] hover:grayscale-0 transition-all duration-700">
             <img 
               src={ASSETS.imgPain} 
               alt="Abdomen posparto efecto globo" 
               className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
               loading="lazy"
             />
             
             {/* Clinical Overlay */}
             <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded text-xs font-mono text-coral font-bold border border-coral/30">
               DIAGNÓSTICO: DIASTASIS
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default PainAgitation;