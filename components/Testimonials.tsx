import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS_IMGS, VIDEO_TESTIMONIALS } from '../constants';
import { ShieldCheck, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic for image carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      // Check if we've reached the end (with small buffer)
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-forest mb-12">
          MAMÁS REALES, RESULTADOS <span className="text-coral">BIOLÓGICOS</span>
        </h2>

        {/* Text/Image Testimonials - Auto Scroll */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 mb-16 snap-x snap-mandatory scrollbar-hide px-4"
        >
          {TESTIMONIALS_IMGS.map((img, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[350px] snap-center glass-panel p-3 rounded-2xl shadow-lg border border-white/60">
              <div className="mb-2 flex gap-1">
                 {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-gold text-gold" />)}
              </div>
              <img src={img} alt="Testimonio" className="w-full rounded-xl" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Video Stories - Vertical Format */}
        <div className="mb-24">
          <h3 className="text-center font-bold text-forest/40 mb-8 uppercase tracking-widest text-xs">Historias de Éxito en Video</h3>
          <div className="flex justify-center flex-wrap gap-6">
            {VIDEO_TESTIMONIALS.map((video, i) => (
              <div key={i} className="relative w-[160px] h-[280px] md:w-[180px] md:h-[320px] shrink-0 rounded-2xl overflow-hidden border-[4px] border-lime/30 shadow-xl cursor-pointer group hover:scale-105 transition-transform">
                <video 
                  src={video} 
                  className="w-full h-full object-cover" 
                  controls
                  playsInline
                />
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee - CERTIFICATE STYLE */}
        <div className="max-w-4xl mx-auto bg-[#FDFBF7] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center border-4 border-double border-gold/40">
           {/* Decorative Corners */}
           <div className="absolute top-2 left-2 w-16 h-16 border-t-4 border-l-4 border-gold/60 rounded-tl-lg"></div>
           <div className="absolute top-2 right-2 w-16 h-16 border-t-4 border-r-4 border-gold/60 rounded-tr-lg"></div>
           <div className="absolute bottom-2 left-2 w-16 h-16 border-b-4 border-l-4 border-gold/60 rounded-bl-lg"></div>
           <div className="absolute bottom-2 right-2 w-16 h-16 border-b-4 border-r-4 border-gold/60 rounded-br-lg"></div>

           <div className="mb-6 relative">
             <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full"></div>
             <ShieldCheck size={80} className="text-gold relative z-10 drop-shadow-md" />
           </div>
           
           <h3 className="font-serif text-3xl md:text-5xl font-bold text-forest mb-4 italic tracking-tight">
             Garantía de Hierro
           </h3>
           <div className="h-1 w-32 bg-gold/30 mb-6"></div>
           
           <p className="font-serif text-forest/80 mb-6 text-lg md:text-xl max-w-2xl leading-relaxed">
             "Tienes 7 días completos para probar el programa. Si no sientes que es la solución más <span className="italic font-bold text-forest">amorosa y efectiva</span> para tu cuerpo, te devolvemos el 100% de tu inversión."
           </p>
           
           <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold/80 border border-gold/30 px-4 py-2 rounded">
             <Star size={12} className="fill-gold" />
             Certificado de Satisfacción 100%
             <Star size={12} className="fill-gold" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;