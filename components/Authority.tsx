import React from 'react';
import { ASSETS } from '../constants';
import { Award, BadgeCheck, GraduationCap } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-forest relative overflow-hidden">
      {/* Technical Texture Background */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(#A3E635 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Left: Image Card (Not Circular) */}
        <div className="relative shrink-0 group">
          {/* Glowing Backing */}
          <div className="absolute -inset-1 bg-gradient-to-br from-lime to-forest rounded-[2.5rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative w-72 md:w-80 aspect-[3/4] rounded-[2rem] overflow-hidden border-2 border-lime/30 shadow-2xl">
            <img 
              src={ASSETS.natalia} 
              alt="Natalia Alarcón" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Tech Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest/90 to-transparent p-6">
                <p className="text-lime font-mono text-xs mb-1">ID: SPECIALIST_01</p>
                <div className="h-0.5 w-12 bg-lime"></div>
            </div>
          </div>
        </div>

        {/* Right: Bio & Authority */}
        <div className="text-center md:text-left text-white flex-1">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 text-cream">
            Natalia Alarcón
          </h2>
          <p className="text-lime text-xl font-medium mb-8 tracking-wide">Fisioterapeuta Especialista en Suelo Pélvico</p>
          
          <div className="space-y-6 text-white/80 leading-relaxed text-lg font-light mb-10">
            <p>
              Después de años tratando a cientos de mujeres en consulta privada, descubrí que el sistema tradicional falla a las mamás.
            </p>
            <p>
              Creé este método combinando la <span className="text-white font-bold border-b border-lime/50">biomecánica avanzada</span> con la realidad de la maternidad. No necesitas una hora al día. Necesitas los ejercicios correctos.
            </p>
          </div>

          {/* Badges Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <Badge icon={<Award />} text="Referente en Suelo Pélvico" />
             <Badge icon={<BadgeCheck />} text="+15 Años Experiencia" />
             <Badge icon={<GraduationCap />} text="Especialista Certificada" />
          </div>
        </div>

      </div>
    </section>
  );
};

const Badge = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex flex-col items-center md:items-start gap-2 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-lime/30 transition-colors">
    <div className="text-lime p-2 bg-lime/10 rounded-full">{icon}</div>
    <span className="text-sm font-medium text-white/90 text-center md:text-left">{text}</span>
  </div>
);

export default Authority;