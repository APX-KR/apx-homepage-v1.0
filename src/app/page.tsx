import React from 'react';
import HeroSection from '../components/home/HeroSection.tsx';
import ProblemSection from '../components/home/ProblemSection.tsx';
import FunnelSection from '../components/home/FunnelSection.tsx';
import FrameworkSection from '../components/home/FrameworkSection.tsx';
import InteractiveSection from '../components/home/InteractiveSection.tsx';
import PartnerSection from '../components/home/PartnerSection.tsx';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-bg-primary to-bg-secondary">
        <HeroSection />
        <ProblemSection />
      </div>
      <div className="bg-bg-primary">
        <FunnelSection />
      </div>
      <div className="bg-bg-secondary">
        <FrameworkSection />
      </div>
      <InteractiveSection />
      <PartnerSection />
    </>
  );
}