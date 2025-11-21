import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuantumThreatSection from '@/components/QuantumThreatSection';
import ExplodedViewSection from '@/components/ExplodedViewSection';
import FeaturesSection from '@/components/FeaturesSection';
import NetworkProtectionSection from '@/components/NetworkProtectionSection';
import ProductPhotographySection from '@/components/ProductPhotographySection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-quantum-black">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section - Main product showcase */}
      <HeroSection />

      {/* How Quantum Attacks Work - Educational threat section */}
      <QuantumThreatSection />

      {/* Exploded 3D Device View - Internal technology showcase */}
      <ExplodedViewSection />

      {/* Features Grid - Key capabilities */}
      <FeaturesSection />

      {/* Network Protection Visualization - Global security map */}
      <NetworkProtectionSection />

      {/* Product Photography - Premium hardware showcase */}
      <ProductPhotographySection />

      {/* Pricing Cards - Purchase options */}
      <PricingSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
