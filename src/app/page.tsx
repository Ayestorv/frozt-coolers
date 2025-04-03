"use client";

import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProductsSection } from "../components/ProductsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { LanguageDetector } from "../components/LanguageDetector";

export default function Home() {
  return (
    <>
      <LanguageDetector />
      <main className="relative min-h-screen overflow-hidden">
        {/* Global Background - dark gradient that spans the entire page */}
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-navy-900 to-black z-0"></div>
        
        {/* Content with appropriate z-index to appear above the global background */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <ProductsSection />
          <FeaturesSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <WhatsAppButton phoneNumber="15551234567" />
        </div>
      </main>
    </>
  );
}
