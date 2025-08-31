
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import FunnelSection from '../components/home/FunnelSection';
import FrameworkSection from '../components/home/FrameworkSection';
import InteractiveSection from '../components/home/InteractiveSection';
import PartnerSection from '../components/home/PartnerSection';

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