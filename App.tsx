import React from 'react';
import Hero from './components/Hero';
import PainAgitation from './components/PainAgitation';
import Solution from './components/Solution';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Authority from './components/Authority';

function App() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <PainAgitation />
      <Solution />
      <Offer />
      <Testimonials />
      <Authority />
      
      {/* Footer Simple */}
      <footer className="bg-forest py-8 text-center text-white/30 text-xs px-4 border-t border-white/5">
        <p>© 2024 Reto Posparto 21 Días. Todos los derechos reservados.</p>
        <p className="mt-2">Este sitio no es parte del sitio web de Facebook o Facebook Inc.</p>
      </footer>
    </main>
  );
}

export default App;