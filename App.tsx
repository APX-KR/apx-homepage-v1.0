

import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/home/HeroSection';
import ProblemSection from './components/home/ProblemSection';
import FrameworkSection from './components/home/FrameworkSection';
import FunnelSection from './components/home/FunnelSection';
import InteractiveSection from './components/home/InteractiveSection';
import PartnerSection from './components/home/PartnerSection';
import { ModalProvider } from './contexts/ModalContext';
import ContactModal from './components/common/ContactModal';

const App: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <ModalProvider>
      <div className="bg-bg-primary">
        <Header onMegaMenuToggle={setIsMegaMenuOpen} />
        <main className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isMegaMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
          <div className="bg-gradient-to-b from-bg-primary to-bg-secondary">
            <HeroSection />
            <ProblemSection />
          </div>
          <FunnelSection />
          <FrameworkSection />
          <InteractiveSection />
          <PartnerSection />
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  );
};

export default App;