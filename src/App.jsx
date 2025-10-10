import React from 'react';
import Countdown from './components/Countdown';
import HeroSection from './components/Hero';
import MasterclassSection from './components/MasterclassSection';
import BeneficiarSection from './components/BeneficiarSection';
import CTASection  from './components/CTASection';
import Aboutsection  from './components/Aboutsection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Countdown />
      <HeroSection />
      <MasterclassSection />
      <BeneficiarSection />
      <CTASection  />
      <Aboutsection  />
    </div>
  );
}

export default App;