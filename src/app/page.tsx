import React from 'react';
import HeroSection from '../components/home/HeroSection.js';
import ProblemSection from '../components/home/ProblemSection.js';
import FunnelSection from '../components/home/FunnelSection.js';
import FrameworkSection from '../components/home/FrameworkSection.js';
import InteractiveSection from '../components/home/InteractiveSection.js';
import PartnerSection from '../components/home/PartnerSection.js';

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