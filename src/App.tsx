import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import ProofSection from './components/ProofSection';
import PlansSection from './components/PlansSection';
import DifferentialsSection from './components/DifferentialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <PainSection />
      <SolutionSection />
      <ProofSection />
      <PlansSection />
      <DifferentialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;